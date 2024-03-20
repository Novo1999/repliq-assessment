import { motion } from 'framer-motion'
import { useState } from 'react'
import { AiTwotoneShop } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import useAuthContext from '../../hooks/useAuthContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'
import NavContent from './NavContent.jsx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { isLight } = useThemeContext()

  const {
    user: { accessToken },
  } = useAuthContext()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`fixed z-[99] w-full top-0 ${
        isLight ? 'bg-white' : 'bg-stone-800'
      } shadow-lg font-poppins`}
    >
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
              <AiTwotoneShop
                className={`text-5xl ${
                  isLight ? 'text-stone-800' : 'text-white'
                } text-black`}
              />
            </motion.div>
            <Link
              to='/'
              className={`text-slate-700 ${
                isLight ? 'text-stone-800' : 'text-white'
              } text-xl sm:text-2xl font-bold font-poppins`}
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
          <NavContent isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
