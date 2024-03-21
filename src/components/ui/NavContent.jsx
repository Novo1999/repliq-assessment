import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { ImCart } from 'react-icons/im'
import useCartContext from '../../hooks/useCartContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'
import CartDrawer from '../Cart/CartDrawer.jsx'
import DarkModeSwitch from './DarkModeSwitch.jsx'
import Navlink from './Navlink.jsx'

const NavContent = ({ isOpen, setIsOpen }) => {
  const { cart } = useCartContext()
  const { isLight } = useThemeContext()

  return (
    <div
      className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out ${
        isLight ? 'bg-white' : 'bg-stone-800'
      } lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
        isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
      }`}
    >
      {/* close the navbar when user clicks to change route */}
      <div
        onClick={() => setIsOpen(false)}
        className={`flex flex-col -mx-6 ${
          isLight ? '*:text-stone-800' : '*:text-white'
        } lg:flex-row lg:items-center lg:mx-8`}
      >
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/dashboard'>Dashboard</Navlink>
        <Navlink to='/orders'>Orders</Navlink>
        <Navlink to='/products'>Products</Navlink>
        <Navlink to='/checkout'>Checkouts</Navlink>
        <div className='ml-5 my-4 hidden sm:block'>
          <DarkModeSwitch />
        </div>
        <div
          // stop propagate so switching theme does not close the navbar
          onClick={(e) => e.stopPropagation()}
          className='ml-5 my-4 flex gap-2 sm:hidden'
        >
          <DarkModeSwitch />
          <p className='mt-[1.5px]'>Switch to {isLight ? 'Dark' : 'Light'}</p>
        </div>
        <Avatar
          className='hidden lg:block relative left-8'
          size='large'
          icon={<UserOutlined />}
        />
      </div>
      <div className='items-center mt-4 lg:mt-0 hidden lg:flex'>
        <CartDrawer>
          <div
            className={`hidden mx-4  transition-colors duration-300 transform lg:block  ${
              isLight ? 'text-stone-800' : '!text-white'
            } focus:outline-none`}
            aria-label='show notifications'
          >
            <ImCart className='text-2xl' />
            {cart.length ? (
              <div
                className={`rounded-full bg-blue-400 text-xs absolute top-3 ${
                  isLight ? 'text-stone-800' : '!text-white'
                } flex justify-center items-center left-3 size-5`}
              >
                {/* total cart items */}
                {
                  cart.reduce((acc, curr) => {
                    return [...acc, ...curr.items]
                  }, []).length
                }
              </div>
            ) : null}
          </div>
        </CartDrawer>
      </div>
      <div className='block lg:hidden'>
        <CartDrawer>
          <div
            className={`transition-colors flex gap-4 items-center duration-300 relative transform lg:hidden right-4 ${
              isLight ? 'text-stone-800' : '!text-white'
            } focus:outline-none`}
            aria-label='show notifications'
          >
            <ImCart className='text-2xl mt-3' />
            {cart.length ? (
              <div className='rounded-full bg-green-400 absolute top-6 left-3 size-5'>
                {cart.length}
              </div>
            ) : null}
            <p className='mt-4'>Cart</p>
          </div>
        </CartDrawer>
      </div>
      <div className='lg:hidden gap-2 items-center flex'>
        <Avatar
          className='lg:hidden block mt-4 relative right-1'
          size='large'
          icon={<UserOutlined />}
        />
        <p className='mt-4'>Profile</p>
      </div>
    </div>
  )
}
export default NavContent
