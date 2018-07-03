import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newData = {
                ...action.orderData,
                id: action.id,
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newData),
            };
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }

};

export default reducer;