import { configureStore } from '@reduxjs/toolkit'
import exchangeRateReducer from './slices/exchangeRate/exchangeRateSlice'

export const store = configureStore({
  reducer: {
    exchangeRate: exchangeRateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
