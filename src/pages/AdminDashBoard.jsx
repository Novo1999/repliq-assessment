import { useState } from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMdAddCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import CustomerFormModal from '../components/Dashboard/CustomerFormModal.jsx'
import Customers from '../components/Dashboard/Customers.jsx'
import PriceChart from '../components/Dashboard/PriceChart.jsx'
import useGetProducts from '../hooks/api/useGetProducts.js'

const AdminDashboard = () => {
  const { data: { data } = {}, isLoading, isError } = useGetProducts()
  const [customerModalOpen, setCustomerModalOpen] = useState(false)

  let productLength = null

  if (isLoading) {
    productLength = <AiOutlineLoading3Quarters className='animate-spin' />
  }

  if (!isLoading && isError) {
    productLength = <p className='text-red-400'>Error Getting Total Products</p>
  }

  if (!isLoading && !isError && data.length === 0) {
    productLength = <p className='text-blue-400'>No Products</p>
  }

  if (data?.length > 0) {
    productLength = data.length
  }

  return (
    <div className='min-h-screen bg-gray-100 font-poppins'>
      {/* Header */}
      <header className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <h1 className='text-xl font-semibold text-gray-900'>
            Admin Dashboard
          </h1>
          <nav>
            <Link
              to='/admin/products'
              className='text-gray-500 hover:text-gray-700 hover:underline ml-4'
            >
              Products
            </Link>
            {/* Add more navigation links as needed */}
          </nav>
        </div>
      </header>

      {/* Main productLength */}
      <main className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
        <PriceChart products={data} />
        <div className='px-4 py-6 sm:px-0'>
          {/* Dashboard Cards */}
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Card 1 */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-lg font-semibold mb-2'>Total Products</h2>
              <div className='text-3xl font-bold text-gray-800'>
                {productLength}
              </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h2 className='text-lg font-semibold mb-2'>Total Orders</h2>
              <div className='text-3xl font-bold text-gray-800'>50</div>
            </div>
            {/* Add more cards for different metrics */}
          </div>

          <div className='mt-8'>
            <div className='flex justify-between mb-4'>
              <h2 className='text-lg font-semibold mb-4'>Customers</h2>
              {/* add customer */}
              <CustomerFormModal
                isModalOpen={customerModalOpen}
                setIsModalOpen={setCustomerModalOpen}
              >
                <button
                  onClick={() => setCustomerModalOpen(true)}
                  className='btn btn-info'
                >
                  <IoMdAddCircle />
                  <p>Add Customer</p>
                </button>
              </CustomerFormModal>
            </div>
            <div className='bg-white rounded-lg shadow-md overflow-x-auto'>
              <table className='min-w-full divide-y divide-gray-200'>
                {/* Table header */}
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Name
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Email
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Address
                    </th>
                  </tr>
                </thead>
                {/* Table body (Sample data, replace with actual orders data) */}
                <tbody className='bg-white divide-y divide-gray-200'>
                  <Customers />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard