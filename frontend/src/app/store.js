import { configureStore } from "@reduxjs/toolkit";
import patientReducer from '../features/patient/patientSlice'

export const store = configureStore({
    reducer: {
        patient: patientReducer
    }
})