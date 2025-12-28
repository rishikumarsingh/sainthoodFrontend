import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Authslice'

const Store = configureStore({
    reducer:{
        auth:authReducer, // Map the `auth` slice to the state key `auth`
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export default Store;
