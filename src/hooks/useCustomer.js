import { useContext } from 'react'
import { CustomerContext } from '../context/index.js'

const useCustomerContext = () => {
  return useContext(CustomerContext)
}
export default useCustomerContext
