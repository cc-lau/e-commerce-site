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
      state.total += Number(total.toFixed(2));
      console.log(state.total);
    },
    removeItem: (state, action) => {
      console.log(action.payload);
      state.cartItems.splice(action.payload, 1);
      state.cartItems = [...state.cartItems];
      const total = action.payload.product.price * action.payload.qty;
      state.total -= Number(total.toFixed(2));
      if (state.total < 0) {
        state.total = 0;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeItem } = cartSlice.actions;
