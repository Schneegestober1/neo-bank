import styles from '../CashbackBlock/cashback-block.module.scss'
import cardStyles from '../../../shared/CreditCardBenefitCard/credit-card-benefit-card.module.scss'
import CreditCardBenefitCard from '../../../shared/CreditCardBenefitCard/CreditCardBenefitCard'

const CashbackBlock = () => {
  return (
    <section className={styles[`cashback-block`]}>
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="For food delivery, cafes and restaurants"
        text="5%"
      />
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="In supermarkets with our subscription"
        text="5%"
      />
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="In clothing stores and children's goods"
        text="2%"
      />
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="Other purchases and payment of services and fines"
        text="1%"
      />
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="Shopping in online stores"
        text="up to 3%"
      />
      <CreditCardBenefitCard
        className={`${styles['cashback-block__card']} ${cardStyles['credit-card-benefits__card--cashback']}`}
        title="Purchases from our partners"
        text="30%"
      />
    </section>
  )
}

export default CashbackBlock
