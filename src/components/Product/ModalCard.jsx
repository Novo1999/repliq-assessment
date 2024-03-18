import ProductImg from '../../assets/product.jpeg'
import useCartContext from '../../hooks/useCartContext.js'
import useQuantity from '../../hooks/useQuantity.js'
import handleAddToCart from '../../utils/handleAddToCart.js'

const ModalCard = ({ product }) => {
  const { productQuantity, setProductQuantity } = useQuantity()
  const { id, category, description, name, price, rating } = product
  const hasQuantity = productQuantity.find((item) => item.id === id)
  const { setCart } = useCartContext()
  const ADD_CART_PARAMETERS = {
    setCart,
    id,
    productQuantity,
    product,
    setProductQuantity,
    name,
  }

  return (
    <div className='flex w-full flex-col md:flex-row overflow-hidden bg-white rounded-lg h-fit font-poppins'>
      <div className='w-fit sm:w-48'>
        <img src={ProductImg} alt='product' />
      </div>
      <div className='p-4 md:p-4'>
        <h1 className='text-xl font-bold text-gray-800'>{name}</h1>
        <p className='mt-2 text-sm text-gray-600 '>{description}</p>
        <div className='flex mt-2 item-center justify-between'>
          <div className='flex'>
            {Array.from({ length: rating }).map((_, index) => (
              <svg
                key={index}
                className='w-5 h-5 text-gray-700 fill-current '
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
            ))}
          </div>
          <div className='text-md rounded-xl p-1 text-black bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer'>
            {category}
          </div>
        </div>
        <div className='flex justify-between mt-3 item-center'>
          <h1 className='text-lg font-bold text-gray-700 md:text-xl'>
            ${price}
          </h1>
          {hasQuantity && (
            <button
              onClick={() => handleAddToCart(ADD_CART_PARAMETERS)}
              className='p-4 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600'
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default ModalCard
