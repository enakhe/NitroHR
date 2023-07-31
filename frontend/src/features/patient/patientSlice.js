import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import patientService from './patientService';

const initialState = {
    patients: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    detail: ''
};

export const getPatient = createAsyncThunk('patient/getPatients', async (_, thunkAPI) => {
    try {
        return await patientService.getPatients();
    } catch (error) {
        const detail = error.response.data.detail;
        return thunkAPI.rejectWithValue(detail);
    }
});


export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPatient.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPatient.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.patients = action.payload
            })
            .addCase(getPatient.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.detail = action.payload
            })
    }
});

export const { reset } = patientSlice.actions;
export default patientSlice.reducer;