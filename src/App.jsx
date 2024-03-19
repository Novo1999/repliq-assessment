import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/ui/Navbar.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import CartProvider from './providers/CartProviders.jsx'
import ProductProvider from './providers/ProductProvider.jsx'

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <ScrollToTop />
          <ScrollProgress />
          <Navbar />
          <Outlet />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
