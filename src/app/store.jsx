import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Components/ProductsDisplay/ProductsSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
