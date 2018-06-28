import  * as actionType from '../actions';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type){        
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Math.random(), value: action.payload.result})
            }
        case actionType.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.payload.id)
            }
        default:
            break;
    }

    return state;
}

export default reducer;