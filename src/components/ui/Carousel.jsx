import { useEffect, useState } from 'react'

import CarouselOne from '../../assets/carousel-1.jpg'
import CarouselTwo from '../../assets/carousel-2.jpg'
import CarouselThree from '../../assets/carousel-3.jpg'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  let text = null

  if (currentSlide === 1) {
    text = (
      <p className='font-poppins text-xl sm:text-4xl lg:text-5xl text-slate-700'>
        Shop the latest collection
      </p>
    )
  } else if (currentSlide === 2) {
    text = (
      <p className='font-poppins text-xl sm:text-4xl lg:text-5xl text-slate-700'>
        Get the best deals
      </p>
    )
  } else {
    text = (
      <p className='font-poppins text-xl sm:text-4xl lg:text-5xl text-white'>
        Shop from anywhere
      </p>
    )
  }

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
        <div className='absolute inset-0 flex justify-center items-center text-white font-bold text-xl'>
          <div className='text-center'>
            {text}
            <button className='btn btn-info'>Shop Now</button>
          </div>
        </div>
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
        <div className='absolute inset-0 flex justify-center items-center text-white font-bold text-xl'>
          <div className='text-center'>
            {text}
            <button className='btn btn-info'>Shop Now</button>
          </div>
        </div>
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
        <div className='absolute inset-0 flex justify-center items-center text-white font-bold text-xl'>
          <div className='text-center'>
            {text}
            <button className='btn btn-info'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
