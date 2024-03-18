import { useContext } from 'react'
import { CartContext } from '../context/index.js'

const useCartContext = () => {
  return useContext(CartContext)
}
export default useCartContext
