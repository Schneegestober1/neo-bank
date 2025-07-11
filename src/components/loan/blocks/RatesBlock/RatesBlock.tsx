import styles from '../RatesBlock/rates-block.module.scss'

const RatesBlock = () => {
  return (
    <section className={styles['card-info']}>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Card currency</p>
        <p className={styles['card-info__value']}>Rubles, dollars, euro</p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Interest free period</p>
        <p className={styles['card-info__value']}>0% up to 160 days</p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Payment system</p>
        <p className={styles['card-info__value']}>Mastercard, Visa</p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Maximum credit limit on the card</p>
        <p className={styles['card-info__value']}>600 000 ₽</p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Replenishment and withdrawal</p>
        <p className={styles['card-info__value']}>
          At any ATM. Top up your credit card for free with cash or transfer from other cards
        </p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Max cashback per month</p>
        <p className={styles['card-info__value']}>15 000 ₽</p>
      </div>
      <div className={styles['card-info__item']}>
        <p className={styles['card-info__label']}>Transaction Alert</p>
        <p className={styles['card-info__value']}>
          60 ₽ — SMS or push notifications <br />0 ₽ — card statement, information about
          transactions in the online bank
        </p>
      </div>
    </section>
  )
}

export default RatesBlock
