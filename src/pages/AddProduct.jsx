import { useEffect } from 'react'
import EmptyResponse from '../components/misc/EmptyResponse.jsx'
import Error from '../components/misc/Error.jsx'
import AdminPageProducts from '../components/Product/AdminPageProducts.jsx'
import ProductForm from '../components/ui/ProductForm.jsx'
import useGetProducts from '../hooks/api/useGetProducts.js'
import useProductContext from '../hooks/useProductContext.js'

const AddProduct = () => {
  const { isLoading, isError, error, data: { data } = {} } = useGetProducts()
  const { products, setProducts } = useProductContext()

  // set product context on load
  useEffect(() => {
    if (!isLoading && !isError && data?.length > 0) {
      setProducts(data)
    }
  }, [data, isError, isLoading, setProducts])
  let content = null

  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <Error error={error} message='Could not get products' />
  }

  if (!isLoading && !isError && products?.length === 0) {
    content = <EmptyResponse message='No products found' />
  }

  if (products?.length > 0) {
    content = <AdminPageProducts data={products} />
  }

  return (
    <main className='flex bg-white min-h-screen flex-col items-center lg:items-start pb-20 lg:flex-row font-poppins justify-evenly p-10'>
      <div className='mt-32'>{content}</div>
      <ProductForm products={products} />
    </main>
  )
}
export default AddProduct
