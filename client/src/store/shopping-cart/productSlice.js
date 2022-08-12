import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../api/axios'

export const getProduct = createAsyncThunk('get/product', async () => {
  const { data } = await axios.get(`/product`)
  .catch(function (error) {
    console.log(error.toJSON());
  });

  return data;
});

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.products = action.payload;
        state.error = null;
        state.loading = false;
      })
      .addCase(getProduct.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});


export const cartActions = productSlice.actions;
export default productSlice.reducer;
