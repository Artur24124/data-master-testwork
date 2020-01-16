import { handleActions } from 'redux-actions';
import * as ordersActions from '../actions/orders';

const initState = {
  orders: [],
  loading: false,
  orderById: {},
  error: null
};

export const Orders = handleActions(
    {
        [ordersActions.getOrders]: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        [ordersActions.getOrdersSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        },
        [ordersActions.getOrdersError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        [ordersActions.getOrderById]: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        [ordersActions.getOrderByIdSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                orderById: action.payload
            }
        },
        [ordersActions.getOrderByIdError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },
        [ordersActions.getOrdersByFilter]: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        [ordersActions.getOrdersByFilterSuccess]: (state, action) => {
            return {
                ...state,
                loading: false,
                orders: action.payload
            }
        },
        [ordersActions.getOrdersByFilterError]: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
    },
    initState
);