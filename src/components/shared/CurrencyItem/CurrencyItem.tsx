import React from 'react'
import styles from './currency-item.module.scss'

interface CurrencyItemProps {
  code: string
  value: string
}

export const CurrencyItem: React.FC<CurrencyItemProps> = ({ code, value }) => (
  <li className={styles.item}>
    <span className={styles.currency}>{code}: </span>
    <span className={styles.value}>{value}</span>
  </li>
)
