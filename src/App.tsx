import './App.scss'
import CardPromoTitle from './components/CardPromoTitle/CardPromoTitle'
import CurrencyRate from './components/CurrencyRate/CurrencyRate'
import FeatureOverview from './components/FeatureOverview/FeatureOverview'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />
      <CardPromoTitle />
      <FeatureOverview />
      <CurrencyRate />
    </>
  )
}

export default App
