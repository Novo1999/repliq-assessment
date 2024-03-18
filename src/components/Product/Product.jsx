import { Card } from 'antd'
import { useState } from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'
import ProductImg from '../../assets/product.jpeg'
import useQuantity from '../../hooks/useQuantity.js'

const { Meta } = Card

const Product = ({ product }) => {
  const { id, category, description, name, price } = product
  const { productQuantity, handleIncreaseQuantity, handleDecreaseQuantity } =
    useQuantity()

  // check which product has quantity to show add to cart button based on this
  const hasQuantity = productQuantity.find((item) => item.id === id)

  return (
    <Card
      className='w-72 xl:w-[400px] font-poppins'
      cover={<img alt='example' src={ProductImg} />}
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
          {hasQuantity?.quantity && <p className='text-sm'>Add To Cart</p>}
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
      <Meta title={name} description={description} />
      <div className='flex justify-between mt-6'>
        <p className='text-xl text-blue-500'>Price: ${price}</p>
        <div className='text-md rounded-xl p-1 text-black bg-yellow-500 cursor-default'>
          {category}
        </div>
      </div>
    </Card>
  )
}
export default Product
