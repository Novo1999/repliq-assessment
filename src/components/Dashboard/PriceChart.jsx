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
import useThemeContext from '../../hooks/useThemeContext.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const PriceChart = ({ products }) => {
  const { isLight } = useThemeContext()

  // options for the chart
  const options = {
    responsive: true,
    scales: {
      y: {
        grid: {
          color: isLight ? 'black' : 'gray',
        },
      },
      x: {
        grid: {
          color: isLight ? 'black' : 'gray',
        },
      },
    },
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
