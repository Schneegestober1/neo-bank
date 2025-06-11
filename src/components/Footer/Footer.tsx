import styles from './Footer.module.scss'
import CardImage from '../CardImage/CardImage'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <address className={styles.contacts}>
          <CardImage src="/footer-icon.png" alt="footer-icon" className={styles.img} />
          <div className={styles.contactInfo}>
            <a className={styles.tel} href="tel:+74959842513">
              +7 (495) 984 25 13
            </a>
            <a className={styles.mail} href="mailto:info@neoflex.ru">
              info@neoflex.ru
            </a>
          </div>
        </address>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <ul className={styles.navList}>
            <li>
              <a href="">About bank</a>
            </li>
            <li>
              <a href="">Ask a Question</a>
            </li>
            <li>
              <a href="">Quality of service</a>
            </li>
            <li>
              <a href="">Requisites</a>
            </li>
            <li>
              <a href="">Bank career</a>
            </li>
            <li>
              <a href="">Investors</a>
            </li>
            <li>
              <a href="">Analytics</a>
            </li>
            <li>
              <a href="">Business and processes</a>
            </li>
            <li>
              <a href="">Compliance and business ethics</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.line}></div>

      <section className={styles.cookieNotice}>
        <p>
          We use cookies to personalize our services and improve the user experience of our website.
          Cookies are small files containing information about previous visits to a website. If you
          do not want to use cookies, please change your browser settings.
        </p>
      </section>
    </footer>
  )
}

export default Footer
