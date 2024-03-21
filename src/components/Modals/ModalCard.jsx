import useGetProducts from '../../hooks/api/useGetProducts.js'
import useCategoryContext from '../../hooks/useCategoryContext.js'
import useProductContext from '../../hooks/useProductContext.js'
import useThemeContext from '../../hooks/useThemeContext.js'

const ModalCard = ({ product, setIsModalOpen }) => {
  const { data: { data } = {} } = useGetProducts()
  const { setProducts } = useProductContext()
  const { setIsFiltering, setCategory } = useCategoryContext()
  const { category, description, name, price, rating, imageURL } = product
  const { isLight } = useThemeContext()

  const handleChangeCategory = (category) => {
    if (category) {
      setCategory(category)
      setIsFiltering(true)
      window.scroll({ top: 200, behavior: 'smooth' })
    }
    setProducts(() => {
      return data.filter((product) => product.category === category)
    })
    setIsModalOpen(false)
  }

  return (
    <div className='flex w-full flex-col md:flex-row overflow-hidden rounded-lg h-fit font-poppins pt-6'>
      <div className='w-fit sm:w-48'>
        <img src={imageURL} alt='product' />
      </div>
      <div
        className={`p-4 md:p-4 ${isLight ? 'text-stone-800' : 'text-white'}`}
      >
        <h1 className='text-xl font-bold'>{name}</h1>
        <p className='mt-2 text-sm'>{description}</p>
        <div className='flex mt-2 item-center justify-between'>
          <div className='flex'>
            {Array.from({ length: rating }).map((_, index) => (
              <svg
                key={index}
                className='w-5 h-5 fill-current'
                viewBox='0 0 24 24'
              >
                <path d='M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z' />
              </svg>
            ))}
          </div>
          <div
            onClick={() => {
              handleChangeCategory(category)
            }}
            className='text-md rounded-xl p-1 text-black bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer'
          >
            {category}
          </div>
        </div>
        <div className='flex justify-between mt-3 item-center'>
          <h1 className='text-lg font-bold  md:text-xl'>${price}</h1>
        </div>
      </div>
    </div>
  )
}
export default ModalCard
