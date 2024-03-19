import { Modal } from 'antd'
import Avatar from '../../assets/avatar.png'
import CartItem from './CartItem.jsx'

const CartModal = ({
  isModalOpen,
  setIsModalOpen,
  children,
  selectedCustomer,
  customerName,
}) => {
  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div
        type='primary'
        className='flex items-center flex-col justify-center gap-2'
        onClick={showModal}
      >
        {children}
      </div>
      <Modal
        // hiding the ok and cancel button
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='bg-white rounded-md p-6 flex flex-col sm:flex-row justify-center items-center gap-10'>
          <div>
            <img className='size-12' src={Avatar} alt='avatar' />
          </div>
          <p>{customerName}</p>
        </div>
        <div>
          <CartItem
            key={selectedCustomer?.userId}
            selectedCustomer={selectedCustomer}
          />
        </div>
      </Modal>
    </>
  )
}

export default CartModal
