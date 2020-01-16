import { call, takeEvery, put } from 'redux-saga/effects';
import * as ordersActions from '../actions/orders';

import {
    getOrders,
    getOrderById,
    getOrdersByFilter
} from '../../api';

function* getOrdersSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getOrders, payload);
        yield put(ordersActions.getOrdersSuccess(response));
    } catch (e) {
        yield put(ordersActions.getOrdersError(e));
    }
}

function* getOrderByIdSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getOrderById, payload);
        yield put(ordersActions.getOrderByIdSuccess(response));
    } catch (e) {
        yield put(ordersActions.getOrderByIdError(e));
    }
}

function* getOrderByFilterSaga(action) {
    try {
        const { payload } = action;
        const response = yield call(getOrdersByFilter, payload);
        yield put(ordersActions.getOrdersByFilterSuccess(response));
    } catch (e) {
        yield put(ordersActions.getOrdersByFilterError(e));
    }
}

export function* ordersSagas() {
    yield takeEvery(
        ordersActions.getOrders.toString(),
        getOrdersSaga
    );

    yield takeEvery(
        ordersActions.getOrderById.toString(),
        getOrderByIdSaga
    );

    yield takeEvery(
        ordersActions.getOrdersByFilter.toString(),
        getOrderByFilterSaga
    );
}