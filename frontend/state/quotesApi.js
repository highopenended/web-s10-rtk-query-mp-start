// create your RTK Query endpoints here

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const quotesApi = createApi({
    reducerPath: 'quotesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/' }),
    tagTypes: ['Quotes'], 

    endpoints: builder => ({
      getQuotes: builder.query({
        query: () => 'quotes',
      }),
      createQuote: builder.mutation({
        
      }),
      deleteQuote: builder.mutation({

      }),
      toggleFake: builder.mutation({

      }),

      invalidatesTags: ['Quotes'], 
    }),
  })

  export const {
    useGetQuotesQuery,
    useCreateQuoteQuery,
    useDeleteQuoteQuery,
    useToggleFakeQuery,
  } = quotesApi