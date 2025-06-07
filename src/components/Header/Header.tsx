import Button from '../Button/Button'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.logo}>NeoBank</h2>

      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Credit card
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Product
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Account
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Resources
            </a>
          </li>
        </ul>
      </nav>

      <Button className={styles.button}>Online Bank</Button>
    </header>
  )
}

export default Header
