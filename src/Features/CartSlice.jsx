import { createSlice } from '@reduxjs/toolkit';
import homeItems from '../homeItems.js';
const initialState = {
  total: 0,
  isLoading: true,
  isClear: false,
  homeItems: homeItems,
  newCartItems: JSON.parse(localStorage.getItem('itemsArray')) || [],
  amount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = state.homeItems.find(
        (item) => item.id === action.payload.id
      );

      const newItemObject = {
        id: newItem.id,
        title: newItem.title,
        price: newItem.price,
        img: newItem.img,
        amount: newItem.amount,
      };

      // add item to local storage
      state.newCartItems.push(newItemObject);
      state.amount = state.amount += 1;
      console.log('State amount updated with the value of  : ', state.amount);
      localStorage.setItem('itemsArray', JSON.stringify(state.newCartItems));
    },

    clearCart: (state) => {
      state.newCartItems = [];
    },
    removeItem: (state, action) => {
      const itemID = action.payload;

      state.newCartItems = state.newCartItems.filter(
        (item) => item.id !== itemID
      );
    },
    addItem: (state, { payload }) => {
      const cartItem = state.newCartItems.find(
        (item) => item.id === payload.id
      );
      cartItem.amount = cartItem.amount + 1;
      state.amount = state.amount += 1;
    },
    reduceItem: (state, { payload }) => {
      const cartItem = state.newCartItems.find(
        (item) => item.id === payload.id
      );

      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.newCartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  addItem,
  reduceItem,
  calculateTotal,
  addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
