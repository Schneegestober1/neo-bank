import { createAsyncThunk } from '@reduxjs/toolkit'
import type { CurrencyData, ExchangeRateState } from './exchangedRateTypes'
import axios from 'axios'

const API_URL = 'https://api.freecurrencyapi.com/v1/latest'
const API_KEY = 'fca_live_Wo8bEbi8aZVX2TRzHa9Gs1eXJQGsG4qwIy7ueWea'

const currencies = ['USD', 'EUR', 'JPY', 'CNY', 'CAD', 'CHF']
const baseCurrency = 'RUB'

const TIME_KEY = 'lastCurrencyUpdate'

export const initialState: ExchangeRateState = {
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

  const originalData = response.data.data as CurrencyData

  const invertedData: CurrencyData = {}

  for (const [currency, rate] of Object.entries(originalData)) {
    if (rate > 0) {
      invertedData[currency] = 1 / rate
    }
  }

  const timeStamp = Date.now()
  localStorage.setItem(TIME_KEY, timeStamp.toString())

  return {
    data: invertedData,
    lastUpdate: timeStamp,
  }
})
