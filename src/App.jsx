import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/ui/Navbar.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import CartProvider from './providers/CartProviders.jsx'
import CategoryProvider from './providers/CategoryProvider.jsx'
import ProductProvider from './providers/ProductProvider.jsx'

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <ProductProvider>
          <CartProvider>
            <ScrollToTop />
            <ScrollProgress />
            <Navbar />
            <Outlet />
          </CartProvider>
        </ProductProvider>
      </CategoryProvider>
    </AuthProvider>
  )
}

export default App
