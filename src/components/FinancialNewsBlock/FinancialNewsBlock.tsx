import { useRef } from 'react'
import styles from './financial-news-block.module.scss'
import ArrowLeftIcon from '../../assets/icons/ArrowLeft'
import ArrowRightIcon from '../../assets/icons/ArrowRight'
import SliderCard from '../SliderCard/SliderCard'
import { newsCardsData } from './data/newsCardsData'

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
          {newsCardsData.map((card) => (
            <SliderCard
              key={card.id} 
              src={card.src}
              alt={card.alt}
              title={card.title}
              text={card.text}
            />
          ))}
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
