import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/ProductsSaga";
import ProductSlice from "../redux-saga/reducers/demoSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    products: ProductSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
