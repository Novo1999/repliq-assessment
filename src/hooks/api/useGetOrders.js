import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ORDERS_URL } from '../../constants.js'

const getOrders = async () => {
  try {
    const data = await axios.get(ORDERS_URL)
    return data
  } catch (error) {
    return error
  }
}

const useGetOrders = () => {
  const query = useQuery({ queryKey: ['orders'], queryFn: getOrders })

  return query
}
export default useGetOrders
