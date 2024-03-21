import ProductContainer from '../components/Product/ProductContainer.jsx'
import ProductList from '../components/Product/ProductList.jsx'
import Carousel from '../components/ui/Carousel.jsx'

const Home = () => {
  return (
    <div>
      <Carousel />
      <ProductContainer>
        <ProductList />
      </ProductContainer>
    </div>
  )
}
export default Home
