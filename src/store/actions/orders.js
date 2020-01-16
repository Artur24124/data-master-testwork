import { createActions } from 'redux-actions';

export const {
    getOrders,
    getOrdersSuccess,
    getOrdersError,
    getOrderById,
    getOrderByIdSuccess,
    getOrderByIdError,
    getOrdersByFilter,
    getOrdersByFilterSuccess,
    getOrdersByFilterError
} = createActions(
    'GET_ORDERS',
    'GET_ORDERS_SUCCESS',
    'GET_ORDERS_ERROR',
    'GET_ORDER_BY_ID',
    'GET_ORDER_BY_ID_SUCCESS',
    'GET_ORDER_BY_ID_ERROR',
    'GET_ORDERS_BY_FILTER',
    'GET_ORDERS_BY_FILTER_SUCCESS',
    'GET_ORDERS_BY_FILTER_ERROR'
);