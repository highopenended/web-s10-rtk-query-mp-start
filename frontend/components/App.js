import React from 'react'
import Quotes from './Quotes'
import QuoteForm from './QuoteForm'
// import { useGetQuotesQuery } from '../state/quotesApi'

export default function App() {
  // const {data:quotes} = useGetQuotesQuery

  return (
    <div id="mp">
      <h2>Module Project</h2>
      <Quotes />
      <QuoteForm />
    </div>
  )
}
