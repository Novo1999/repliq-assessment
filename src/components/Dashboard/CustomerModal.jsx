import { Modal } from 'antd'
import Avatar from '../../assets/avatar.png'

const CustomerModal = ({ isModalOpen, setIsModalOpen, children, customer }) => {
  const { name, email, address } = customer
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
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className='bg-white rounded-md p-6 flex flex-col sm:flex-row justify-center items-center gap-10'>
          <div>
            <img className='size-fit' src={Avatar} alt='avatar' />
          </div>
          <div className='font-poppins'>
            <div className='text-lg font-bold mb-4'>{name}</div>
            <div className='text-blue-500 mb-2'>{email}</div>
            <div className='text-green-600'>{address}</div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CustomerModal
