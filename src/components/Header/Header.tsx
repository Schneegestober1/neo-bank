import Button from '../Button/Button'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles['header']}>
      <h2 className={styles['header__logo']}>NeoBank</h2>

      <nav className={styles['header__nav']}>
        <ul className={styles['header__menu']}>
          <li className={styles['header__menu-item']}>
            <a href="#" className={styles['header__menu-link']}>
              Credit card
            </a>
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
