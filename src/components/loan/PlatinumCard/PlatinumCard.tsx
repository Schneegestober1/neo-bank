import Button from '../../shared/Button/Button'
import CardImage from '../../shared/CardImage/CardImage'
import styles from '../PlatinumCard/platinum-card.module.scss'

const PlatinumCard = () => {
  return (
    <div className={styles['platinum-card']}>
      <div className={styles['platinum-card__container']}>
        <div className={styles['platinum-card__box']}>
          <h2 className={styles['platinum-card__title']}>Platinum digital credit card</h2>
          <p className={styles['platinum-card__description']}>
            Our best credit card. Suitable for everyday spending and shopping. Cash withdrawals and
            transfers without commission and interest.
          </p>

          <div className={styles['platinum-card__features']}>
            <div className={styles['platinum-card__feature']}>
              <span className={styles['platinum-card__feature-value']}>Up to 160 days</span>
              <p className={styles['platinum-card__feature-label']}>No percent</p>
            </div>
            <div className={styles['platinum-card__feature']}>
              <span className={styles['platinum-card__feature-value']}>Up to 600 000 ₽</span>
              <p className={styles['platinum-card__feature-label']}>Credit limit</p>
            </div>
            <div className={styles['platinum-card__feature']}>
              <span className={styles['platinum-card__feature-value']}>0 ₽</span>
              <p className={styles['platinum-card__feature-label']}>Card service is free</p>
            </div>
          </div>

          <div className={styles['platinum-card__actions']}>
            <Button className={styles['platinum-card__button']}>Apply for card</Button>
          </div>
        </div>

        <div className={styles['platinum-card__image-box']}>
          <CardImage
            className={styles['platinum-card__image']}
            src="cardImage1.jpg"
            alt="Card-design-1"
          />
        </div>
      </div>
    </div>
  )
}

export default PlatinumCard
