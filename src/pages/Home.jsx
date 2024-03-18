import { ToastContainer } from 'react-toastify'
import ProductContainer from '../components/Product/ProductContainer.jsx'
import ProductList from '../components/Product/ProductList.jsx'
import Carousel from '../components/ui/Carousel.jsx'

const Home = () => {
  return (
    <>
      <Carousel />
      <ProductContainer>
        <ProductList />
      </ProductContainer>
      <ToastContainer />
    </>
  )
}
export default Home
