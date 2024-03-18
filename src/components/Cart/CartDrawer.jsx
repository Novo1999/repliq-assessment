import { Button, Drawer, Space } from 'antd'
import { useState } from 'react'
import { ImSad } from 'react-icons/im'
import { Link } from 'react-router-dom'
import useCartContext from '../../hooks/useCartContext.js'
import { calculateCartTotal } from '../../utils/calculateCartTotal.js'
import CartItem from './CartItem.jsx'
const CartDrawer = ({ children }) => {
  const { cart } = useCartContext()
  const [open, setOpen] = useState(false)
  const showDrawer = () => {
    setOpen(true)
  }
  const onClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Space>
        <Button type='link' onClick={showDrawer}>
          {children}
        </Button>
      </Space>
      <Drawer
        title='Cart'
        placement='right'
        width={500}
        onClose={onClose}
        open={open}
      >
        <section className='relative'>
          <div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
            {cart.map((item) => {
              return (
                item.quantity !== 0 && <CartItem key={item.id} product={item} />
              )
            })}

            {cart.length ? (
              <div className='flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto'>
                <h5 className='text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4'>
                  Subtotal
                </h5>
                <div className='flex items-center justify-between gap-5 '>
                  <h6 className='font-manrope font-bold text-3xl lead-10 text-indigo-600'>
                    ${calculateCartTotal(cart)}
                  </h6>
                </div>
              </div>
            ) : null}
            {cart.length ? (
              <div className='max-lg:max-w-lg max-lg:mx-auto'>
                <p className='font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6'>
                  Shipping taxes, and discounts calculated at checkout
                </p>
                <Link
                  to='/checkout'
                  className='rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full flex justify-center text-center transition-all duration-500 hover:bg-indigo-700 '
                >
                  Checkout
                </Link>
              </div>
            ) : (
              <div className='flex items-center justify-center gap-2'>
                <p className='text-center text-xl'>Cart is Empty</p>
                <ImSad className='text-2xl' />
              </div>
            )}
          </div>
        </section>
      </Drawer>
    </>
  )
}
export default CartDrawer
