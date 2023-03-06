import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "../Components/ProductsDisplay/ProductsSlice";
import cartReducer from "../Components/Cart/CartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
