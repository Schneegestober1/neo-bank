
import EnvelopeIcon from '../../../assets/icons/EnvelopeIcon'
import PlaneIcon from '../../../assets/icons/PlaneIcon'
import styles from './support-newsletter-signup.module.scss'

const SupportNewsletterSignup = () => {
  return (
    <section className={styles['support-newsletter']}>
      <h6 className={styles['support-newsletter__support']}>Support</h6>
      <h4 className={styles['support-newsletter__newsletter-title']}>Subscribe Newsletter & get</h4>
      <h5 className={styles['support-newsletter__bank-news']}>Bank News</h5>
      <div className={styles['support-newsletter__input-wrapper']}>
        <EnvelopeIcon className={styles['support-newsletter__icon']} />
        <input
          type="text"
          className={styles['support-newsletter__input']}
          placeholder="Your email"
        />
        <div className={styles['support-newsletter__subscribe-wrapper']}>
          <PlaneIcon className={styles['support-newsletter__icon']} />
          <button className={styles['support-newsletter__subscribe-button']}>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default SupportNewsletterSignup
