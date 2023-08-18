import { apiSlice } from './apiSlice';

const HOST = 'https://localhost:7259';
const API_URL = HOST + '/User';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${API_URL}/login`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const { useLoginMutation } = userApiSlice;