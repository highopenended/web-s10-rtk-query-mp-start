// create your RTK Query endpoints here

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Quotes'], 

    endpoints: builder => ({
        getQuotes: builder.query({
            query: () => 'quotes',
            providesTags:['Quotes']
        }),
        createQuote: builder.mutation({
            query: quote =>({
                url:'quotes',
                method: 'POST',
                body: quote
            }),
            invalidatesTags: ['Quotes'], 
        }),
        deleteQuote: builder.mutation({
            query: id =>({
                url:'quotes/:' + id,
                method: 'DELETE',
                body: {id}
            }),
        }),
        toggleFake: builder.mutation({
            query: id =>({
                url:'quotes/:' + id,
                method: 'PUT',
                body: true
            }),
        }),

    }),
  })

  export const {
    useGetQuotesQuery,
    useCreateQuoteMutation,
    useDeleteQuoteMutation,
    useToggleFakeMutation,
  } = quotesApi