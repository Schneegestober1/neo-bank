import ArrowUpIcon from '../../../assets/icons/ArrowUpIcon'
import styles from '../FaqBlock/faq-block.module.scss'

const FaqBlock = () => {
  return (
    <section className={styles['faq-block']}>
      <div className={styles['faq-block__container']}>
        <div className={styles['faq-block__category']}>
          <h3 className={styles['faq-block__title']}>Issuing and receiving a card</h3>
          <div className={styles['faq-block__list']}>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>How to get a card?</p>
              <p className={styles['faq-block__answer']}>
                We will deliver your card by courier free of charge. Delivery in Moscow and St.
                Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5
                working days.
              </p>
              <ArrowUpIcon />
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>
                What documents are needed and how old should one be to get a card?
              </p>
              <p className={styles['faq-block__answer']}>
                Need a passport. You must be between 20 and 70 years old.
              </p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>In what currency can I issue a card?</p>
              <p className={styles['faq-block__answer']}>In rubles, dollars or euro</p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>
                How much income do I need to get a credit card?
              </p>
              <p className={styles['faq-block__answer']}>
                To obtain a credit card, you will need an income of at least 25,000 rubles per month
                after taxes.
              </p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>
                How do I find out about the bank's decision on my application?
              </p>
              <p className={styles['faq-block__answer']}>
                After registration, you will receive an e-mail with a decision on your application.
              </p>
            </div>
          </div>
        </div>

        <div className={styles['faq-block__category']}>
          <h3 className={styles['faq-block__title']}>Using a credit card</h3>
          <div className={styles['faq-block__list']}>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>What is an interest free credit card?</p>
              <p className={styles['faq-block__answer']}>
                A credit card with a grace period is a bank card with an established credit limit,
                designed for payment, reservation of goods and services, as well as for receiving
                cash, which allows you to use credit funds free of charge for a certain period.
              </p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>How to activate a credit card</p>
              <p className={styles['faq-block__answer']}>
                You can activate your credit card and generate a PIN code immediately after
                receiving the card at a bank branch using a PIN pad.
              </p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>What is a settlement date?</p>
              <p className={styles['faq-block__answer']}>
                The settlement date is the date from which you can pay off the debt for the
                reporting period. The settlement date falls on the first calendar day following the
                last day of the reporting period. The first settlement date is reported by the bank
                when transferring the issued credit card to the client, and then in the monthly
                account statement.
              </p>
            </div>
            <div className={styles['faq-block__item']}>
              <p className={styles['faq-block__question']}>
                What do I need to know about interest rates?
              </p>
              <p className={styles['faq-block__answer']}>
                For each reporting period from the 7th day of the previous month to the 6th day of
                the current month inclusive, a statement is generated for the credit card. The
                statement contains information on the amount and timing of the minimum payment, as
                well as the total amount of debt as of the date of issue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqBlock
