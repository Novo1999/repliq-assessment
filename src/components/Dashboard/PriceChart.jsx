import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Product Prices',
    },
  },
}

const PriceChart = ({ products }) => {
  // take names as labels
  const labels = products?.map((product) => product.name)
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: products?.map((product) => product.price),
        backgroundColor: 'rgb(186, 22, 98)',
      },
    ],
  }

  return (
    <>
      <div className='hidden sm:block'>
        <Bar options={options} data={data} />
      </div>
      <div className='block sm:hidden'>
        <Bar height={300} options={options} data={data} />
      </div>
    </>
  )
}

export default PriceChart
