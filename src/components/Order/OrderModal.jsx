import { Modal } from 'antd'
import Avatar from '../../assets/avatar.png'
import useThemeContext from '../../hooks/useThemeContext.js'
import { setOrderStatsBg } from '../../utils/setOrderStatusBg.js'

const OrderModal = ({ isModalOpen, setIsModalOpen, children, order }) => {
  const { isLight } = useThemeContext()
  const { customerName, status, totalAmount } = order
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
      <div type='primary' onClick={showModal}>
        {children}
      </div>
      <Modal
        // hiding the ok and cancel button
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        centered
        className={`!w-96 ${!isLight ? 'custom-modal' : ''}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='card w-fit font-poppins m-auto flex flex-col items-center'>
          <figure>
            <img className='size-60' src={Avatar} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2
              className={`card-title ${!isLight ? 'text-white' : 'text-black'}`}
            >
              {customerName}
            </h2>
            <p className={`${setOrderStatsBg(order)} w-fit p-1 text-white`}>
              Status: {status}
            </p>
            <p className='text-blue-500 text-xl'>Amount: ${totalAmount}</p>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default OrderModal
