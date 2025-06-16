import './App.scss'
import CardPromoTitle from './components/CardPromoTitle/CardPromoTitle'
import CurrencyRate from './components/CurrencyRate/CurrencyRate'
import FeatureOverview from './components/FeatureOverview/FeatureOverview'
import FinancialNewsBlock from './components/FinancialNewsBlock/FinancialNewsBlock'
import Footer from './components/Footer/Footer'
import GlobalAvailability from './components/GlobalAvailability/GlobalAvailability'
import Header from './components/Header/Header'
import SupportNewsletterSignup from './components/SupportNewsletterSignup/SupportNewsletterSignup'

function App() {
  return (
    <>
      <Header />
      <CardPromoTitle />
      <FeatureOverview />
      <CurrencyRate />
      <GlobalAvailability />
      <FinancialNewsBlock />
      <SupportNewsletterSignup />
      <Footer />
    </>
  )
}

export default App
