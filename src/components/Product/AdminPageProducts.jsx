import { Card, Col, Row } from 'antd'
import { motion } from 'framer-motion'
import { AiFillDollarCircle } from 'react-icons/ai'
import ProductImg from '../../assets/product.jpeg'
import { DeleteSVG } from '../ui/SVG.jsx'

const AdminPageProducts = ({ data }) => {
  return (
    <div className='flex flex-col ml-48 gap-4'>
      {data?.map(({ id, name, category, description, price, rating }) => (
        <Row key={id} gutter={16}>
          <Col span={8}>
            <Card
              title={
                <div className='flex justify-between'>
                  <p>{name}</p>
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                  >
                    <DeleteSVG />
                  </motion.div>
                </div>
              }
              className='w-96 bg-teal-500 text-white'
              bordered={false}
            >
              <div className='flex gap-4 items-center'>
                <img
                  src={ProductImg}
                  className='size-24 rounded-md'
                  alt='product-image'
                />
                <div>
                  <div className='badge badge-info'>{category}</div>
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
          </Col>
        </Row>
      ))}
    </div>
  )
}
export default AdminPageProducts
