import { useState } from 'react'
import { ProductContext } from '../context/index.js'

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}
export default ProductProvider
