import { type FC, type ReactNode } from 'react'
import styles from './feature-item.module.scss'
import CheckMarkIcon from '../../../assets/icons/CheckMarkIcon'

interface FeatureItemProps {
  children: ReactNode
}

const FeatureItem: FC<FeatureItemProps> = ({ children }) => {
  return (
    <div className={styles.featureItem}>
      <CheckMarkIcon />
      <p className={styles.featureText}>{children}</p>
    </div>
  )
}

export default FeatureItem
