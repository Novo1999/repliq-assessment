const Checkout = () => {
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='max-w-4xl mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-8'>Checkout</h1>
        {/* Billing Information */}
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-lg font-semibold mb-4'>Billing Information</h2>
          <form>
            <div className='mb-4'>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-200'
              />
            </div>
            {/* Other form fields (address, city, zip code, etc.) */}
          </form>
        </div>
        {/* Order Summary */}
        <div className='bg-white rounded-lg shadow-md p-6'>
          <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>
          {/* Product list */}
          <div className='mb-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-gray-700'>Product Name</p>
              <p className='text-gray-700'>$19.99</p>
            </div>
            {/* More product items */}
          </div>
          {/* Total */}
          <div className='flex justify-between items-center border-t pt-2'>
            <p className='font-semibold'>Total:</p>
            <p className='font-semibold'>$19.99</p>
          </div>
        </div>
        {/* Checkout Button */}
        <div className='mt-8'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300'>
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  )
}
export default Checkout
