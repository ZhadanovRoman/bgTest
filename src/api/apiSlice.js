import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: ({ limit = 8 } = {}) => ({
                url: '/posts',
                params: { _limit: limit }, 
              }),
        }),
    }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } = apiSlice;