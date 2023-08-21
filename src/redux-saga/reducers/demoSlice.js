import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "Product_Slice",
  initialState: {
    value: [],
    singleValue: {},
    isLoading: false,
    error: "",
  },
  reducers: {
    getProductsFetch: (state, action) => {
      state.isLoading = true;
    },
    getOneProductFetch: (state, action) => {
      state.singleValue = action.payload;
      state.isLoading = false;
    },
    fetchSuccess: (state, action) => {
      state.value = action.payload;
      state.isLoading = false;
    },
    fetchFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getProductsFetch,
  getOneProductFetch,
  fetchSuccess,
  fetchFailure,
} = ProductSlice.actions;

export default ProductSlice.reducer;
