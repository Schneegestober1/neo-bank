import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EnvelopeIcon from '../../../assets/icons/EnvelopeIcon'
import PlaneIcon from '../../../assets/icons/PlaneIcon'
import styles from './support-newsletter-signup.module.scss'
import type { AppDispatch } from '../../store/store'
import type { RootState } from '../../store/store'
import { setSubscribed } from '../../store/slices/newsLetter/newsLetterSlice'
import { subscribeEmail } from '../../store/slices/newsLetter/newsLetterThunks'
import { validateEmail } from '../../../utils/validation'

const SupportNewsletterSignup = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { subscribed, loading, error } = useSelector((state: RootState) => state.newsletter)

  const [email, setEmail] = useState('')
  const [validationError, setValidationError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('newsletterSubscribed')
    if (saved === 'true') {
      dispatch(setSubscribed(true))
    }
  }, [dispatch])

  const handleSubscribe = () => {
    if (!email.trim()) {
      setValidationError('Email cannot be empty')
      return
    }
    if (!validateEmail(email)) {
      setValidationError('Please enter a valid email address')
      return
    }
    setValidationError('')

    dispatch(subscribeEmail(email)).then((action) => {
      if (subscribeEmail.fulfilled.match(action)) {
        localStorage.setItem('newsletterSubscribed', 'true')
      }
    })
  }

  return (
    <section className={styles['support-newsletter']}>
      <h6 className={styles['support-newsletter__support']}>Support</h6>
      <h4 className={styles['support-newsletter__newsletter-title']}>Subscribe Newsletter & get</h4>
      <h5 className={styles['support-newsletter__bank-news']}>Bank News</h5>

      <div className={styles['support-newsletter__input-wrapper']}>
        <EnvelopeIcon className={styles['support-newsletter__icon']} />

        {subscribed ? (
          <p>You are already subscribed to the bank's newsletter</p>
        ) : (
          <>
            <input
              type="email"
              className={styles['support-newsletter__input']}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
            <div className={styles['support-newsletter__subscribe-wrapper']}>
              <PlaneIcon className={styles['support-newsletter__icon']} />
              <button
                className={styles['support-newsletter__subscribe-button']}
                onClick={handleSubscribe}
                disabled={loading}
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </>
        )}
      </div>

      {(validationError || error) && (
        <p style={{ color: 'red', marginTop: '8px' }}>{validationError || error}</p>
      )}
    </section>
  )
}

export default SupportNewsletterSignup
