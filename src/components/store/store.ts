import { configureStore } from '@reduxjs/toolkit'
import exchangeRateReducer from './slices/exchangeRate/exchangeRateSlice'
import newsReducer from './slices/newsBlock/newsSlice'

export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
    news: newsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
