import CardImage from '../CardImage/CardImage'
import styles from './global-availability.module.scss'

function GlobalAvailability() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.title}>You can use our services anywhere in the world</h2>
        <p className={styles.description}>
          Withdraw and transfer money online through our application
        </p>
      </div>
      <div className={styles.imageBox}>
        <CardImage src="public/global-map.png" alt="global map" className={styles.image} />
      </div>
    </section>
  )
}

export default GlobalAvailability
