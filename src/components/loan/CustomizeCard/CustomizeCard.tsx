import styles from './customize-card.module.scss'

const CustomizeCard = () => {
  return (
    <div className={styles['customize-card']}>
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

          <div className={styles['customize-card__slider']}>SLider</div>

          <div className={styles['customize-card__amount-range']}>
            <p className={styles['customize-card__min-amount']}>15 000</p>
            <p className={styles['customize-card__max-amount']}>600 000</p>
          </div>
        </div>
      </div>

      <div className={styles['customize-card__chosen-amount']}>
        <h4 className={styles['customize-card__chosen-title']}>You have chosen the amount</h4>
        <p className={styles['customize-card__chosen-sum']}>150 000 ₽</p>
      </div>

      <form className={styles['customize-card__form']}>
        <h3 className={styles['customize-card__form-title']}>Contact Information</h3>
        <div className={styles['customize-card__grid']}>
          <label className={styles['customize-card__label']}>
            Your last name <span className={styles['customize-card__required']}>*</span>
            <input
              className={styles['customize-card__input']}
              type="text"
              placeholder="For Example Doe"
              required
            />
          </label>

          <label className={styles['customize-card__label']}>
            Your first name <span className={styles['customize-card__required']}>*</span>
            <input
              className={styles['customize-card__input']}
              type="text"
              placeholder="For Example Jhon"
              required
            />
          </label>

          <label className={styles['customize-card__label']}>
            Your patronymic
            <input
              className={styles['customize-card__input']}
              type="text"
              placeholder="For Example Victorovich"
            />
          </label>

          <label className={styles['customize-card__label']}>
            Select term <span className={styles['customize-card__required']}>*</span>
            <select className={styles['customize-card__select']} required>
              <option>6 month</option>
              <option>12 month</option>
            </select>
          </label>

          <label className={styles['customize-card__label']}>
            Your email <span className={styles['customize-card__required']}>*</span>
            <input
              className={styles['customize-card__input']}
              type="email"
              placeholder="test@gmail.com"
              required
            />
          </label>

          <label className={styles['customize-card__label']}>
            Your date of birth <span className={styles['customize-card__required']}>*</span>
            <input className={styles['customize-card__input']} type="date" required />
          </label>

          <label className={styles['customize-card__label']}>
            Your passport series <span className={styles['customize-card__required']}>*</span>
            <input
              className={styles['customize-card__input']}
              type="text"
              placeholder="0000"
              required
              maxLength={4}
            />
          </label>

          <label className={styles['customize-card__label']}>
            Your passport number <span className={styles['customize-card__required']}>*</span>
            <input
              className={styles['customize-card__input']}
              type="text"
              placeholder="000000"
              required
              maxLength={6}
            />
          </label>
        </div>

        <button type="submit" className={styles['customize-card__btn-submit']}>
          Continue
        </button>
      </form>
    </div>
  )
}

export default CustomizeCard
