import { useState } from 'react'
import Button from '../../shared/Button/Button'
import FormInput from '../../shared/FormInput/FormInput'
import styles from './customize-card.module.scss'

const CustomizeCard = () => {
  const [value, setValue] = useState(150_00)
  const min = 150_000
  const max = 600_000

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }
  const percent = ((value - min) / (max - min)) * 100
  return (
    <div className={styles['customize-card']}>
      <div className={styles['customize-card__container']}>
        <div className={styles['customize-card__top']}>
          <div className={styles['customize-card__header']}>
            <div className={styles['customize-card__header-top']}>
              <h3 className={styles['customize-card__title']}>Customize your card</h3>
              <p className={styles['customize-card__step']}>Step 1 of 5</p>
            </div>

            <div className={styles['customize-card__amount-selector']}>
              <div className={styles['customize-card__amount-labels']}>
                <p className={styles['customize-card__label']}>Select amount</p>
                <p className={styles['customize-card__selected-amount']}>150 000</p>
              </div>

              <div className={styles['customize-card__slider']}>
                <input
                  type="range"
                  min={min}
                  max={max}
                  step={1000}
                  value={value}
                  onChange={handleChange}
                  className={styles['customize-card__range-input']}
                  style={{
                    background: `linear-gradient(to right, #6b38f2 0%, #6b38f2 ${percent}%, #e0e6ed ${percent}%, #e0e6ed 100%)`,
                  }}
                />
              </div>

              <div className={styles['customize-card__amount-range']}>
                <p className={styles['customize-card__min-amount']}>15 000</p>
                <p className={styles['customize-card__max-amount']}>600 000</p>
              </div>
            </div>
          </div>

          <div className={styles['customize-card__line']}></div>

          <div className={styles['customize-card__chosen-amount']}>
            <h4 className={styles['customize-card__chosen-title']}>You have chosen the amount</h4>
            <p className={styles['customize-card__chosen-sum']}>150 000 ₽</p>
            <div className={styles['customize-card__chosen-sum-line']}></div>
          </div>
        </div>

        <form className={styles['customize-card__form']}>
          <h3 className={styles['customize-card__form-title']}>Contact Information</h3>
          <div className={styles['customize-card__grid']}>
            <FormInput
              label="Your last name"
              name="lastName"
              placeholder="For Example Doe"
              required
            />

            <FormInput
              label="Your first name"
              name="firstName"
              placeholder="For Example John"
              required
            />

            <FormInput
              label="Your patronymic"
              name="patronymic"
              placeholder="For Example Victorovich"
            />

            <FormInput
              label="Select term"
              name="term"
              type="select"
              required
              options={['6 months', '12 months']}
            />

            <FormInput
              label="Your email"
              name="email"
              type="email"
              placeholder="test@gmail.com"
              required
            />

            <FormInput label="Your date of birth" name="birthDate" type="date" required />

            <FormInput
              label="Your passport series"
              name="passportSeries"
              placeholder="0000"
              maxLength={4}
              required
            />

            <FormInput
              label="Your passport number"
              name="passportNumber"
              placeholder="000000"
              maxLength={6}
              required
            />
          </div>

          <div className={styles['customize-card__btn-box']}>
            <Button className={styles['customize-card__btn-submit']}>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CustomizeCard
