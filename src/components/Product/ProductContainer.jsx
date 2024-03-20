import useThemeContext from '../../hooks/useThemeContext.js'

const ProductContainer = ({ children }) => {
  const { isLight } = useThemeContext()
  return (
    <section
      className={`mx-10 ${
        isLight ? 'bg-white' : 'bg-stone-800 border-2 shadow-white shadow-lg'
      } min-h-[80vh] rounded-lg p-4`}
    >
      {children}
    </section>
  )
}
export default ProductContainer
