import { createSlice } from '@reduxjs/toolkit';
import homeItems from '../homeItems.js';

const initialState = {
  homeItems: homeItems,
};

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
});

export default HomeSlice.reducer;
