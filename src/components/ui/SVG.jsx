export const DeleteSVG = () => {
  return (
    <svg
      width={34}
      height={34}
      viewBox='0 0 34 34'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        className='fill-red-50 transition-all duration-500 group-hover:fill-red-400'
        cx={17}
        cy={17}
        r={17}
        fill=''
      />
      <path
        className='stroke-red-500 transition-all duration-500 group-hover:stroke-white'
        d='M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z'
        stroke='#EF4444'
        strokeWidth='1.6'
        strokeLinecap='round'
      />
    </svg>
  )
}

export const MinusSVG = () => {
  return (
    <svg
      className='stroke-gray-900 transition-all duration-500 group-hover:stroke-black'
      width={18}
      height={19}
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.5 9.5H13.5'
        stroke=''
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export const PlusSVG = () => {
  return (
    <svg
      className='stroke-gray-900 transition-all duration-500 group-hover:stroke-black'
      width={18}
      height={19}
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.75 9.5H14.25M9 14.75V4.25'
        stroke=''
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
