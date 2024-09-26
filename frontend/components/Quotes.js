import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  setHighlightedQuote,
  toggleVisibility,
} from '../state/quotesSlice'

import { useGetQuotesQuery, useDeleteQuoteMutation, useToggleFakeMutation } from '../state/quotesApi'


export default function Quotes() {

  const {data: quotes, isLoading: gettingQuotes, isFetching: refreshingQuotes} = useGetQuotesQuery()
  const [deleteQuote, {isLoading: deletingQuote}] = useDeleteQuoteMutation()
  const [toggleFake, {isLoading: togglingQuote}] = useToggleFakeMutation()


  const onDeleteQuote = id => {
    deleteQuote(id)
  }

  const displayAllQuotes = useSelector(st => st.quotesState.displayAllQuotes)
  const highlightedQuote = useSelector(st => st.quotesState.highlightedQuote)
  const dispatch = useDispatch()
  return (
    <div id="quotes">
      <h3>
        Quotes
        {togglingQuote && ' being toggled...'}
        {(gettingQuotes || refreshingQuotes || deletingQuote) && ' being loaded...'}
      </h3>
      <div>
        {
          quotes?.filter(qt => {
            return displayAllQuotes || !qt.apocryphal
          })
            .map(qt => (
              <div
                key={qt.id}
                className={`quote${qt.apocryphal ? " fake" : ''}${highlightedQuote === qt.id ? " highlight" : ''}`}
              >
                <div>{qt.quoteText}</div>
                <div>{qt.authorName}</div>
                <div className="quote-buttons">
                  <button onClick={()=>onDeleteQuote(qt.id)}>DELETE</button>
                  <button onClick={() => dispatch(setHighlightedQuote(qt.id))}>HIGHLIGHT</button>
                  <button onClick={()=>toggleFake({id: qt.id, quote: {apocryphal: !qt.apocryphal}})}>FAKE</button>
                </div>
              </div>
            ))
        }        
      </div>
      {!!quotes?.length && <button onClick={() => dispatch(toggleVisibility())}>
        {displayAllQuotes ? 'HIDE' : 'SHOW'} FAKE QUOTES
      </button>}
    </div>
  )
}
