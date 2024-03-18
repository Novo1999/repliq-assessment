import { useEffect, useState } from 'react'

import CarouselOne from '../../assets/carousel-1.jpg'
import CarouselTwo from '../../assets/carousel-2.jpg'
import CarouselThree from '../../assets/carousel-3.jpg'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    // change image every 3 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1))
    }, 3000)

    // cleanup
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='carousel w-full mb-10 relative'>
      <div
        id='slide1'
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? 'block' : 'hidden'
        }`}
      >
        <img
          src={CarouselOne}
          className='w-full h-96 object-cover'
          alt='Carousel Slide 1'
        />
      </div>
      <div
        id='slide2'
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? 'block' : 'hidden'
        }`}
      >
        <img
          src={CarouselTwo}
          className='w-full h-96 object-cover'
          alt='Carousel Slide 2'
        />
      </div>
      <div
        id='slide3'
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? 'block' : 'hidden'
        }`}
      >
        <img
          src={CarouselThree}
          className='w-full h-96 object-cover'
          alt='Carousel Slide 3'
        />
      </div>
      <div className='absolute inset-0 flex justify-center items-center font-bold text-xl sm:text-3xl lg:text-5xl text-white'>
        <div className='text-center bg-gray-900 rounded-md p-2'>
          Hi there, Admin
        </div>
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
        <button
          onClick={() => window.scrollTo({ top: 312, behavior: 'smooth' })}
          className='btn btn-info relative bottom-20'
        >
          Check Products
        </button>
      </div>
    </div>
  )
}

export default Carousel
