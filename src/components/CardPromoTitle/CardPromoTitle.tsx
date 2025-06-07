import CardImage from '../CardImage/CardImage'
import styles from './card-promo-title.module.scss'

export const CardPromoTitle = () => {
  return (
    <section className={styles.promo}>
      <div className={styles.content}>
        <h1 className={styles.title}>Choose the design you like and apply for card right now</h1>
        <button className={styles.button}>Choose the card</button>
      </div>
      <div className={styles.images}>
        <CardImage src="cardImage1.jpg" alt="Card design 1" className={styles.image} />
        <CardImage src="cardImage2.jpg" alt="Card design 2" className={styles.image} />
        <CardImage src="cardImage3.jpg" alt="Card design 3" className={styles.image} />
        <CardImage src="cardImage4.jpg" alt="Card design 4" className={styles.image} />
      </div>
    </section>
  )
}

export default CardPromoTitle
