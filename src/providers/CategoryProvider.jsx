import { useState } from 'react'
import { CategoryContext } from '../context/index.js'
import useGetProducts from '../hooks/api/useGetProducts.js'
import getUniqueCategories from '../utils/getUniqueCategories.js'

const CategoryProvider = ({ children }) => {
  const { data: { data } = {} } = useGetProducts()
  const categories = getUniqueCategories(data)
  const [isFiltering, setIsFiltering] = useState(false)

  return (
    <CategoryContext.Provider
      value={{ categories, isFiltering, setIsFiltering }}
    >
      {children}
    </CategoryContext.Provider>
  )
}
export default CategoryProvider
