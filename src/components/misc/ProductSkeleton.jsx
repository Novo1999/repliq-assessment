const ProductSkeleton = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='container px-6 py-10 mx-auto animate-pulse'>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12'>
          <div className='w-full '>
            <div className='w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600' />
            <h1 className='w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700' />
            <p className='w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700' />
          </div>
        </div>
      </div>
    </section>
  )
}
export default ProductSkeleton
