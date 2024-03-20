import { Button, Drawer, Space } from 'antd'
import { useState } from 'react'
import useCartContext from '../../hooks/useCartContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'
import CartUserContent from './CartUserContent.jsx'

const CartDrawer = ({ children }) => {
  const { cart } = useCartContext()
  const { isLight } = useThemeContext()

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
        style={{ backgroundColor: isLight && '#292524' }}
        title={
          <p className={`${isLight ? 'text-white' : 'text-black'}`}>
            User Carts
          </p>
        }
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
      </Drawer>
    </>
  )
}
export default CartDrawer
