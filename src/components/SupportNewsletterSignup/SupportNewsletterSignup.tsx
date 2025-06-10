import EnvelopeIcon from '../../assets/icons/EnvelopeIcon'
import PlaneIcon from '../../assets/icons/PlaneIcon'
import styles from './support-newsletter-signup.module.scss'

const SupportNewsletterSignup = () => {
  return (
    <section className={styles.supporSection}>
      <h6 className={styles.supportTitle}>Support</h6>
      <h4 className={styles.newsletterTitle}>Subscribe Newsletter & get</h4>
      <h5 className={styles.bankNewsTitle}>Bank News</h5>
      <div className={styles.inputWrapper}>
        <EnvelopeIcon className={styles.envelopeIcon} />
        <input type="text" className={styles.input} placeholder="Your email" />
        <div className={styles.subscribeWrapper}>
          <PlaneIcon className={styles.planeIcon} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </section>
  )
}

export default SupportNewsletterSignup
