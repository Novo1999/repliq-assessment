import ProductImg from '../../assets/product.jpeg'
import useCart from '../../hooks/useCart.js'
import { DeleteSVG, MinusSVG, PlusSVG } from '../ui/SVG.jsx'

const CartItem = ({ product }) => {
  const { id, name, description, price, quantity } = product

  const {
    handleDecreaseCartItemQuantity,
    handleIncreaseCartItemQuantity,
    handleDeleteCartItem,
  } = useCart(id)
  return (
    <div className='rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 '>
      <div className='col-span-12 lg:col-span-2 img box'>
        <img
          src={ProductImg}
          alt='product'
          className='max-lg:w-full lg:w-[180px] '
        />
      </div>
      <div className='col-span-12 lg:col-span-10 detail w-full lg:pl-3'>
        <div className='flex items-center justify-between w-full mb-4'>
          <h5 className='font-manrope font-bold text-2xl leading-9 text-gray-900'>
            {name}
          </h5>
          <button
            onClick={handleDeleteCartItem}
            className='rounded-full group flex items-center justify-center focus-within:outline-red-500'
          >
            <DeleteSVG />
          </button>
        </div>
        <p className='font-normal text-base leading-7 text-gray-500 mb-6'>
          {description}
        </p>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleDecreaseCartItemQuantity}
              className='group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300'
            >
              <MinusSVG />
            </button>
            <div
              type='text'
              id='number'
              className='border border-gray-200 rounded-full w-10 aspect-square outline-none flex items-center justify-center text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center'
            >
              {quantity}
            </div>
            <button
              onClick={handleIncreaseCartItemQuantity}
              className='group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300'
            >
              <PlusSVG />
            </button>
          </div>
          <h6 className='text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right'>
            ${(price * quantity).toFixed(2)}
          </h6>
        </div>
      </div>
    </div>
  )
}
export default CartItem
