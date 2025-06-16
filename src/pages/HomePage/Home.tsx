import CardPromoTitle from '../../components/CardPromoTitle/CardPromoTitle'
import FeatureOverview from '../../components/FeatureOverview/FeatureOverview'
import CurrencyRate from '../../components/CurrencyRate/CurrencyRate'
import GlobalAvailability from '../../components/GlobalAvailability/GlobalAvailability'
import FinancialNewsBlock from '../../components/FinancialNewsBlock/FinancialNewsBlock'
import SupportNewsletterSignup from '../../components/SupportNewsletterSignup/SupportNewsletterSignup'

const Home = () => {
  return (
    <>
      <CardPromoTitle />
      <FeatureOverview />
      <CurrencyRate />
      <GlobalAvailability />
      <FinancialNewsBlock />
      <SupportNewsletterSignup />
    </>
  )
}

export default Home
