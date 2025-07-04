import BagDuotoneIcon from '../../../assets/icons/BagDuotoneIcon'
import CalendarDuotoneIcon from '../../../assets/icons/CalendarDuotoneIcon'
import ClockDuotoneIcon from '../../../assets/icons/ClockDuotoneIcon'
import CreditCardDuotoneIcon from '../../../assets/icons/CreditCardDuotoneIcon'
import MoneyDuotoneIcon from '../../../assets/icons/MoneyDuotoneIcon'
import styles from '../CreditCardBenefits/credit-card-benefits.module.scss'

const CreditCardBenefits = () => {
  return (
    <div className={styles['credit-card-benefits']}>
      <nav className={styles['credit-card-benefits__nav']}>
        <ul className={styles['credit-card-benefits__nav-list']}>
          <li className={styles['credit-card-benefits__nav-item']}>
            <a href="" className={styles['credit-card-benefits__nav-link']}>
              About card
            </a>
          </li>
          <li className={styles['credit-card-benefits__nav-item']}>
            <a href="" className={styles['credit-card-benefits__nav-link']}>
              Rates and conditions
            </a>
          </li>
          <li className={styles['credit-card-benefits__nav-item']}>
            <a href="" className={styles['credit-card-benefits__nav-link']}>
              Cashback
            </a>
          </li>
          <li className={styles['credit-card-benefits__nav-item']}>
            <a href="" className={styles['credit-card-benefits__nav-link']}>
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles['credit-card-benefits__line']}></div>

      <div className={styles['credit-card-benefits__cards']}>
        <div className={styles['credit-card-benefits__card']}>
          <MoneyDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 50 000 ₽</h3>
          <p className={styles['credit-card-benefits__text']}>
            Cash and transfers without commission and percent
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <CalendarDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 160 days</h3>
          <p className={styles['credit-card-benefits__text']}>Without percent on the loan</p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <ClockDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Free delivery</h3>
          <p className={styles['credit-card-benefits__text']}>
            We will deliver your card by courier at a convenient place and time for you
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <BagDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 12 months</h3>
          <p className={styles['credit-card-benefits__text']}>
            No percent. For equipment, clothes and other purchases in installments
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <CreditCardDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>
            Convenient deposit and withdrawal
          </h3>
          <p className={styles['credit-card-benefits__text']}>
            At any ATM. Top up your credit card for free with cash or transfer from other cards
          </p>
        </div>
      </div>
    </div>
  )
}

export default CreditCardBenefits
