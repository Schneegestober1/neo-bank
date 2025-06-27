import { useEffect, useRef } from 'react'
import styles from './financial-news-block.module.scss'
import SliderCard from '../../shared/SliderCard/SliderCard'
import ArrowLeftIcon from '../../../assets/icons/ArrowLeft'
import ArrowRightIcon from '../../../assets/icons/ArrowRight'
import { useSliderControls } from '../../hooks/useSliderControls'
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../store/store'
import { fetchNews } from '../../store/slices/newsBlock/newsThunks'

function FinancialNewsBlock() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const { scrollNext, scrollToStart } = useSliderControls(sliderRef)

  const dispatch = useDispatch<AppDispatch>()
  const { items: newsItems, loading, error } = useSelector((state: RootState) => state.news)

  useEffect(() => {
    if (newsItems.length === 0) {
      dispatch(fetchNews())
    }
  }, [dispatch, newsItems.length])

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

      {loading && <p>Loading news...</p>}
      {error && <p>Error: {error}</p>}

      <div className={styles['financial-news-block__slider-container']}>
        <div className={styles['financial-news-block__slider']} ref={sliderRef}>
          {newsItems.map((item, index) => (
            <a href={item.url} target="_blank" rel="noopener noreferrer" key={index}>
              <SliderCard
                src={item.urlImage}
                alt={item.title}
                title={item.title}
                text={item.desc}
              />
            </a>
          ))}
        </div>
        <div className={styles['financial-news-block__button-box']}>
          <button
            aria-label="Previous"
            className={styles['financial-news-block__button']}
            onClick={scrollToStart}
          >
            <ArrowLeftIcon className={styles['financial-news-block__icon']} />
          </button>
          <button
            aria-label="Next"
            className={styles['financial-news-block__button']}
            onClick={scrollNext}
          >
            <ArrowRightIcon className={styles['financial-news-block__icon']} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FinancialNewsBlock
