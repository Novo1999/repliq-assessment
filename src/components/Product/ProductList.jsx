import useGetProducts from '../../hooks/api/useGetProducts.js'
import EmptyResponse from '../misc/EmptyResponse.jsx'
import Error from '../misc/Error.jsx'
import ProductSkeleton from '../misc/ProductSkeleton.jsx'
import Product from './Product.jsx'

const ProductList = () => {
  const { data: { data } = {}, isLoading, isError, error } = useGetProducts()

  let content = null

  if (isLoading) {
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {/* showing 10 skeletons by default */}
        {Array.from({ length: 10 }).map((_, index) => {
          return <ProductSkeleton key={index} />
        })}
      </div>
    )
  }

  if (!isLoading && isError) {
    content = <Error error={error} message='Could not get products' />
  }

  if (!isLoading && !isError && data.length === 0) {
    content = <EmptyResponse message='No products found' />
  }

  if (data?.length > 0) {
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10'>
        {data?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    )
  }

  return <section>{content}</section>
}
export default ProductList
