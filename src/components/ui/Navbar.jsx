import { useState } from 'react'
import { ImCart } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
import useCartContext from '../../hooks/useCartContext.js'
import CartDrawer from '../Cart/CartDrawer.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const { cart, setCart } = useCartContext()

  return (
    <nav className='fixed z-[999] w-full bg-white shadow-lg'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <p className='text-slate-700 text-3xl font-bold font-poppins'>
              Repliq E-commerce
            </p>
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
              <NavLink
                to='/dashboard'
                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 -700'
              >
                Dashboard
              </NavLink>
              <NavLink
                to='/customers'
                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 -700'
              >
                Customers
              </NavLink>
              <NavLink
                to=''
                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 -700'
              >
                Products
              </NavLink>
              <NavLink
                to='/products'
                className='px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100 -700'
              >
                Experts
              </NavLink>
            </div>
            <div className='items-center mt-4 lg:mt-0 hidden lg:flex'>
              <CartDrawer>
                <div
                  className='hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700 focus:text-gray-700 focus:outline-none'
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
