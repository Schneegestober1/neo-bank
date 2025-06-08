import styles from './currency-rate.module.scss'

const CurrencyRate = () => {
  return (
    <section className={styles.exchangeRate}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p className={styles.title}>Exchange rate in internet bank</p>
          <p className={styles.updateInfo}>
            <time id="time-ago" dateTime="29.08.2022">
              Update every 15 minutes, MSC 09.08.2022
            </time>
          </p>
        </div>

        <article className={styles.table}>
          <h3 className={styles.tableTitle}>Currency</h3>
          <div className={styles.currencyBox}>
            <ul id="currency-list" className={styles.list}>
              <li className={styles.item}>
                <span className={styles.currency}>USD: </span>
                <span className={styles.value}>92.45 ₽</span>
              </li>
              <li className={styles.item}>
                <span className={styles.currency}>EUR: </span>
                <span className={styles.value}>98.22 ₽</span>
              </li>
              <li className={styles.item}>
                <span className={styles.currency}>CNY: </span>
                <span className={styles.value}>12.74 ₽</span>
              </li>
              <li className={styles.item}>
                <span className={styles.currency}>GBP: </span>
                <span className={styles.value}>115.30 ₽</span>
              </li>
              <li className={styles.item}>
                <span className={styles.currency}>JPY: </span>
                <span className={styles.value}>0.65 ₽</span>
              </li>
              <li className={styles.item}>
                <span className={styles.currency}>KZT: </span>
                <span className={styles.value}>0.20 ₽</span>
              </li>
            </ul>
          </div>
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
