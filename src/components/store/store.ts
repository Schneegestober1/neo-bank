import { configureStore } from '@reduxjs/toolkit'
import exchangeRateReducer from './slices/exchangeRate/exchangeRateSlice'
import newsReducer from './slices/newsBlock/newsSlice'
import newsletterReducer from './slices/newsLetter/newsLetterSlice'
import applicationReducer from './slices/сustomizeCard/applicationSlice'

export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
    news: newsReducer,
    newsletter: newsletterReducer,
    application: applicationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
