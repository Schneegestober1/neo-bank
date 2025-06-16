import React from 'react'
import styles from './card-image.module.scss'
import clsx from 'clsx'

interface CardImageProps {
  src: string
  alt: string
  className?: string
}

const CardImage: React.FC<CardImageProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={clsx(styles.image, className)} />
}

export default CardImage
