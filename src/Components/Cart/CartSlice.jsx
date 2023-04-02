import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = state.cartItems.concat(action.payload);
      const total = action.payload.product.price * action.payload.qty;
      state.total += total;
      console.log(state.total);
    },
    removeItem: (state, action) => {
      state.cartItems.splice(action.payload, 1);
      state.cartItems = [...state.cartItems];
      const total = action.payload.product.price * action.payload.qty;
      state.total -= total;
      if (state.total < 0) {
        state.total = 0;
      }
      console.log(state.total);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
