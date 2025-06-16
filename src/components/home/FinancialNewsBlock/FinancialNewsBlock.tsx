import { useRef } from 'react'
import styles from './financial-news-block.module.scss'

import { newsCardsData } from './data/newsCardsData'
import SliderCard from '../../shared/SliderCard/SliderCard'
import ArrowLeftIcon from '../../../assets/icons/ArrowLeft'
import ArrowRightIcon from '../../../assets/icons/ArrowRight'

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
    <section className={styles['financial-news-block']}>
      <div className={styles['financial-news-block__header']}>
        <h2 className={styles['financial-news-block__title']}>
          Current news from the world of finance
        </h2>
        <p className={styles['financial-news-block__subtitle']}>
          We update the news feed every 15 minutes. You can learn more by clicking on the news you
          are interested in.
        </p>
      </div>

      <div className={styles['financial-news-block__slider-container']}>
        <div className={styles['financial-news-block__slider']} ref={sliderRef}>
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

        <div className={styles['financial-news-block__button-box']}>
          <button
            aria-label="Previous"
            className={styles['financial-news-block__button']}
            onClick={handlePrev}
          >
            <ArrowLeftIcon className={styles['financial-news-block__icon']} />
          </button>
          <button
            aria-label="Next"
            className={styles['financial-news-block__button']}
            onClick={handleNext}
          >
            <ArrowRightIcon className={styles['financial-news-block__icon']} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinancialNewsBlock
