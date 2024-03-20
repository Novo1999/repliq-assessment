import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import OrderContent from '../components/Order/OrderContent.jsx'
import Loader from '../components/ui/Loader.jsx'
import useGetOrders from '../hooks/api/useGetOrders.js'
import { setOrderStatsBg } from '../utils/setOrderStatusBg.js'

const AdminOrderList = () => {
  const { data: { data } = {}, isLoading, isError } = useGetOrders()
  let content = null

  if (isLoading) {
    content = (
      <tr>
        <td className='min-h-[80vh] flex justify-center items-center'>
          <AiOutlineLoading3Quarters className='animate-spin' />
        </td>
      </tr>
    )
  }

  if (!isLoading && isError) {
    content = <p className='text-red-400'>Error Getting Orders</p>
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <p className='text-blue-400'>No orders</p>
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = data?.map((order) => (
      <tr key={order.id}>
        <td className='px-6 py-4 whitespace-nowrap text-black'>{order.id}</td>
        <td className='px-6 py-4 whitespace-nowrap text-black'>
          {order.customerName}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-black'>
          $ {order.totalAmount}
        </td>
        <td className='px-6 py-4 whitespace-nowrap text-black'>
          <p
            className={`${setOrderStatsBg(
              order
            )} text-center text-white w-full p-1`}
          >
            {order.status}
          </p>
        </td>
        <OrderContent order={order} />
      </tr>
    ))
  }

  return (
    <motion.div
      exit={{ x: '-100vw', transition: { ease: 'easeInOut', duration: 1 } }}
    >
      {isLoading ? (
        <div className='bg-white *:text-7xl flex justify-center items-center min-h-screen'>
          <Loader />
        </div>
      ) : (
        <div className='container mx-auto px-4 py-8 font-poppins'>
          <h1 className='text-3xl font-semibold mb-4'>Admin Order List</h1>
          {data?.length === 0 ? (
            <p className='text-gray-600'>No orders available</p>
          ) : (
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Order ID
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Customer Name
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Total Amount
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {content}
              </tbody>
            </table>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default AdminOrderList
