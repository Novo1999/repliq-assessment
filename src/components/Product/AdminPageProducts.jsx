import { Card, Col, FloatButton, Row } from 'antd'
import { AnimatePresence, motion } from 'framer-motion'
import {
  AiFillCheckCircle,
  AiFillDelete,
  AiFillDollarCircle,
} from 'react-icons/ai'
import ProductImg from '../../assets/product.jpeg'
import useIntersectionObserver from '../../hooks/useIntersectionObserver.js'
import useProductContext from '../../hooks/useProductContext.js'
import Loader from '../ui/Loader.jsx'

const AdminPageProducts = ({ data }) => {
  const { limit, hasMore, loaderRef } = useIntersectionObserver(data)
  const { setProducts, products } = useProductContext()

  const handleDelete = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    )
  }

  return (
    <div className='flex flex-col gap-4'>
      <p>{products.length} Products</p>
      <AnimatePresence>
        {data
          ?.slice(0, limit)
          .map(
            ({ id, name, category, description, price, rating, imageURL }) => (
              <Row key={id} gutter={16}>
                <Col span={8}>
                  <motion.div
                    layout
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'tween', duration: 0.2 }}
                  >
                    <Card
                      title={
                        <div className='flex justify-between'>
                          <p>{name}</p>
                          <div>
                            <FloatButton.Group
                              trigger='click'
                              type='primary'
                              style={{
                                position: 'absolute',
                                zIndex: 0,
                                top: 10,
                                right: 10,
                              }}
                              icon={<AiFillDelete />}
                            >
                              <FloatButton
                                icon={<AiFillCheckCircle />}
                                className='bg-red-500'
                                onClick={() => handleDelete(id)}
                              />
                            </FloatButton.Group>
                          </div>
                        </div>
                      }
                      className='w-96 bg-teal-500 text-white'
                      bordered={false}
                    >
                      <div className='flex gap-4 items-center'>
                        <img
                          src={imageURL}
                          className='size-24 rounded-md'
                          alt='product-image'
                        />
                        <div>
                          <div className='badge badge-warning'>{category}</div>
                          <p>{description}</p>
                          <div className='flex'>
                            {Array.from({ length: rating }).map((_, index) => (
                              <svg
                                key={index}
                                className='w-5 h-5 text-yellow-400 fill-current '
                                viewBox='0 0 24 24'
                              >
                                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
                              </svg>
                            ))}
                          </div>
                          <div className='flex items-center gap-2 text-xl'>
                            <AiFillDollarCircle /> {price.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              </Row>
            )
          )}
      </AnimatePresence>
      {hasMore && (
        <div ref={loaderRef} className='flex justify-center'>
          <Loader />
        </div>
      )}
      {!hasMore && (
        <>
          <p className='text-center'>End of list</p>
          <hr className='w-60 m-auto' />
        </>
      )}
    </div>
  )
}
export default AdminPageProducts
