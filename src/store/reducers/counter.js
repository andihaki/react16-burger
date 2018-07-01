import  * as actionType from '../actions/actionTypes';
import { updatedObject } from '../utility';

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionType.INCREMENT:
            // return {
            //     ...state,
            //     counter: state.counter + 1,
            // }
            return updatedObject(state, {counter: state.counter + 1,})
        case actionType.DECREMENT:
            return updatedObject(state, {counter: state.counter - 1,})            
        case actionType.ADD:
            return updatedObject(state, {counter: state.counter + action.payload.value, })
        case actionType.SUBTRACT:
            return updatedObject(state, {counter: state.counter - action.payload.value, });                  
        default:
            break;
    }

    return state;
}

export default reducer;