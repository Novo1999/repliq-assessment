import { motion } from 'framer-motion'
import useGetProducts from '../../hooks/api/useGetProducts.js'
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js'
import EmptyResponse from '../misc/EmptyResponse.jsx'
import Error from '../misc/Error.jsx'
import ProductSkeleton from '../misc/ProductSkeleton.jsx'
import Loader from '../ui/Loader.jsx'
import Product from './Product.jsx'

const ProductList = () => {
  const { data: { data } = {}, isLoading, isError, error } = useGetProducts()
  const { loaderRef, limit, hasMore } = useIntersectionObserver(data)

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

  if (!isLoading && !isError && data?.length === 0) {
    content = <EmptyResponse message='No products found' />
  }

  if (data?.length > 0) {
    content = (
      <>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 pb-40'>
          {data?.slice(0, limit).map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'tween', duration: 0.2 }}
            >
              <Product product={product} />
            </motion.div>
          ))}
        </div>
        {hasMore && (
          <div
            ref={loaderRef}
            className='flex justify-center relative bottom-20'
          >
            <Loader />
          </div>
        )}
        {!hasMore && (
          <>
            <p className='relative bottom-20 text-center'>End of list</p>
            <hr className='relative bottom-16 w-60 m-auto' />
          </>
        )}
      </>
    )
  }

  return <section>{content}</section>
}
export default ProductList
