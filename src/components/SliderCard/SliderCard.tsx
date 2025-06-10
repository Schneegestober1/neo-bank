import React from 'react'
import CardImage from '../CardImage/CardImage'
import styles from './slider-card.module.scss'

interface SliderCardProps {
  src: string
  alt: string
  title: string
  text: string
  className?: string
}

const SliderCard: React.FC<SliderCardProps> = ({ src, alt, title, text, className }) => {
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <CardImage src={src} alt={alt} className={styles.image} />
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardText}>{text}</p>
    </div>
  )
}

export default SliderCard
