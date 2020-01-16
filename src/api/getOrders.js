import axios from 'axios';
import { API, GET_ORDERS } from './constants';

export const getOrders = () => {
  return axios.get(API + GET_ORDERS)
      .then((res) => {
          return res.data;
      })
};