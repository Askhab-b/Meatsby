import { configureStore } from '@reduxjs/toolkit';
import authReducer from './shopping-cart/authSlice';
import cartReducer from './shopping-cart/cartSlice';
import cartUiSlice from './shopping-cart/cartUiSlice';
import productSlice from './shopping-cart/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartUi: cartUiSlice,
    auth: authReducer,
    product: productSlice,
  },
});

export default store;
