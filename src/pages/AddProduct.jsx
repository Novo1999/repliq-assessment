import EmptyResponse from '../components/misc/EmptyResponse.jsx'
import Error from '../components/misc/Error.jsx'
import AdminPageProducts from '../components/Product/AdminPageProducts.jsx'
import ProductForm from '../components/ui/ProductForm.jsx'
import useGetProducts from '../hooks/api/useGetProducts.js'

const AddProduct = () => {
  const { data: { data } = {}, isLoading, isError, error } = useGetProducts()

  let content = null

  if (isLoading) {
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        Loading...
      </div>
    )
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
    <main className='flex bg-white min-h-screen pb-20'>
      <div className='mt-24'>{content}</div>
      <ProductForm />
    </main>
  )
}
export default AddProduct
