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
          <MoneyDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 50 000 ₽</h3>
          <p className={styles['credit-card-benefits__text']}>
            Cash and transfers without commission and percent
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <MoneyDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 50 000 ₽</h3>
          <p className={styles['credit-card-benefits__text']}>
            Cash and transfers without commission and percent
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <MoneyDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 50 000 ₽</h3>
          <p className={styles['credit-card-benefits__text']}>
            Cash and transfers without commission and percent
          </p>
        </div>
        <div className={styles['credit-card-benefits__card']}>
          <MoneyDuotoneIcon className={styles['credit-card-benefits__icon']} />
          <h3 className={styles['credit-card-benefits__title']}>Up to 50 000 ₽</h3>
          <p className={styles['credit-card-benefits__text']}>
            Cash and transfers without commission and percent
          </p>
        </div>
      </div>

    </div>
  )
}

export default CreditCardBenefits
