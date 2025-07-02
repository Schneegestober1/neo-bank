import Button from '../../shared/Button/Button'
import CardImage from '../../shared/CardImage/CardImage'
import styles from './card-promo-title.module.scss'

export const CardPromoTitle = () => {
  return (
    <section className={styles['card-promo']}>
      <div className={styles['card-promo__content']}>
        <h1 className={styles['card-promo__title']}>
          Choose the design you like and apply for card right now
        </h1>
        <Button className={styles['card-promo__button']}>Choose the card</Button>
      </div>
      <div className={styles['card-promo__images']}>
        <CardImage
          src="cardImage1.jpg"
          alt="Card-design-1"
          className={styles['card-promo__image']}
        />
        <CardImage
          src="cardImage2.jpg"
          alt="Card-design-2"
          className={styles['card-promo__image']}
        />
        <CardImage
          src="cardImage3.jpg"
          alt="Card-design-3"
          className={styles['card-promo__image']}
        />
        <CardImage
          src="cardImage4.jpg"
          alt="Card-design-4"
          className={styles['card-promo__image']}
        />
      </div>
    </section>
  )
}

export default CardPromoTitle
