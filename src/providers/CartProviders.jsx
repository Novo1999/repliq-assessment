import { useState } from 'react'
import { cartData } from '../cartData.js'
import { CartContext } from '../context/index.js'

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(cartData)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
