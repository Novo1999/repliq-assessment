import { Carousel as AntCarousel } from 'antd'

import CarouselOne from '../../assets/carousel-1.jpg'
import CarouselTwo from '../../assets/carousel-2.jpg'
import CarouselThree from '../../assets/carousel-3.jpg'
const contentStyle = {
  height: '380px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
}

const Carousel = () => {
  return (
    <>
      <AntCarousel className='relative' autoplay>
        <div>
          <div style={contentStyle}>
            <img
              src={CarouselOne}
              className='w-full h-96 object-cover'
              alt='Carousel Slide 1'
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={CarouselTwo}
              className='w-full h-96 object-cover'
              alt='Carousel Slide 1'
            />
          </div>
        </div>
        <div>
          <div style={contentStyle}>
            <img
              src={CarouselThree}
              className='w-full h-96 object-cover'
              alt='Carousel Slide 1'
            />
          </div>
        </div>
      </AntCarousel>
      <div className='relative flex flex-col -top-6 w-fit left-1/2 transform -translate-x-1/2'>
        {/* scroll to products start */}
        <button
          onClick={() => window.scrollTo({ top: 312, behavior: 'smooth' })}
          className='btn btn-info relative bottom-20'
        >
          Check Products
        </button>
      </div>
    </>
  )
}

export default Carousel
