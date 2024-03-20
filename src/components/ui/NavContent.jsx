import { ImCart } from 'react-icons/im'
import useCartContext from '../../hooks/useCartContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'
import CartDrawer from '../Cart/CartDrawer.jsx'
import DarkModeSwitch from './DarkModeSwitch.jsx'
import Navlink from './Navlink.jsx'

const NavContent = ({ isOpen }) => {
  const { cart } = useCartContext()
  const { isLight } = useThemeContext()

  return (
    <div
      className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
        isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
      }`}
    >
      <div
        className={`flex flex-col -mx-6 ${
          isLight ? '*:text-stone-800' : '*:text-white'
        } lg:flex-row lg:items-center lg:mx-8`}
      >
        <Navlink to='/'>Home</Navlink>
        <Navlink to='/dashboard'>Dashboard</Navlink>
        <Navlink to='/orders'>Orders</Navlink>
        <Navlink to='/products'>Products</Navlink>
        <DarkModeSwitch />
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
              <div className='rounded-full bg-blue-400 text-white text-xs absolute top-3 flex justify-center items-center left-3 size-5'>
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
      <CartDrawer>
        <div
          className={`block transition-colors duration-300 transform lg:hidden  relative right-4 ${
            isLight ? 'text-stone-800' : '!text-white'
          } focus:outline-none`}
          aria-label='show notifications'
        >
          <ImCart className={`text-2xl `} />
          {cart.length ? (
            <div className='rounded-full bg-green-400 absolute top-3 left-3 size-5'>
              {cart.length}
            </div>
          ) : null}
        </div>
      </CartDrawer>
    </div>
  )
}
export default NavContent
