import { useState } from 'react'
import CustomerModal from './CustomerModal.jsx'

const CustomerCard = ({ customer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <tr key={customer.id}>
      <td className='px-6 py-4 whitespace-nowrap text-blue-500 cursor-pointer'>
        <span onClick={() => setIsModalOpen(true)}>
          <div className='tooltip tooltip-info' data-tip='View Details'>
            {customer.name}
          </div>
        </span>

        <CustomerModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          customer={customer}
        />
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-purple-500'>
        {customer.email}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-green-600'>
        {customer.address}
      </td>
    </tr>
  )
}
export default CustomerCard