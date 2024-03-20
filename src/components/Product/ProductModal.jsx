import { Modal } from 'antd'
import useThemeContext from '../../hooks/useThemeContext.js'
import ModalCard from './ModalCard.jsx'

const ProductModal = ({ isModalOpen, setIsModalOpen, children, product }) => {
  const { isLight } = useThemeContext()

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
        wrapClassName={` ${isLight ? '' : 'custom-modal'}`}
      >
        <ModalCard setIsModalOpen={setIsModalOpen} product={product} />
      </Modal>
    </>
  )
}

export default ProductModal
