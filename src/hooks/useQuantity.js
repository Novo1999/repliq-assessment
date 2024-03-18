import { useState } from 'react'

const useQuantity = () => {
  const [productQuantity, setProductQuantity] = useState([])
  const handleIncreaseQuantity = (id) => {
    setProductQuantity((prevQuantity) => {
      if (!prevQuantity.find((item) => item.id === id)) {
        return [...prevQuantity, { id, quantity: 1 }]
      } else {
        return prevQuantity.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  const handleDecreaseQuantity = (id) => {
    setProductQuantity((currentItems) => {
      const prevQuantity = currentItems.find((item) => item.id === id)?.quantity
      // fallback value
      if (prevQuantity <= 1) {
        return currentItems.filter((item) => item.id !== id)
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity >= 1 ? item.quantity - 1 : 0,
            }
          } else {
            return item
          }
        })
      }
    })
  }
  return { productQuantity, handleIncreaseQuantity, handleDecreaseQuantity }
}
export default useQuantity
