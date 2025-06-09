import CardImage from '../CardImage/CardImage'
import styles from './financial-news-block.module.scss'

function FinancialNewsBlock() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Current news from the world of finance</h2>
        <p className={styles.subtitle}>
          We update the news feed every 15 minutes. You can learn more by clicking on the news you
          are interested in.
        </p>
      </div>

      <div className={styles.card}>
        <CardImage src="public/ethhereum.jpg" alt="image news" className={styles.image} />
        <h4 className={styles.cardTitle}>
          Ethereum just pulled off its final test run ahead of one of the most important events in
          crypto - CN
        </h4>
        <p className={styles.cardText}>
          Ethereum is moving closer to adopting a proof-of-stake model for its network, which is
          less energy intensive.
        </p>
      </div>
    </section>
  )
}

export default FinancialNewsBlock
