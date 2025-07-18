import type { ReactNode } from 'react'
import styles from '../CreditCardBenefitCard/credit-card-benefit-card.module.scss'

type CreditCardBenefitCardProps = {
  icon?: ReactNode
  title: string
  text: string
  className?: string
}

const CreditCardBenefitCard: React.FC<CreditCardBenefitCardProps> = ({
  icon,
  title,
  text,
  className,
}) => {
  return (
    <div className={`${styles['credit-card-benefits__card']} ${className ?? ''}`}>
      {icon && <div className={styles['credit-card-benefits__icon']}>{icon}</div>}
      <h3 className={`${styles['credit-card-benefits__title']}`}>{title}</h3>
      <p className={`${styles['credit-card-benefits__text']}`}>{text}</p>
    </div>
  )
}

export default CreditCardBenefitCard
