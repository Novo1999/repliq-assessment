import { Modal } from 'antd'
import ModalCard from './ModalCard.jsx'

const ProductModal = ({ isModalOpen, setIsModalOpen, children, product }) => {
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
        <ModalCard product={product} />
      </Modal>
    </>
  )
}

export default ProductModal
