import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './pages/HomePage/Home'
import NotFound from './pages/NotFound/NotFound'
import { Provider } from 'react-redux'
import { store } from './components/store/store'
import LoanPage from './pages/LoanPage/LoanPage'
import AboutCardBlock from './components/loan/AboutCardBlock/AboutCardBlock'
import RatesBlock from './components/loan/RatesBlock/RatesBlock'
import CashbackBlock from './components/loan/CashbackBlock/CashbackBlock'
import FaqBlock from './components/loan/FaqBlock/FaqBlock'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '*', element: <NotFound /> },
      {
        path: 'loan',
        element: <LoanPage />,
        children: [
          { index: true, element: <Navigate to="about" replace /> },
          { path: 'about', element: <AboutCardBlock /> },
          { path: 'rate', element: <RatesBlock /> },
          { path: 'cashback', element: <CashbackBlock /> },
          { path: 'faq', element: <FaqBlock /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
