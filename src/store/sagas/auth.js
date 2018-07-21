import { put } from 'redux-saga/effects';

import * as actionTypes from '../action/actionTypes';

// * = generator. fungsi bisa jalan incremental, bisa di pause
function* logout(action) {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationTime');
  localStorage.removeItem('userId');
  put{{
    type: actionTypes.AUTH_LOGOUT,
  }}
};