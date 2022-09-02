
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/slice'
import formSlice from './features/cart/formSlice';

export const Store = configureStore({
    reducer: {
        cart: cartReducer,
        form: formSlice,
    }
});