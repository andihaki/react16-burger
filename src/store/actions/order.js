import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id,
        orderData,
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error,
    }
}

const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {                
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {                
                dispatch(purchaseBurgerFail(error));
            });
    }
}

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,        
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders,
    }
}

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAIL,
        error,
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START,
    }
}

export const fetchOrders = () => {
    return dispatch => {        
        axios.get('/orders.json')
            .then(res => {
                dispatch(fetchOrdersStart());
                // ubah object jadi array
                const fetchedOrders = [];
                for (let key in res.data){
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key,
                    });
                }                
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {                
                dispatch(fetchOrdersFail(err));
            })        
    }
}