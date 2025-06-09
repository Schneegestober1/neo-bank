import BankIcon from '../../assets/icons/BankIcon'
import { CurrencyItem } from '../CurrencyItem/CurrencyItem'
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
    <section className={styles.exchangeRate}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>Exchange rate in internet bank</p>
          <p className={styles.updateInfo}>
            <time dateTime="29.08.2022">Update every 15 minutes, MSC 09.08.2022</time>
          </p>
        </div>

        <h3 className={styles.tableTitle}>Currency</h3>
        <article className={styles.table}>
          <div className={styles.currencyBox}>
            <ul className={styles.list}>
              {currencies.map((currency) => (
                <CurrencyItem key={currency.code} code={currency.code} value={currency.value} />
              ))}
            </ul>
          </div>
          <BankIcon className={styles.bank} />
        </article>

        <div className={styles.footer}>
          <a href="#" className={styles.link}>
            All courses
          </a>
        </div>
      </div>
    </section>
  )
}

export default CurrencyRate
