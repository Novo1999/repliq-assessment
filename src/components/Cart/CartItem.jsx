import { FloatButton } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillDollarCircle,
} from 'react-icons/ai'
import useGetProducts from '../../hooks/api/useGetProducts.js'
import useCartContext from '../../hooks/useCartContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'

const CartItem = ({ selectedCustomer }) => {
  const { setCart, cart } = useCartContext()
  const { isLight } = useThemeContext()
  const { data: { data } = {} } = useGetProducts()

  // find the item from the cart for the selected customer
  const selectedCustomerItems = cart.find((item) => {
    return item.userId === selectedCustomer.userId && item.items
  })

  // this deletes the cart item
  const handleDeleteCartItem = (productIdToRemove) => {
    setCart((prevCart) =>
      prevCart.map((user) => ({
        ...user,
        items: user.items.filter(
          (item) => item.productId !== productIdToRemove
        ),
      }))
    )
  }

  return (
    <AnimatePresence>
      {selectedCustomerItems.items.map((item) => {
        return (
          <motion.div
            layout
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'tween', duration: 0.2 }}
            key={item.productId}
          >
            <div className='rounded-3xl border-2 border-gray-200 bg-blue-500 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4'>
              <div className='col-span-12 lg:col-span-2 img box'>
                <img
                  src={
                    data?.find((product) => product.name === item.productName)
                      ?.imageURL
                  }
                  alt='product'
                  className='max-lg:w-full lg:w-[180px] rounded-full'
                />
              </div>
              <div className='col-span-12 lg:col-span-10 relative detail w-full lg:pl-3'>
                <div className='flex items-center justify-between w-full mb-4'>
                  <h5 className='font-manrope font-bold text-2xl leading-9 text-gray-900'>
                    {item.productName}
                  </h5>
                  <div className='rounded-full group flex items-center justify-center focus-within:outline-red-500'>
                    <FloatButton.Group
                      trigger='click'
                      type='default'
                      style={{ bottom: 24, position: 'absolute' }}
                      icon={<AiFillDelete />}
                    >
                      <FloatButton
                        icon={<AiFillCheckCircle />}
                        className='bg-red-500'
                        onClick={() => handleDeleteCartItem(item.productId)}
                      />
                    </FloatButton.Group>
                  </div>
                </div>
                <div className='font-normal flex items-center gap-2 text-base leading-7 text-gray-100 mb-6'>
                  <AiFillDollarCircle />
                  <p> {item.price}</p>
                  <p> X {item.quantity} </p>
                </div>
                <div className='flex justify-between items-center'>
                  <h6 className='text-white font-manrope font-bold text-2xl leading-9 text-right'>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </h6>
                </div>
              </div>
            </div>
          </motion.div>
        )
      })}
      {/* sub total */}
      {selectedCustomerItems.items.length && (
        <p key='total' className='text-green-600 font-poppins text-xl'>
          Subtotal: $
          {selectedCustomerItems.items
            .reduce((acc, curr) => {
              return acc + curr.price * curr.quantity
            }, 0)
            .toFixed(2)}
        </p>
      )}
      {/* show message when user has no item */}
      <p
        className={`font-poppins text-center ${
          isLight ? 'text-black' : 'text-white'
        }`}
      >
        {selectedCustomerItems.items.length < 1 && 'User has no item'}
      </p>
    </AnimatePresence>
  )
}
export default CartItem
