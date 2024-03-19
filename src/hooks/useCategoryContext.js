import { useContext } from 'react'
import { CategoryContext } from '../context/index.js'

const useCategoryContext = () => {
  return useContext(CategoryContext)
}
export default useCategoryContext
