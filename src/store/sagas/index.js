import { fork } from 'redux-saga/effects';

import { ordersSagas } from './orders';

export default function* () {
    yield fork(ordersSagas);
}