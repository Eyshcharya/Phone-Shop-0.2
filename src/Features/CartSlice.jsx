import { createSlice } from '@reduxjs/toolkit';
import homeItems from '../homeItems.js';

const initialState = {
  homeItems: homeItems,
  getCartItemArray: JSON.parse(localStorage.getItem('itemsArray')) || [],
  amount: 10,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    addItemToCart: (state, { payload }) => {
      const Item = state.homeItems.find((item) => item.id === payload.id);
      state.getCartItemArray.push(Item);

      // adding setCartItemArray into the local storage
      localStorage.setItem(
        'itemsArray',
        JSON.stringify(state.getCartItemArray)
      );
    },

    clearCart: (state) => {
      state.getCartItemArray = [];
      state.isClear = true;

      localStorage.setItem(
        'itemsArray',
        JSON.stringify(state.getCartItemArray)
      );
    },

    removeItem: (state, { payload }) => {
      state.getCartItemArray = state.getCartItemArray.filter(
        (item) => item.id !== payload.id
      );

      localStorage.setItem(
        'itemsArray',
        JSON.stringify(state.getCartItemArray)
      );
    },

    increaseItemCount: (state, { payload }) => {
      const Item = state.getCartItemArray.find(
        (item) => item.id === payload.id
      );
      Item.amount += 1;

      localStorage.setItem(
        'itemsArray',
        JSON.stringify(state.getCartItemArray)
      );
    },
    decreaseItemCount: (state, { payload }) => {
      const Item = state.getCartItemArray.find(
        (item) => item.id === payload.id
      );
      Item.amount = Item.amount - 1;

      localStorage.setItem(
        'itemsArray',
        JSON.stringify(state.getCartItemArray)
      );
    },
    calculateTotal: (state) => {
      let Total = 0;
      let Amount = 0;
      state.getCartItemArray.forEach((item) => {
        Amount += item.amount;
        Total += item.amount * item.price;
      });
      state.amount = Amount;
      state.total = Total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItemCount,
  decreaseItemCount,
  calculateTotal,
  addItemToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
