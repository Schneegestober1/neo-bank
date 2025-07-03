import { configureStore } from '@reduxjs/toolkit'
import exchangeRateReducer from './slices/exchangeRate/exchangeRateSlice'
import newsReducer from './slices/newsBlock/newsSlice'
import newsletterReducer from './slices/newsLetter/newsLetterSlice'

export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
    news: newsReducer,
    newsletter: newsletterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
