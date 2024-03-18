import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CUSTOMERS_URL } from '../../constants.js'

const getCustomers = async () => {
  try {
    const data = await axios.get(CUSTOMERS_URL)
    return data
  } catch (error) {
    return error
  }
}

const useGetCustomers = () => {
  const query = useQuery({ queryKey: ['customers'], queryFn: getCustomers })

  return query
}
export default useGetCustomers
