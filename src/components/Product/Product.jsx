import { Card } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import ProductImg from '../../assets/product.jpeg'
import useCartContext from '../../hooks/useCartContext.js'
import useQuantity from '../../hooks/useQuantity.js'
import handleAddToCart from '../../utils/handleAddToCart.js'
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
  const ADD_CART_PARAMETERS = {
    setCart,
    id,
    productQuantity,
    product,
    setProductQuantity,
    name,
  }

  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Card
        className='w-72 xl:w-[400px] font-poppins cursor-pointer h-full'
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
                onClick={() => handleAddToCart(ADD_CART_PARAMETERS)}
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
