import { Button } from 'antd'
import Carousel from './components/ui/Carousel.jsx'
import Navbar from './components/ui/Navbar.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <button className='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>
        Button
      </button>
    </>
  )
}

export default App
