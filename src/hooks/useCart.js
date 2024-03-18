import useCartContext from './useCartContext.js'

import { toast } from 'react-toastify'

const useCart = (id) => {
  const { setCart } = useCartContext()

  const handleIncreaseCartItemQuantity = () => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
      return updatedCart
    })
  }
  const handleDecreaseCartItemQuantity = () => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )

      // filter out the item if its quantity becomes 0
      return updatedCart.filter((item) => item.quantity !== 0)
    })
  }

  const handleDeleteCartItem = () => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    toast.info(name + ' deleted from cart', {
      autoClose: 1000,
      position: 'bottom-right',
    })
  }
  return {
    handleDecreaseCartItemQuantity,
    handleIncreaseCartItemQuantity,
    handleDeleteCartItem,
  }
}
export default useCart
