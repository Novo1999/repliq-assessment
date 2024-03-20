import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

const AnimatedOutlet = () => {
  const o = useOutlet()
  const [outlet] = useState(o)

  // need a frozen outlet so the page transition can work with createBrowserRouter
  return <>{outlet}</>
}

const AnimatedOutletFinal = () => {
  // the pathname will be the key of the outlet div
  const location = useLocation()
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div
        key={location.pathname}
        exit={{
          opacity: 0,
          x: 100,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        }}
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedOutletFinal
