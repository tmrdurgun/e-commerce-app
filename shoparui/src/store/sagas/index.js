import { all } from 'redux-saga/effects';

import {
  getAllproductsWatcher,
} from './products';

export default function* rootSaga() {
  yield all([
    getAllproductsWatcher(),
  ]);
}
