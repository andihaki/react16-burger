import  * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    results: [],
};

const deleteResult = (state, action) => {
    const deletedArray = state.results.filter(result => result.id !== action.payload.id);
    return updatedObject(state, {results: deletedArray,});
}

const storeResult = (state, action) => {
    const storedArray = state.results.concat({id: Math.random(), value: action.payload.result});
    return updatedObject(state, {results: storedArray,});
}

const reducer = (state = initialState, action) => {
    switch (action.type){        
        case actionType.STORE_RESULT:
            return storeResult(state, action);
        case actionType.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            break;
    }

    return state;
}

export default reducer;