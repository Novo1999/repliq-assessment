import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ProductSummary from '../components/ProductSummary.jsx'
import useCartContext from '../hooks/useCartContext.js'
import { calculateCartTotal } from '../utils/calculateCartTotal.js'

const Checkout = () => {
  const { cart, setCart } = useCartContext()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [showSummary, setShowSummary] = useState(false)
  const [summaryData, setSummaryData] = useState([])

  // enable the button only when user has typed
  const hasNameAndAddress =
    watch('name')?.length && watch('address')?.length && cart.length

  const onSubmit = () => {
    // show the summary when user checks out
    setShowSummary(true)
    // taking the names of the products to pass it in the summary component
    setSummaryData(
      cart.map((item) => ({ name: item.name, quantity: item.quantity }))
    )
    // reset the cart on checkout
    setCart([])
  }
  // don't let the user go to checkout page when the cart is empty
  useEffect(() => {
    if (cart.length === 0 && summaryData.length === 0) {
      navigate('/')
    }
  }, [cart, navigate, summaryData])

  console.log(errors)
  return (
    <div className='bg-gray-100 min-h-screen'>
      {showSummary ? (
        <ProductSummary summaryData={summaryData} />
      ) : (
        <div className='max-w-4xl mx-auto px-4 py-8'>
          <h1 className='text-3xl font-bold mb-8'>Checkout</h1>
          {/* Billing Information */}
          <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
            <h2 className='text-lg font-semibold mb-4'>Billing Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Full Name
                </label>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type='text'
                  id='name'
                  name='name'
                  className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
                />
                <p className='text-red-500 font-bold'>{errors.name?.message}</p>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-gray-700'
                >
                  Address
                </label>
                <input
                  {...register('address', { required: 'Address is required' })}
                  type='text'
                  id='address'
                  name='address'
                  className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
                />
                <p className='text-red-500 font-bold'>
                  {errors.address?.message}
                </p>
              </div>
            </form>
          </div>
          {/* Order Summary */}
          <div className='bg-white rounded-lg shadow-md p-6'>
            <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
            {/* Product list */}
            <div className='mb-4'>
              {cart.map(({ id, name, price, quantity }) => {
                return (
                  <div
                    key={id}
                    className='flex justify-between items-center mb-2'
                  >
                    <p className='text-gray-700 font-semibold'>{name}</p>
                    <p className='text-gray-700'>${price * quantity}</p>
                  </div>
                )
              })}

              {/* More product items */}
            </div>
            {/* Total */}
            <div className='flex justify-between items-center border-t pt-2'>
              <p className='font-semibold'>Total:</p>
              <p className='font-semibold'>${calculateCartTotal(cart)}</p>
            </div>
          </div>
          {/* Checkout Button */}
          <div className='mt-8'>
            {
              <button
                onClick={handleSubmit(onSubmit)}
                type='submit'
                className={`${
                  hasNameAndAddress
                    ? 'bg-blue-500 hover:bg-blue-600'
                    : 'bg-gray-500 hover:bg-gray-600'
                }  text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors cursor-pointer duration-300`}
              >
                Complete Purchase
              </button>
            }
          </div>
        </div>
      )}
    </div>
  )
}
export default Checkout
