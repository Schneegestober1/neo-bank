import { useRef } from 'react'
import CreditCardBenefits from '../../components/loan/CreditCardBenefits/CreditCardBenefits'
import CustomizeCard, {
  type CustomizeCardRef,
} from '../../components/loan/CustomizeCard/CustomizeCard'
import HowToGetCard from '../../components/loan/HowToGetCard/HowToGetCard'
import PlatinumCard from '../../components/loan/PlatinumCard/PlatinumCard'

function LoanPage() {
  const customizeCardRef = useRef<CustomizeCardRef>(null)

  const handleApplyClick = () => {
    customizeCardRef.current?.scrollToForm()
  }
  return (
    <>
      <PlatinumCard onApplyClick={handleApplyClick} />
      <CreditCardBenefits />
      <HowToGetCard />
      <CustomizeCard ref={customizeCardRef} />
    </>
  )
}

export default LoanPage
