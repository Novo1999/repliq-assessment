import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PRODUCT_URL } from '../../constants.js'

const getProducts = async () => {
  try {
    const data = await axios.get(PRODUCT_URL)
    return data
  } catch (error) {
    return error
  }
}

const useGetProducts = () => {
  const query = useQuery({ queryKey: ['products'], queryFn: getProducts })

  return query
}
export default useGetProducts
