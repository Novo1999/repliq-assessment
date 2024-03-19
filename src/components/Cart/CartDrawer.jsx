import { Button, Drawer, Space } from 'antd'
import { useState } from 'react'
import useCartContext from '../../hooks/useCartContext.js'
import CartUserContent from './CartUserContent.jsx'

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
        <section className='relative flex justify-center'>
          <div className='grid grid-cols-2 gap-10'>
            {cart?.map((customer) => {
              return (
                <CartUserContent key={customer.userId} customer={customer} />
              )
            })}
          </div>
        </section>
        <div className='w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto'>
          {/* {cart.map((item) => {
            return (
              item.quantity !== 0 &&
              item.userId === selectedCustomer && (
                <CartItem key={item.userId} cart={item} />
              )
            )
          })} */}
        </div>
      </Drawer>
    </>
  )
}
export default CartDrawer
