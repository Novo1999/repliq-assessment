import { motion } from 'framer-motion'
import ProductContainer from '../components/Product/ProductContainer.jsx'
import ProductList from '../components/Product/ProductList.jsx'
import Carousel from '../components/ui/Carousel.jsx'

const Home = () => {
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
