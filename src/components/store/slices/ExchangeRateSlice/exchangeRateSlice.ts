import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import type { RootState } from '../../store'

const API_URL = 'https://api.freecurrencyapi.com/v1/latest'
const API_KEY = 'fca_live_Wo8bEbi8aZVX2TRzHa9Gs1eXJQGsG4qwIy7ueWea'

const currencies = ['USD', 'EUR', 'JPY', 'CNY', 'CAD', 'CHF']
const baseCurrency = 'RUB'

const TIME_KEY = 'lastCurrencyUpdate'

type CurrencyData = Record<string, number>

type ExchangeRateState = {
  data: CurrencyData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  lastUpdate: number | null
}

const initialState: ExchangeRateState = {
  data: null,
  status: 'idle',
  error: null,
  lastUpdate: localStorage.getItem(TIME_KEY) ? Number(localStorage.getItem(TIME_KEY)) : null,
}

export const fetchExchangeRate = createAsyncThunk('exchangeRate/fetchExchangeRate', async () => {
  const response = await axios.get(API_URL, {
    params: {
      apikey: API_KEY,
      currencies: currencies.join(','),
      base_currency: baseCurrency,
    },
  })

  const timeStamp = Date.now()
  localStorage.setItem(TIME_KEY, timeStamp.toString())

  return {
    data: response.data.data as CurrencyData,
    lastUpdate: timeStamp,
  }
})

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

function formatDate(timeStamp: number | null): string | null {
  if (!timeStamp) return null

  const date = new Date(timeStamp)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `MSC ${day}.${month}.${year}`
}

export const selectExchangeRate = (state: RootState) => state.exchangeRate

export const selectExchangeRateFormatted = (state: RootState) => {
  const exchangeRate = state.exchangeRate

  return {
    ...exchangeRate,
    formattedLastUpdate: formatDate(exchangeRate.lastUpdate),
  }
}

export default exchangeRateSlice.reducer
