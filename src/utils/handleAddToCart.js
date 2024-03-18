import { toast } from 'react-toastify'
const handleAddToCart = (parameters) => {
  parameters.setCart((prevCart) => {
    // if item exists, increase its quantity only
    const exists = prevCart.find((item) => item.id === parameters.id)
    if (exists) {
      const updatedCart = prevCart.map((item) =>
        item.id === parameters.id
          ? {
              ...item,
              quantity: item.quantity + parameters.productQuantity[0].quantity,
            }
          : item
      )
      return updatedCart
    } else {
      return [
        ...prevCart,
        {
          ...parameters.product,
          quantity: parameters.productQuantity[0].quantity,
        },
      ]
    }
  })
  toast.success(parameters.name + ' Added to cart', {
    autoClose: 1000,
    position: 'bottom-right',
  })
  parameters.setProductQuantity((prevQuantity) =>
    prevQuantity.filter((item) => item.id !== parameters.id)
  )
}
export default handleAddToCart
