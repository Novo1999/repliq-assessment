import EmptyResponse from '../components/misc/EmptyResponse.jsx'
import Error from '../components/misc/Error.jsx'
import AdminPageProducts from '../components/Product/AdminPageProducts.jsx'
import ProductForm from '../components/ui/ProductForm.jsx'
import useGetProducts from '../hooks/api/useGetProducts.js'

const AddProduct = () => {
  const { data: { data } = {}, isLoading, isError, error } = useGetProducts()

  let content = null

  if (isLoading) {
    content = <div>Loading...</div>
  }

  if (!isLoading && isError) {
    content = <Error error={error} message='Could not get products' />
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse message='No products found' />
  }

  if (data?.length > 0) {
    content = <AdminPageProducts data={data} />
  }

  return (
    <main className='flex bg-white min-h-screen flex-col items-center lg:items-start pb-20 lg:flex-row font-poppins justify-evenly p-10'>
      <div className='mt-32'>{content}</div>
      <ProductForm products={data} />
    </main>
  )
}
export default AddProduct
