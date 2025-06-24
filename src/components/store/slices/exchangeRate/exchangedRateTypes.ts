export type CurrencyData = Record<string, number>

export type ExchangeRateState = {
  data: CurrencyData | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  lastUpdate: number | null
}
