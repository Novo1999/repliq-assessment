import { useEffect } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useGetCustomers from '../../hooks/api/useGetCustomers.js'
import useCustomerContext from '../../hooks/useCustomer.js'
import Error from '../misc/Error.jsx'
import CustomerCard from './CustomerCard.jsx'

const Customers = () => {
  const {
    data: { data: customerData } = {},
    isLoading: customerLoading,
    isError: customerError,
  } = useGetCustomers()

  const { setCustomer, customer } = useCustomerContext()
  // set the customers on load
  useEffect(() => {
    if (!customerLoading && !customerError && customerData?.length > 0) {
      setCustomer(customerData)
    }
  }, [customerData, customerError, customerLoading, setCustomer])

  let content = null

  if (customerLoading) {
    content = (
      <tr>
        <td>
          <AiOutlineLoading3Quarters className='animate-spin' />
        </td>
      </tr>
    )
  }

  if (!customerLoading && customerError) {
    content = <p className='text-red-400'>Error Getting customers</p>
  }

  if (!customerLoading && !customerError && customerData?.length === 0) {
    content = (
      <Error error={customerError} message='Could not get customers list' />
    )
  }

  if (!customerLoading && !customerError && customerData?.length > 0) {
    content = customer.map((customer) => {
      return <CustomerCard customer={customer} key={customer.id} />
    })
  }
  return content
}
export default Customers
