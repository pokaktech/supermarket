
// store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './OrderSlice';

const store = configureStore({
    reducer: {
        order: orderReducer
    }
});

export default store;
