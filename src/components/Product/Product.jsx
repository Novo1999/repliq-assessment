import { Card } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import ProductImg from '../../assets/product.jpeg'
import ProductModal from './ProductModal.jsx'
const { Meta } = Card

const Product = ({ product }) => {
  const { category, description, name, price } = product

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Card
        className='w-72 xl:w-[400px] font-poppins cursor-pointer h-full bg-blue-500 border-none'
        cover={
          <ProductModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            product={product}
          >
            <img alt='example' src={ProductImg} />
          </ProductModal>
        }
      >
        {/* product modal wrapper needs to be in two places, one is the image and one is this part */}
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <Meta
            title={<p className='text-white'>{name}</p>}
            description={<p className='text-white'>{description}</p>}
          />
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
