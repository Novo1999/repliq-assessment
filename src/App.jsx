import { Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from './components/ui/Navbar.jsx'
import AdminDashboard from './pages/AdminDashBoard.jsx'
import CartProvider from './providers/CartProviders.jsx'

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  )
}

export default App
