import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import homeItems from '../homeItems.js';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  homeItems: homeItems,
  isLoading: true,
};

// Fetch data with axios.
export const getItems = createAsyncThunk(
  'home/getCartItems',
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  // life cycle actions
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getItems.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(getItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default HomeSlice.reducer;
