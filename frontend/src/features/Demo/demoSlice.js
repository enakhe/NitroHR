import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import demoService from './demoService';

const initialState = {
    requests: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    detail: ''
}

// Create a new request
export const createRequest = createAsyncThunk('demo/create', async (requestData, thunkAPI) => {
    try {
        return await demoService.createRequest(requestData);
    } catch (error) {
        const detail = error.response.data.detail;
        return thunkAPI.rejectWithValue(detail);
    }
})

export const demoSlice = createSlice({
    name: 'demo',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRequest.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.requests.push(action.payload);
            })
            .addCase(createRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.detail = action.payload
            })
    }
})

export const { reset } = demoSlice.actions
export default demoSlice.reducer