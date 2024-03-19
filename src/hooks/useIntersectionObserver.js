import { useEffect, useRef, useState } from 'react'
import { delay } from '../utils/delay.js'

const useIntersectionObserver = (data) => {
  const [limit, setLimit] = useState(10)
  const [hasMore, setHasMore] = useState(true)
  const loaderRef = useRef(null)

  useEffect(() => {
    if (limit === data?.length) {
      setHasMore(false)
    }
    // intersection callback
    const onIntersection = (items) => {
      const loaderItem = items[0]
      // load more when intersection happens
      if (loaderItem.isIntersecting && hasMore) {
        // load more after 2 seconds fake delay because did not make any api for this
        delay(2000).then(() => setLimit((prevLimit) => prevLimit + 10))
      }
    }

    // observer
    const observer = new IntersectionObserver(onIntersection)

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current)
    }
    // cleanup
    return () => {
      if (observer) observer.disconnect()
    }
  }, [setHasMore, data, hasMore, limit])
  return { loaderRef, limit, hasMore }
}
export default useIntersectionObserver
