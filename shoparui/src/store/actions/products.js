import * as constants from '../constants';

export const getProducts = (data) => ({ type: constants.GET_PRODUCTS, data });
export const setProducts = (data) => ({ type: constants.SET_PRODUCTS, data });