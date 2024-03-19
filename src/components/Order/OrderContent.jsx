import { useState } from 'react'
import OrderModal from './OrderModal.jsx'

const OrderContent = ({ order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <td className='px-6 py-4 whitespace-nowrap text-black flex'>
      <OrderModal
        order={order}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <button className='btn btn-info mr-2'>View Details</button>
      </OrderModal>
      <button className='btn btn-danger'>Delete</button>
    </td>
  )
}
export default OrderContent
