import { motion } from 'framer-motion'
import useCategoryContext from '../../hooks/useCategoryContext.js'
import useDropdownAnimation from '../../hooks/useDropdownAnimation.js'
import useFilter from '../../hooks/useFilter.js'
import useProductContext from '../../hooks/useProductContext.js'
import MenuListItem from '../ui/MenuListItem.jsx'

const FilterProducts = ({ isOpen, setIsOpen }) => {
  const { products } = useProductContext()
  const scope = useDropdownAnimation(isOpen, products)
  const { categories, isFiltering, category } = useCategoryContext()
  // custom hook to handle filter
  const { handleCancelFilter, handleChangeFilter, menuRef } = useFilter(
    isOpen,
    setIsOpen
  )

  return (
    <div className='flex'>
      {/* show cancel filter button when user filters */}
      {isFiltering && (
        <button
          onClick={handleCancelFilter}
          className='btn btn-circle btn-outline mt-1 hover:bg-blue-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      )}
      <nav
        className='menu'
        ref={scope}
        // when click on the menu it would not open so we need to stop propagation here
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
      >
        <div />
        <motion.button
          className='bg-sky-500 text-white font-bold rounded-lg flex justify-between h-10 p-3'
          whileTap={{ scale: 0.97 }}
        >
          {category || 'Filter By'}
          <div className='arrow' style={{ transformOrigin: '50% 55%' }}>
            <svg width='15' height='15' viewBox='0 0 20 20' fill='white'>
              <path d='M0 7 L 20 7 L 10 16' />
            </svg>
          </div>
        </motion.button>
        <ul
          ref={menuRef}
          className='mt-3 flex flex-col gap-[1px] w-60 border rounded-lg shadow-md'
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
          }}
        >
          {categories?.map((cat) => (
            <MenuListItem onClick={() => handleChangeFilter(cat)} key={cat}>
              {cat}
            </MenuListItem>
          ))}
        </ul>
      </nav>
    </div>
  )
}
export default FilterProducts
