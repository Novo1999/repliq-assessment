import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import ProductImg from '../../assets/product.jpeg'

const { Meta } = Card

const Product = ({ product }) => {
  const { id, category, description, name, price, stock } = product
  return (
    <Card
      className='w-72 xl:w-[400px]'
      cover={<img alt='example' src={ProductImg} />}
      actions={[
        <SettingOutlined key='setting' />,
        <EditOutlined key='edit' />,
        <EllipsisOutlined key='ellipsis' />,
      ]}
    >
      <Meta title={name} description={description} />
    </Card>
  )
}
export default Product
