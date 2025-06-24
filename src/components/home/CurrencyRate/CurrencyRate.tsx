import { useDispatch, useSelector } from 'react-redux'
import BankIcon from '../../../assets/icons/BankIcon'
import { CurrencyItem } from '../../shared/CurrencyItem/CurrencyItem'
import styles from './currency-rate.module.scss'
import { useEffect } from 'react'
import type { AppDispatch } from '../../store/store'
import { fetchExchangeRate } from '../../store/slices/exchangeRate/exchangedRateThunks'
import { selectExchangeRateFormatted } from '../../store/slices/exchangeRate/exchangeRateSelectors'

const CurrencyRate = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { data, formattedLastUpdate, status } = useSelector(selectExchangeRateFormatted)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchExchangeRate())
    }
  }, [dispatch, status])

  const displayCurrencies = ['USD', 'EUR', 'CNY', 'JPY', 'CAD', 'CHF']

  const currencies = data
    ? displayCurrencies.map((code) => ({
        code,
        value: `${data[code]?.toFixed(2) ?? '-'} ₽`,
      }))
    : []

  return (
    <section className={styles['currency-rate']}>
      <div className={styles['currency-rate__wrapper']}>
        <div className={styles['currency-rate__header']}>
          <p className={styles['currency-rate__title']}>Exchange rate in internet bank</p>
          <p className={styles['currency-rate__update-info']}>
            <time>
              Update every 15 minutes {formattedLastUpdate ? `, ${formattedLastUpdate}` : ''}
            </time>
          </p>
        </div>

        <h3 className={styles['currency-rate__table-title']}>Currency</h3>
        <article className={styles['currency-rate__table']}>
          <div className={styles['currency-rate__currency-box']}>
            <ul className={styles['currency-rate__list']}>
              {currencies.map((currency) => (
                <CurrencyItem key={currency.code} code={currency.code} value={currency.value} />
              ))}
            </ul>
          </div>
          <BankIcon className={styles['currency-rate__bank']} />
        </article>

        <div className={styles['currency-rate__footer']}>
          <a href="#" className={styles['currency-rate__link']}>
            All courses
          </a>
        </div>
      </div>
    </section>
  )
}

export default CurrencyRate
