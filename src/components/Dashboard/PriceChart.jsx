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
  const labels = products?.map((product) => product.name)
  const data = {
    labels,
    datasets: [
      {
        label: 'Price',
        data: products?.map((product) => product.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={data} />
}

export default PriceChart
