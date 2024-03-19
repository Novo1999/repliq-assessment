import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const staggerMenuItems = stagger(0.1)

const useDropdownAnimation = (isOpen, products) => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 })

    animate('ul', {
      clipPath: isOpen
        ? 'inset(0% 0% 0% 0% round 10px)'
        : 'inset(10% 50% 90% 50% round 10px)',
    })

    // products need to be available or else app crashes
    if (products?.length) {
      animate(
        'li',
        isOpen
          ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
        {
          duration: 0.2,
          delay: isOpen ? staggerMenuItems : 0,
        }
      )
    }
  }, [isOpen, products])

  return scope
}

export default useDropdownAnimation
