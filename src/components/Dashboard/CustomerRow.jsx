import { useState } from 'react'
import useThemeContext from '../../hooks/useThemeContext.js'
import CustomerModal from '../Modals/CustomerModal.jsx'

const CustomerRow = ({ customer }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isLight } = useThemeContext()

  return (
    <tr
      key={customer.id}
      className={`${isLight ? 'bg-white' : 'bg-stone-800'} text-sm`}
    >
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
      <td className='px-3 sm:px-6 py-4 whitespace-nowrap text-purple-500'>
        {customer.email}
      </td>
      <td className='sm:px-6 py-4 whitespace-nowrap text-green-600 hidden sm:block'>
        {customer.address}
      </td>
    </tr>
  )
}
export default CustomerRow
