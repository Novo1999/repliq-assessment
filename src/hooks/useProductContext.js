import { useContext } from 'react'
import { ProductContext } from '../context/index.js'

const useProductContext = () => {
  return useContext(ProductContext)
}
export default useProductContext
