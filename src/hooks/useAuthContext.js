import { useContext } from 'react'
import { AuthContext } from '../context/index.js'

const useAuthContext = () => {
  return useContext(AuthContext)
}
export default useAuthContext
