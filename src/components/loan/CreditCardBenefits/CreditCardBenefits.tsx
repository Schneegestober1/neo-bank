import { NavLink, Outlet } from 'react-router-dom'
import styles from '../CreditCardBenefits/credit-card-benefits.module.scss'

const CreditCardBenefits = () => {
  return (
    <div className={styles['loan-page']}>
      <nav className={styles['loan-page__nav']}>
        <ul className={styles['loan-page__nav-list']}>
          <li className={styles['loan-page__nav-item']}>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive
                  ? `${styles['loan-page__nav-link']} ${styles[`active`]}`
                  : styles['loan-page__nav-link']
              }
            >
              About card
            </NavLink>
          </li>
          <li className={styles['loan-page__nav-item']}>
            <NavLink
              to="rate"
              className={({ isActive }) =>
                isActive
                  ? `${styles['loan-page__nav-link']} ${styles[`active`]}`
                  : styles['loan-page__nav-link']
              }
            >
              Rates and conditions
            </NavLink>
          </li>
          <li className={styles['loan-page__nav-item']}>
            <NavLink
              to="cashback"
              className={({ isActive }) =>
                isActive
                  ? `${styles['loan-page__nav-link']} ${styles[`active`]}`
                  : styles['loan-page__nav-link']
              }
            >
              Cashback
            </NavLink>
          </li>
          <li className={styles['loan-page__nav-item']}>
            <NavLink
              to="faq"
              className={({ isActive }) =>
                isActive
                  ? `${styles['loan-page__nav-link']} ${styles[`active`]}`
                  : styles['loan-page__nav-link']
              }
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles['loan-page__line']}></div>

      <div className={styles['loan-page__content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default CreditCardBenefits
