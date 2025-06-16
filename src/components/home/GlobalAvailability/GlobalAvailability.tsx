import CardImage from '../../shared/CardImage/CardImage'
import styles from './global-availability.module.scss'

function GlobalAvailability() {
  return (
    <section className={styles['global-availability']}>
      <div className={styles['global-availability__content']}>
        <h2 className={styles['global-availability__title']}>
          You can use our services anywhere in the world
        </h2>
        <p className={styles['global-availability__description']}>
          Withdraw and transfer money online through our application
        </p>
      </div>
      <div className={styles['global-availability__image-box']}>
        <CardImage
          src="public/global-map.png"
          alt="global map"
          className={styles['global-availability__image']}
        />
      </div>
    </section>
  )
}

export default GlobalAvailability
