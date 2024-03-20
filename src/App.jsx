import 'react-toastify/dist/ReactToastify.css'

import { ToastContainer } from 'react-toastify'
import Navbar from './components/ui/Navbar.jsx'
import ScrollProgress from './components/ui/ScrollProgress.jsx'
import ScrollToTop from './components/ui/ScrollToTop.jsx'
import AnimatedOutletFinal from './pages/AnimatedOutlet.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import CartProvider from './providers/CartProviders.jsx'
import CategoryProvider from './providers/CategoryProvider.jsx'
import CustomerProvider from './providers/CustomerContext.jsx'
import ProductProvider from './providers/ProductProvider.jsx'
import ThemeProvider from './providers/ThemeProvider.jsx'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CategoryProvider>
          <CustomerProvider>
            <ProductProvider>
              <CartProvider>
                <ScrollToTop />
                <ScrollProgress />
                <Navbar />
                <AnimatedOutletFinal />
              </CartProvider>
            </ProductProvider>
          </CustomerProvider>
        </CategoryProvider>
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
