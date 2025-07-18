import React from 'react'
import ArrowUpIcon from '../../../assets/icons/ArrowUpIcon'
import styles from './faq-item.module.scss'

type FaqItemProps = {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={styles['faq-block__item']} onClick={onClick}>
      <div className={styles['faq-block__content']}>
        <p className={styles['faq-block__question']}>{question}</p>
        {isOpen && <p className={styles['faq-block__answer']}>{answer}</p>}
      </div>
      <ArrowUpIcon
        className={`${styles['faq-block__icon']} ${isOpen ? styles['faq-block__icon--active'] : ''}`}
      />
    </div>
  )
}

export default FaqItem
