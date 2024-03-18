import { Button, Drawer, Space } from 'antd'
import { useState } from 'react'
import useCartContext from '../../hooks/useCartContext.js'
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
                item.quantity !== 0 && (
                  <CartItem key={item.userId} cart={item} />
                )
              )
            })}
          </div>
        </section>
      </Drawer>
    </>
  )
}
export default CartDrawer
