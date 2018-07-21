import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions/index';
import {API_KEY} from '../key';

// * = generator. fungsi bisa jalan incremental, bisa di pause
export function* logoutSaga(action) {
  yield localStorage.removeItem('token'); // diekseskusi, dan ditunggu sampe selesai
  yield localStorage.removeItem('expirationTime');
  yield localStorage.removeItem('userId');
  yield put(actions.logoutSucceed());
};

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.authLogout);
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
      email: action.email,
      password: action.password,
      returnSecureToken: true
  };
  let url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${API_KEY}`;
  if (!action.isSignup){
      url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${API_KEY}`;
  }
  try {
    const response = yield axios.post(url, authData);

    const expirationTime = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
    yield localStorage.setItem('token', response.data.idToken);
    yield localStorage.setItem('expirationTime', expirationTime);
    yield localStorage.setItem('userId', response.data.localId);
    yield put(actions.authSuccess(response.data.idToken, response.data.localId));
    yield put(actions.checkAuthTimeout(response.data.expiresIn));    
  } catch (error) {
    yield put(actions.authFail(error.response.data.error.message));    
  };
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');
  if (!token){
      yield put(actions.authLogout());
  } else {
      const expirationTime = yield new Date(localStorage.getItem('expirationTime'));
      if (expirationTime <= new Date()) {                
          yield put(actions.authLogout());
      } else {
          const userId = yield localStorage.getItem('userId');
          yield put(actions.authSuccess(token, userId));
          yield put(actions.checkAuthTimeout(
            (expirationTime.getTime() - new Date().getTime())/1000)
          );                
      };
  };
};