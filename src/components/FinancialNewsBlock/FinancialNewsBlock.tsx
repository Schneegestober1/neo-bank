import { useRef } from 'react'
import CardImage from '../CardImage/CardImage'
import styles from './financial-news-block.module.scss'
import ArrowLeftIcon from '../../assets/icons/ArrowLeft'
import ArrowRightIcon from '../../assets/icons/ArrowRight'

function FinancialNewsBlock() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 340

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount
    }
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Current news from the world of finance</h2>
        <p className={styles.subtitle}>
          We update the news feed every 15 minutes. You can learn more by clicking on the news you
          are interested in.
        </p>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.slider} ref={sliderRef}>
          <div className={styles.card}>
            <CardImage src="public/ethhereum.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>
              Ethereum just pulled off its final test run ahead of one of the most important events
              in crypto - CN
            </h4>
            <p className={styles.cardText}>
              Ethereum is moving closer to adopting a proof-of-stake model for its network, which is
              less energy intensive.
            </p>
          </div>
          <div className={styles.card}>
            <CardImage src="public/jim-cramer.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>
              Jim Cramer explains what Wednesday's market action reveals about the state of
              inflation - CNBC Telev
            </h4>
            <p className={styles.cardText}>
              The "Mad Money" host gave his take on what the market action on Wednesday suggests
              about inflation's
            </p>
          </div>
          <div className={styles.card}>
            <CardImage src="public/dow-futures.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>
              Dow futures tick higher after Wednesday's market rally - CNBC
            </h4>
            <p className={styles.cardText}>
              Dow futures inched higher in overnight trading after all the major averages posted
              sharp gains on th
            </p>
          </div>
          <div className={styles.card}>
            <CardImage src="public/bitcoin.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>Bitcoin 'Might Rally' Signifi coins rallied on</h4>
            <p className={styles.cardText}>Major coins rallied on</p>
          </div>
          <div className={styles.card}>
            <CardImage src="public/bitcoin.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>Bitcoin 'Might Rally' Signifi coins rallied on</h4>
            <p className={styles.cardText}>Major coins rallied on</p>
          </div>
          <div className={styles.card}>
            <CardImage src="public/bitcoin.jpg" alt="image news" className={styles.image} />
            <h4 className={styles.cardTitle}>Bitcoin 'Might Rally' Signifi coins rallied on</h4>
            <p className={styles.cardText}>Major coins rallied on</p>
          </div>
        </div>

        <div className={styles.buttonBox}>
          <button aria-label="Previous" className={styles.prevButton} onClick={handlePrev}>
            <ArrowLeftIcon className={styles.prevIcon} />
          </button>
          <button aria-label="Next" className={styles.nextButton} onClick={handleNext}>
            <ArrowRightIcon className={styles.nextIcon} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinancialNewsBlock
