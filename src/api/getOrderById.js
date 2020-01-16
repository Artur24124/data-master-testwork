import axios from 'axios';
import { API, GET_ORDERS } from './constants';

export const getOrderById = (orderId) => {
    return axios.get(`${API}${GET_ORDERS}/${orderId}`)
        .then((res) => {
            return res.data;
        })
};