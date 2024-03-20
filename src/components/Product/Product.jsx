import { Card } from 'antd'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useGetProducts from '../../hooks/api/useGetProducts.js'
import useCategoryContext from '../../hooks/useCategoryContext.js'
import useProductContext from '../../hooks/useProductContext.js'
import ProductModal from './ProductModal.jsx'
const { Meta } = Card

const Product = ({ product }) => {
  const { category, description, name, price, imageURL } = product
  const { data: { data } = {} } = useGetProducts()
  const { setIsFiltering, setCategory } = useCategoryContext()
  const { setProducts } = useProductContext()
  const handleChangeCategory = (category) => {
    if (category) {
      setCategory(category)
      setIsFiltering(true)
      window.scroll({ top: 200, behavior: 'smooth' })
    }
    setProducts(() => {
      return data.filter((product) => product.category === category)
    })
  }

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.div whileHover={{ translateY: -5 }}>
      <Card
        className='w-72 shadow-xl xl:w-[400px] font-poppins cursor-pointer h-full bg-blue-500 border-none'
        cover={
          <ProductModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            product={product}
          >
            <img
              className='h-96 object-cover w-full'
              alt='example'
              src={imageURL}
            />
          </ProductModal>
        }
      >
        {/* product modal wrapper needs to be in two places, one is the image and one is this part */}
        <ProductModal
          product={product}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        >
          <Meta title={<p className='text-white'>{name}</p>} />
          <div className='flex justify-between mt-6'>
            <p className='text-xl text-white'>Price: ${price}</p>
            <div
              onClick={(e) => {
                e.stopPropagation()
                setIsFiltering(true)
                handleChangeCategory(category)
              }}
              className='text-md rounded-xl p-1 text-xs flex justify-center items-center text-black bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer'
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
