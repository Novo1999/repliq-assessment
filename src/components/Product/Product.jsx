import { Card } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import { toast } from 'react-toastify'
import ProductImg from '../../assets/product.jpeg'
import useCartContext from '../../hooks/useCartContext.js'
import useQuantity from '../../hooks/useQuantity.js'
import ProductModal from './ProductModal.jsx'
const { Meta } = Card

const Product = ({ product }) => {
  const { id, category, description, name, price } = product
  const {
    productQuantity,
    handleIncreaseQuantity,
    setProductQuantity,
    handleDecreaseQuantity,
  } = useQuantity()

  const [isModalOpen, setIsModalOpen] = useState(false)

  // check which product has quantity to show add to cart button based on this
  const hasQuantity = productQuantity.find((item) => item.id === id)

  const { setCart } = useCartContext()

  const handleAddToCart = () => {
    setCart((prevCart) => {
      // if item exists, increase its quantity only
      const exists = prevCart.find((item) => item.id === id)
      if (exists) {
        const updatedCart = prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + productQuantity[0].quantity }
            : item
        )
        return updatedCart
      } else {
        return [
          ...prevCart,
          { ...product, quantity: productQuantity[0].quantity },
        ]
      }
    })
    toast.success(name + ' Added to cart', {
      autoClose: 1000,
      position: 'bottom-right',
    })
    console.log(productQuantity)
    setProductQuantity((prevQuantity) =>
      prevQuantity.filter((item) => item.id !== id)
    )
  }

  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Card
        className='w-72 xl:w-[400px] font-poppins cursor-pointer h-[33rem] xl:h-[40rem]'
        cover={
          <ProductModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            product={product}
          >
            <img alt='example' src={ProductImg} />
          </ProductModal>
        }
        actions={[
          <button
            onClick={() => handleDecreaseQuantity(id)}
            value='minus'
            key='minus'
            className='btn btn-circle bg-blue-500 hover:bg-red-500 text-white text-4xl btn-outline'
          >
            <CiCircleMinus />
          </button>,
          <div
            className='flex justify-center flex-col items-center text-lg'
            key='add'
          >
            <p className='text-stone-700'>{hasQuantity?.quantity ?? 0}</p>
            {hasQuantity?.quantity && (
              <button
                onClick={handleAddToCart}
                className='btn text-sm btn-accent'
              >
                Add To Cart
              </button>
            )}
          </div>,
          <button
            value='plus'
            onClick={() => handleIncreaseQuantity(id)}
            key='plus'
            className='btn btn-circle bg-blue-500 hover:bg-green-500 text-white text-4xl btn-outline plus'
          >
            <CiCirclePlus />
          </button>,
        ]}
      >
        {/* product modal wrapper needs to be in two places, one is the image and one is this part */}
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <Meta title={name} description={description} />
          <div className='flex justify-between mt-6'>
            <p className='text-xl text-blue-500'>Price: ${price}</p>
            <div
              onClick={(e) => e.stopPropagation()}
              className='text-md rounded-xl p-1 text-black bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer'
            >
              {category}
            </div>
          </div>
        </ProductModal>
      </Card>
    </motion.div>
  )
}
export default Product
