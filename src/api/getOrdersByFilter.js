import axios from 'axios';
import { API, GET_ORDERS } from './constants';

export const getOrdersByFilter = (filter) => {
    return axios.get(`${API}${GET_ORDERS}?filter=${filter}`)
        .then((res) => {
            return res.data;
        })
};