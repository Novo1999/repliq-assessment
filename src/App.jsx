import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/ui/Navbar.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import CartProvider from './providers/CartProviders.jsx'

function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Outlet />
    </CartProvider>
  )
}

export default App
