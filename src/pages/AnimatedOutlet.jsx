import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'

const AnimatedOutlet = () => {
  const o = useOutlet()
  const [outlet] = useState(o)

  return <>{outlet}</>
}

const AnimatedOutletFinal = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='popLayout'>
      <motion.div key={location.pathname} exit={{ opacity: 0, x: 50 }}>
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  )
}

export default AnimatedOutletFinal
