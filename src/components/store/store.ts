import { configureStore } from '@reduxjs/toolkit'
import exchangeRateReducer from './slices/ExchangeRateSlice/exchangeRateSlice'

export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
