import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CurrencyData } from './exchangedRateTypes'
import { fetchExchangeRate, initialState } from './exchangedRateThunks'

const exchangeRateSlice = createSlice({
  name: 'exchangeRate',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRate.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchExchangeRate.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Ошибка при загрузке данных!'
      })
      .addCase(
        fetchExchangeRate.fulfilled,
        (state, action: PayloadAction<{ data: CurrencyData; lastUpdate: number }>) => {
          state.status = 'succeeded'
          state.data = action.payload.data
          state.lastUpdate = action.payload.lastUpdate
          state.error = null
        }
      )
  },
})

export default exchangeRateSlice.reducer
