import { Outlet } from 'react-router-dom'
import './App.scss'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
