import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = state.cartItems.concat(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.cartItems = [...state.cartItems];
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
