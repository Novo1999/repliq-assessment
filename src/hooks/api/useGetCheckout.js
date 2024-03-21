import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { CHECKOUT_URL } from '../../constants.js'

const getCheckout = async () => {
  try {
    const data = await axios.get(CHECKOUT_URL)
    return data
  } catch (error) {
    return error
  }
}

const useGetCheckout = () => {
  const query = useQuery({ queryKey: ['checkouts'], queryFn: getCheckout })

  return query
}
export default useGetCheckout
