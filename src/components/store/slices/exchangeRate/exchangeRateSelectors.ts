import { formatDate } from '../../../../utils/dateUtils'
import type { RootState } from '../../store'

export const selectExchangeRate = (state: RootState) => state.exchangeRate

export const selectExchangeRateFormatted = (state: RootState) => {
  const exchangeRate = state.exchangeRate

  return {
    ...exchangeRate,
    formattedLastUpdate: formatDate(exchangeRate.lastUpdate),
  }
}
