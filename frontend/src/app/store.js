import { configureStore } from "@reduxjs/toolkit";
import demoReducer from '../features/Demo/demoSlice';

export const store = configureStore({
    reducer: {
        demo: demoReducer,
    }
})