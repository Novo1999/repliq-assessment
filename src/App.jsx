import ProductContainer from './components/Product/ProductContainer.jsx'
import ProductList from './components/Product/ProductList.jsx'
import Carousel from './components/ui/Carousel.jsx'
import Navbar from './components/ui/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <ProductContainer>
        <ProductList />
      </ProductContainer>
    </>
  )
}

export default App
