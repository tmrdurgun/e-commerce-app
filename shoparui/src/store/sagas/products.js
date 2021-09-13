import {
    call,
    take,
    all,
    put,
} from 'redux-saga/effects';

import { request } from '../../utils/request';

import * as constants from '../constants';

import * as productActions from '../actions/products';

function* getProducts() {
    const result = yield call(request, "http://localhost:3002/products", 'get', false, true);

    try {
        if (result !== 'invalid') {
            yield put(productActions.setProducts(result.data));
        } else {
            throw new Error();
        }
    } catch (error) {
        console.log(error.message);
    }

}

export function* getAllproductsWatcher() {
    while (true) {
        const action = yield take(constants.GET_PRODUCTS);
        yield call(getProducts, action);
    }
}
