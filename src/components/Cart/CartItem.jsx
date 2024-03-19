import { toast } from 'react-toastify'
import ProductImg from '../../assets/product.jpeg'

import useCartContext from '../../hooks/useCartContext.js'
import { DeleteSVG } from '../ui/SVG.jsx'

const CartItem = ({ cart }) => {
  const { setCart } = useCartContext()

  const handleDeleteCartItem = (productIdToRemove) => {
    setCart((prevCart) =>
      prevCart.map((user) => ({
        ...user,
        items: user.items.filter(
          (item) => item.productId !== productIdToRemove
        ),
      }))
    )

    toast.info('Deleted from cart', {
      autoClose: 1000,
      position: 'bottom-right',
    })
  }

  return cart.length ? (
    cart.map((item) => {
      return (
        <div key={item.productId}>
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
                  {item.productName}
                </h5>
                <button
                  onClick={() => handleDeleteCartItem(item.productId)}
                  className='rounded-full group flex items-center justify-center focus-within:outline-red-500'
                >
                  <DeleteSVG />
                </button>
              </div>
              <p className='font-normal text-base leading-7 text-gray-500 mb-6'>
                {item.price}
              </p>
              <div className='flex justify-between items-center'>
                <h6 className='text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right'>
                  ${(item.price * item.quantity).toFixed(2)}
                </h6>
              </div>
            </div>
          </div>
        </div>
      )
    })
  ) : (
    <p className='text-center text-xl'>User has no items</p>
  )
}
export default CartItem
