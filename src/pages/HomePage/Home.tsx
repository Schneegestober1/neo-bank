import CardPromoTitle from '../../components/home/CardPromoTitle/CardPromoTitle'
import CurrencyRate from '../../components/home/CurrencyRate/CurrencyRate'
import FeatureOverview from '../../components/home/FeatureOverview/FeatureOverview'
import FinancialNewsBlock from '../../components/home/FinancialNewsBlock/FinancialNewsBlock'
import GlobalAvailability from '../../components/home/GlobalAvailability/GlobalAvailability'
import SupportNewsletterSignup from '../../components/home/SupportNewsletterSignup/SupportNewsletterSignup'

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
