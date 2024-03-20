import { useState } from 'react'
import useDebounce from '../../hooks/useDebounce.js'
import useProductContext from '../../hooks/useProductContext.js'

const Search = ({ productsData }) => {
  const [inputValue, setInputValue] = useState('')
  const { setProducts } = useProductContext()

  const handleChange = (e) => {
    const value = e.target.value
    setInputValue(value)
    searchProducts(value)
  }

  // debounce the search, add delay of 300 ms
  const searchProducts = useDebounce((value) => {
    setProducts(
      productsData.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    )
  }, 300)

  return (
    <label className='input input-info input-bordered flex items-center text-white gap-2'>
      <input
        value={inputValue}
        type='text'
        onChange={handleChange}
        className='grow'
        placeholder='Search'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='w-4 h-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  )
}

export default Search
