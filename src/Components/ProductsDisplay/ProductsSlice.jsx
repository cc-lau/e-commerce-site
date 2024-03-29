import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchAllProducts = createAsyncThunk(
  "product/fetchProducts",
  () => {
    return axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => response.data);
  }
);

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  (productType) => {
    return axios
      .get("https://fakestoreapi.com/products/category/" + productType)
      .then((response) => response.data);
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchProducts",
  (productId) => {
    return axios
      .get("https://fakestoreapi.com/products/" + productId)
      .then((response) => response.data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      (state.loading = false),
        (state.products = action.payload),
        (state.error = "");
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      (state.loading = false),
        (state.products = []),
        (state.error = action.error.message);
    });
  },
});

export default productSlice.reducer;
