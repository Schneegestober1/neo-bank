import styles from '../HowToGetCard/how-to-get-card.module.scss'

function HowToGetCard() {
  return (
    <section className={styles['how-to-get-card']}>
      <h3 className={styles['how-to-get-card__title']}>How to get a card</h3>

      <div className={styles['how-to-get-card__container']}>
        <div className={styles['how-to-get-card__step']}>
          <div className={styles['how-to-get-card__step-header']}>
            <div className={styles['how-to-get-card__step-wrapper']}>
              <span className={styles['how-to-get-card__step-number']}>1</span>
            </div>

            <div className={styles['how-to-get-card__line']}></div>
          </div>
          <p className={styles['how-to-get-card__step-description']}>
            Fill out an online application - you do not need to visit the bank
          </p>
        </div>

        <div className={styles['how-to-get-card__step']}>
          <div className={styles['how-to-get-card__step-header']}>
            <div className={styles['how-to-get-card__step-wrapper']}>
              <span className={styles['how-to-get-card__step-number']}>2</span>
            </div>
            <div className={styles['how-to-get-card__line']}></div>
          </div>
          <p className={styles['how-to-get-card__step-description']}>
            Find out the bank's decision immediately after filling out the application
          </p>
        </div>

        <div className={styles['how-to-get-card__step']}>
          <div className={styles['how-to-get-card__step-header']}>
            <div className={styles['how-to-get-card__step-wrapper']}>
              <span className={styles['how-to-get-card__step-number']}>3</span>
            </div>
            <div className={styles['how-to-get-card__line']}></div>
          </div>
          <p className={styles['how-to-get-card__step-description']}>
            The bank will deliver the card free of charge, wherever convenient, to your city
          </p>
        </div>
      </div>
    </section>
  )
}
export default HowToGetCard
