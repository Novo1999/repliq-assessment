import { Table } from 'antd'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import useGetCheckout from '../hooks/api/useGetCheckout.js'
import useThemeContext from '../hooks/useThemeContext.js'

const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'customerName',
    key: 'customerName',
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Payment Method',
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
  },
]

function Checkout() {
  const { isLight } = useThemeContext()
  const { data: { data } = {}, isLoading, isError } = useGetCheckout()
  let content = null

  if (isLoading) {
    content = (
      <div>
        <div className='min-h-[80vh] flex justify-center items-center'>
          <AiOutlineLoading3Quarters className='animate-spin' />
        </div>
      </div>
    )
  }

  if (!isLoading && isError) {
    content = <p className='text-red-400'>Error Getting Checkouts</p>
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <p className='text-blue-400'>No Checkouts</p>
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <div className='container mx-auto mt-40 font-poppins'>
        <h1 className='text-2xl font-bold mb-4'>Checkout View</h1>
        <Table
          className={`${isLight ? '' : 'custom-table'}`}
          pagination={false}
          dataSource={data}
          columns={columns}
        />
      </div>
    )
  }
  return content
}

export default Checkout
