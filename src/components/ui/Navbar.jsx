import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiTwotoneShop } from 'react-icons/ai'
import { ImCart } from 'react-icons/im'
import { Link } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext.js'
import useCartContext from '../../hooks/useCartContext.js'
import CartDrawer from '../Cart/CartDrawer.jsx'
import DarkModeSwitch from './DarkModeSwitch.jsx'
import Navlink from './Navlink.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCartContext()

  const {
    user: { accessToken },
  } = useAuthContext()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed z-[99] w-full top-0 bg-white shadow-lg font-poppins'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <motion.div
              initial={{ y: -10 }}
              animate={{
                y: [10, -10],
                transition: {
                  repeatType: 'reverse',
                  repeat: Infinity,
                  duration: 1,
                },
              }}
            >
              <AiTwotoneShop className='text-5xl text-black' />
            </motion.div>
            <Link
              to='/'
              className='text-slate-700 text-3xl font-bold font-poppins'
            >
              Repliq E-commerce
            </Link>
            <div className='flex lg:hidden'>
              <button
                onClick={toggleMenu}
                type='button'
                className='text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600'
                aria-label='toggle menu'
              >
                {!isOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 8h16M4 16h16'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? 'translate-x-0 opacity-100'
                : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'>
              <Navlink to='/'>Home</Navlink>
              <Navlink to='/dashboard'>Dashboard</Navlink>
              <Navlink to='/orders'>Orders</Navlink>
              <Navlink to='/products'>Products</Navlink>
              <DarkModeSwitch />
            </div>
            <div className='items-center mt-4 lg:mt-0 hidden lg:flex'>
              <CartDrawer>
                <div
                  className='hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700 focus:text-gray-700 focus:outline-none'
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
                className='block text-gray-600 transition-colors duration-300 transform lg:hidden hover:text-gray-700 relative right-4 focus:text-gray-700 focus:outline-none'
                aria-label='show notifications'
              >
                <ImCart className='text-2xl' />
                {cart.length ? (
                  <div className='rounded-full bg-green-400 absolute top-3 left-3 size-5'>
                    {cart.length}
                  </div>
                ) : null}
              </div>
            </CartDrawer>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
