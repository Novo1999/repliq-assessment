import { useContext } from 'react'
import { ThemeContext } from '../context/index.js'

const useThemeContext = () => {
  return useContext(ThemeContext)
}
export default useThemeContext
