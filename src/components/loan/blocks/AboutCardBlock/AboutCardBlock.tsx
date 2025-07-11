
import CreditCardBenefitCard from '../../../shared/CreditCardBenefitCard/CreditCardBenefitCard'
import { benefitsData } from '../../CreditCardBenefits/data/benefitsData'
import styles from '../AboutCardBlock/about-card-block.module.scss'

const AboutCardBlock = () => {
  return (
    <div className={styles['credit-card-benefits__cards']}>
      {benefitsData.map(({ icon, title, text }, index) => (
        <CreditCardBenefitCard key={index} icon={icon} title={title} text={text} />
      ))}
    </div>
  )
}

export default AboutCardBlock
