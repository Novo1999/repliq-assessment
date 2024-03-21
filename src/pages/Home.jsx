import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import ProductContainer from '../components/Product/ProductContainer.jsx'
import ProductList from '../components/Product/ProductList.jsx'
import Carousel from '../components/ui/Carousel.jsx'
import useAuthContext from '../hooks/useAuthContext.js'

const Home = () => {
  const { user: { accessToken, username } = {} } = useAuthContext()
  // greet the user
  useEffect(() => {
    if (accessToken) {
      toast.success(`Welcome ${username}`, { autoClose: 1000 })
    }
  })

  return (
    <motion.div>
      <Carousel />
      <ProductContainer>
        <ProductList />
      </ProductContainer>
    </motion.div>
  )
}
export default Home
