import CreditCardBenefitCard from '../../shared/CreditCardBenefitCard/CreditCardBenefitCard'
import styles from '../CreditCardBenefits/credit-card-benefits.module.scss'
import { benefitsData } from './data/benefitsData'

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
        {benefitsData.map(({ icon, title, text }, index) => (
          <CreditCardBenefitCard key={index} icon={icon} title={title} text={text} />
        ))}
      </div>
    </div>
  )
}

export default CreditCardBenefits
