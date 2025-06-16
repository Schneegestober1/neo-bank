
import FeatureOverview from '../../components/FeatureOverview/FeatureOverview'
import GlobalAvailability from '../../components/GlobalAvailability/GlobalAvailability'
import FinancialNewsBlock from '../../components/FinancialNewsBlock/FinancialNewsBlock'
import SupportNewsletterSignup from '../../components/SupportNewsletterSignup/SupportNewsletterSignup'
import CardPromoTitle from '../../components/home/CardPromoTitle/CardPromoTitle'
import CurrencyRate from '../../components/home/CurrencyRate/CurrencyRate'

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
