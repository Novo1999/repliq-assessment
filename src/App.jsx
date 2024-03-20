import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import Navbar from './components/ui/Navbar.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import CartProvider from './providers/CartProviders.jsx'
import CategoryProvider from './providers/CategoryProvider.jsx'
import CustomerProvider from './providers/CustomerContext.jsx'
import ProductProvider from './providers/ProductProvider.jsx'

function App() {
  return (
    <AuthProvider>
      <CategoryProvider>
        <CustomerProvider>
          <ProductProvider>
            <CartProvider>
              <ScrollToTop />
              <ScrollProgress />
              <Navbar />
              <Outlet />
            </CartProvider>
          </ProductProvider>
        </CustomerProvider>
      </CategoryProvider>
      <ToastContainer />
    </AuthProvider>
  )
}

export default App
