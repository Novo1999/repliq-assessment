import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoMdAddCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import PriceChart from '../components/Dashboard/PriceChart.jsx'
import Error from '../components/misc/Error.jsx'
import useGetCustomers from '../hooks/api/useGetCustomers.js'
import useGetProducts from '../hooks/api/useGetProducts.js'

const AdminDashboard = () => {
  const { data: { data } = {}, isLoading, isError } = useGetProducts()
  const {
    data: { data: customerData } = {},
    isLoading: customerLoading,
    isError: customerError,
  } = useGetCustomers()

  let productLength = null
  let customers = null

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

  if (!customerLoading && !customerError && customerData.length === 0) {
    customers = (
      <Error error={customerError} message='Could not get customers list' />
    )
  }

  if (customerData?.length > 0) {
    customers = customerData.map(({ name, email, id, address }) => {
      return (
        <tr key={id}>
          <td className='px-6 py-4 whitespace-nowrap'>{name}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{email}</td>
          <td className='px-6 py-4 whitespace-nowrap'>{address}</td>
        </tr>
      )
    })
  }

  return (
    <div className='min-h-screen bg-gray-100'>
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
              <button className='btn btn-info'>
                <IoMdAddCircle />
                <p>Add Customer</p>
              </button>
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
                  {customers}
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
