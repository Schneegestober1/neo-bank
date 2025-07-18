import { Link, NavLink } from 'react-router-dom'
import Button from '../../shared/Button/Button'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Link to="/" className={styles['header__logo']}>
        NeoBank
      </Link>

      <nav className={styles['header__nav']}>
        <ul className={styles['header__menu']}>
          <li className={styles['header__menu-item']}>
            <NavLink
              to="/loan"
              className={({ isActive }) =>
                isActive
                  ? `${styles['header__menu-link']} ${styles[`active`]}`
                  : styles['header__menu-link']
              }
            >
              Credit card
            </NavLink>
          </li>
          <li className={styles['header__menu-item']}>
            <a href="#" className={styles['header__menu-link']}>
              Product
            </a>
          </li>
          <li className={styles['header__menu-item']}>
            <a href="#" className={styles['header__menu-link']}>
              Account
            </a>
          </li>
          <li className={styles['header__menu-item']}>
            <a href="#" className={styles['header__menu-link']}>
              Resources
            </a>
          </li>
        </ul>
      </nav>

      <Button className={styles['header__button']}>Online Bank</Button>
    </header>
  )
}

export default Header
