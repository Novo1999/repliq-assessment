import { useState } from 'react'
import { CustomerContext } from '../context/index.js'

const CustomerProvider = ({ children }) => {
  const [customer, setCustomer] = useState([])

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {children}
    </CustomerContext.Provider>
  )
}
export default CustomerProvider
