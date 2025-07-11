import { useState } from 'react'
import styles from './faq-block.module.scss'
import { issuingFaq, usageFaq } from './data/faqData'
import FaqItem from '../../../shared/FaqBlock/FaqItem'

const FaqBlock = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenedIndex(openedIndex === index ? null : index)
  }

  const renderFaqList = (items: typeof issuingFaq, startIndexOffset: number = 0) =>
    items.map((item, i) => {
      const index = i + startIndexOffset
      return (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openedIndex === index}
          onClick={() => toggleItem(index)}
        />
      )
    })

  return (
    <section className={styles['faq-block']}>
      <div className={styles['faq-block__container']}>
        <div className={styles['faq-block__category']}>
          <h3 className={styles['faq-block__title']}>Issuing and receiving a card</h3>
          <div className={styles['faq-block__list']}>{renderFaqList(issuingFaq)}</div>
        </div>
        <div className={styles['faq-block__category']}>
          <h3 className={styles['faq-block__title']}>Using a credit card</h3>
          <div className={styles['faq-block__list']}>
            {renderFaqList(usageFaq, issuingFaq.length)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqBlock
