import { configureStore } from "@reduxjs/toolkit";
import demoReducer from '../features/Demo/demoSlice';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from "../features/auth/apiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        demo: demoReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});