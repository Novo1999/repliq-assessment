import { useEffect, useRef } from 'react'
import useGetProducts from './api/useGetProducts.js'
import useCategoryContext from './useCategoryContext.js'
import useProductContext from './useProductContext.js'

const useFilter = (isOpen, setIsOpen) => {
  const menuRef = useRef(null)

  const { setProducts } = useProductContext()
  const { data: { data } = {} } = useGetProducts()
  const { setIsFiltering, setCategory } = useCategoryContext()

  const handleChangeFilter = (category) => {
    if (category) {
      setCategory(category)
      setIsFiltering(true)
      window.scroll({ top: 200, behavior: 'smooth' })
    }
    setProducts(() => {
      return data.filter((product) => product.category === category)
    })
  }

  const handleCancelFilter = () => {
    setProducts(data)
    setIsFiltering(false)
    setCategory('')
  }

  // close filter dropdown menu when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [setIsOpen, isOpen])

  return { handleCancelFilter, handleChangeFilter, menuRef }
}
export default useFilter
