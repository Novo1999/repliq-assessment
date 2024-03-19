import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useGetCustomers from '../../hooks/api/useGetCustomers.js'
import Error from '../misc/Error.jsx'
import CustomerModal from './CustomerModal.jsx'

const Customers = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(null)
  const {
    data: { data: customerData } = {},
    isLoading: customerLoading,
    isError: customerError,
  } = useGetCustomers()

  let customers = null

  if (customerLoading) {
    customers = (
      <tr>
        <td>
          <AiOutlineLoading3Quarters className='animate-spin' />
        </td>
      </tr>
    )
  }

  if (!customerLoading && customerError) {
    customers = <p className='text-red-400'>Error Getting customers</p>
  }

  if (!customerLoading && !customerError && customerData?.length === 0) {
    customers = (
      <Error error={customerError} message='Could not get customers list' />
    )
  }

  if (!customerLoading && !customerError && customerData?.length > 0) {
    customers = customerData.map((customer) => {
      return (
        <tr key={customer.id}>
          <td className='px-6 py-4 whitespace-nowrap text-blue-500 cursor-pointer'>
            <span onClick={() => setSelectedCustomerId(customer.id)}>
              {customer.name}
            </span>
            {selectedCustomerId === customer.id && (
              <CustomerModal
                isModalOpen={true}
                setIsModalOpen={() => setSelectedCustomerId(null)}
                customer={customer}
              />
            )}
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-purple-500'>
            {customer.email}
          </td>
          <td className='px-6 py-4 whitespace-nowrap text-green-600'>
            {customer.address}
          </td>
        </tr>
      )
    })
  }
  return customers
}
export default Customers
