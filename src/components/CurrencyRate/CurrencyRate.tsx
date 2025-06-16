import BankIcon from '../../assets/icons/BankIcon'
import { CurrencyItem } from '../shared/CurrencyItem/CurrencyItem'
import styles from './currency-rate.module.scss'

const CurrencyRate = () => {
  const currencies = [
    { code: 'USD', value: '92.45 ₽' },
    { code: 'EUR', value: '98.22 ₽' },
    { code: 'CNY', value: '12.74 ₽' },
    { code: 'GBP', value: '115.30 ₽' },
    { code: 'JPY', value: '0.65 ₽' },
    { code: 'KZT', value: '0.20 ₽' },
  ]

  return (
    <section className={styles['currency-rate']}>
      <div className={styles['currency-rate__wrapper']}>
        <div className={styles['currency-rate__header']}>
          <p className={styles['currency-rate__title']}>Exchange rate in internet bank</p>
          <p className={styles['currency-rate__update-info']}>
            <time dateTime="29.08.2022">Update every 15 minutes, MSC 09.08.2022</time>
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
