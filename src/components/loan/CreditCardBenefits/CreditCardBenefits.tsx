import { NavLink, Outlet, useLocation } from 'react-router-dom'
import styles from '../CreditCardBenefits/credit-card-benefits.module.scss'
import { useEffect, useRef, useState } from 'react'

const CreditCardBenefits = () => {
  const location = useLocation()
  const navRef = useRef<HTMLUListElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeLink = navRef.current.querySelector(`.${styles.active}`) as HTMLElement | null

        if (activeLink) {
          const { offsetLeft, offsetWidth } = activeLink
          setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
        }
      }
    }

    requestAnimationFrame(updateIndicator)
  }, [location.pathname])

  return (
    <div className={styles['loan-page']}>
      <nav className={styles['loan-page__nav']}>
        <ul className={styles['loan-page__nav-list']} ref={navRef}>
          {[
            { to: 'about', label: 'About card' },
            { to: 'rate', label: 'Rates and conditions' },
            { to: 'cashback', label: 'Cashback' },
            { to: 'faq', label: 'FAQ' },
          ].map(({ to, label }) => (
            <li className={styles['loan-page__nav-item']} key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `${styles['loan-page__nav-link']} ${styles['active']}`
                    : styles['loan-page__nav-link']
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles['loan-page__tab-line']}>
          <div
            className={styles['loan-page__tab-indicator']}
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>
      </nav>

      <div className={styles['loan-page__content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default CreditCardBenefits
