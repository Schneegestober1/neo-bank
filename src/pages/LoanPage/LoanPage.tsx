import CreditCardBenefits from '../../components/loan/CreditCardBenefits/CreditCardBenefits'
import CustomizeCard from '../../components/loan/CustomizeCard/CustomizeCard'
import HowToGetCard from '../../components/loan/HowToGetCard/HowToGetCard'
import PlatinumCard from '../../components/loan/PlatinumCard/PlatinumCard'

function LoanPage() {
  return (
    <>
      <PlatinumCard />
      <CreditCardBenefits />
      <HowToGetCard />
      <CustomizeCard />
    </>
  )
}

export default LoanPage
