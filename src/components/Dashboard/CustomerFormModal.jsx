import { Modal } from 'antd'
import CustomerForm from './CustomerForm.jsx'

const CustomerFormModal = ({ isModalOpen, setIsModalOpen, children }) => {
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
        <div className='bg-white rounded-md p-6 flex flex-col sm:flex-row justify-center items-center gap-10 font-poppins'>
          <div>
            <div className='text-center text-xl'>
              <p>Add Customer details</p>
            </div>
            <CustomerForm />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CustomerFormModal
