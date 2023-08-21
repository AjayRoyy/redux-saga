import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { fetchData, fetchSingleData } from "../../lib/fetchData";
import {
  getProductsFetch,
  getOneProductFetch,
  fetchSuccess,
  fetchFailure,
} from "../reducers/demoSlice";

function* fetchingData() {
  try {
    const data = yield call(() => fetchData());
    console.log(data);
    yield put(fetchSuccess(data.data.products));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}

function* getOneData(action) {
  try {
    const data = yield call(() => fetchSingleData(action.payload));
    console.log(data);
    yield put(getOneProductFetch(data.data));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}

// function* watchFetchingData() {
//   yield takeLatest("Product_Slice/getProductsFetch", fetchingData);
// }
// function* watchGetOneData() {
//   yield takeLatest("Product_Slice/getProductsFetch", getOneData);
// }

function* rootSaga() {
  yield takeLatest("Product_Slice/getProductsFetch", fetchingData);
  yield takeLatest("Product_Slice/getProductsFetch", getOneData);
}

export default rootSaga;
