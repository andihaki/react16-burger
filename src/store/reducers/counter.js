import  * as actionType from '../actions/actionTypes';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case actionType.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case actionType.ADD:
            return {
                ...state,
                counter: state.counter + action.payload.value,
            }
        case actionType.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.payload.value,
            }        
        default:
            break;
    }

    return state;
}

export default reducer;