import React, { useState } from 'react'

import CarouselOne from '../../assets/carousel-1.jpg'
import CarouselTwo from '../../assets/carousel-2.jpg'
import CarouselThree from '../../assets/carousel-3.jpg'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 3 : prevSlide - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1))
  }

  return (
    <div className='carousel w-full mb-10'>
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
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={prevSlide} className='btn btn-circle'>
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle'>
            ❯
          </button>
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
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={prevSlide} className='btn btn-circle'>
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle'>
            ❯
          </button>
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
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
          <button onClick={prevSlide} className='btn btn-circle'>
            ❮
          </button>
          <button onClick={nextSlide} className='btn btn-circle'>
            ❯
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
