import { Input } from 'antd'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import useGetProducts from '../../hooks/api/useGetProducts.js'
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js'
import useProductContext from '../../hooks/useProductContext.js'
import EmptyResponse from '../misc/EmptyResponse.jsx'
import Error from '../misc/Error.jsx'
import ProductSkeleton from '../misc/ProductSkeleton.jsx'
import Loader from '../ui/Loader.jsx'
import FilterProducts from './FilterProducts.jsx'
import Product from './Product.jsx'

const { Search } = Input

const onSearch = (value) => {
  console.log(value)
}

const ProductList = () => {
  const { data: { data } = {}, isLoading, isError, error } = useGetProducts()
  const { loaderRef, limit, hasMore } = useIntersectionObserver(data)
  const { setProducts, products } = useProductContext()
  const [isOpen, setIsOpen] = useState(false)

  // set product context on load
  useEffect(() => {
    if (!isLoading && !isError && data?.length > 0) {
      setProducts(data)
    }
  }, [data, isError, isLoading, setProducts])

  let content = null

  if (isLoading) {
    content = (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {/* showing 10 skeletons by default */}
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <motion.div
              key={index}
              layout
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <ProductSkeleton />
            </motion.div>
          )
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
        <div className='flex justify-between mx-10 flex-col items-center sm:items-start sm:flex-row'>
          <Search
            className='w-fit bg-blue-500 rounded-md mt-2'
            placeholder='input search text'
            onSearch={onSearch}
            enterButton
          />
          <FilterProducts isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-10 pb-40 ${
            isOpen ? 'mt-0' : '-mt-80'
          }`}
        >
          {/* show 10 products initially and load more as user scrolls */}
          {products?.slice(0, limit).map((product) => (
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
