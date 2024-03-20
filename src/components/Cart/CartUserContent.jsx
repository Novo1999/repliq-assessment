import { motion } from 'framer-motion'
import { useState } from 'react'
import Avatar from '../../assets/avatar.png'
import useGetCustomers from '../../hooks/api/useGetCustomers.js'
import useThemeContext from '../../hooks/useThemeContext.js'
import CartModal from '../Modals/CartModal.jsx'

const CartUserContent = ({ customer }) => {
  const [selectedCustomer, setSelectedCustomer] = useState()
  const { isLight } = useThemeContext()
  const [isModalOpen, setIsModalOpen] = useState()
  const { data: { data: customerData } = {} } = useGetCustomers() // api call to get customer data

  // get only the name from the customer data
  const name = customerData?.find(
    (customer) => customer.id === selectedCustomer?.userId
  )?.name

  return (
    <motion.div
      onClick={() => setSelectedCustomer(customer)}
      whileHover={{ scale: 1.05 }}
      key={customer.userId}
      className='flex items-center flex-col justify-center font-poppins gap-2 cursor-pointer'
    >
      <CartModal
        customerName={name}
        selectedCustomer={selectedCustomer}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      >
        <img className='size-20' src={Avatar} alt='avatar' />
        <p className={`${isLight ? 'text-black' : 'text-white'}`}>
          {customerData?.find((item) => item.id === customer.userId).name}
        </p>
      </CartModal>
    </motion.div>
  )
}
export default CartUserContent
