import { Button, Select } from 'antd'
import { useForm } from 'react-hook-form'
import useThemeContext from '../../hooks/useThemeContext.js'
import getUniqueCategories from '../../utils/getUniqueCategories.js'
import FileUpload from './FileUpload.jsx'

const { Option } = Select

const ProductForm = ({ products }) => {
  // getting unique categories
  const categories = getUniqueCategories(products)
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const { isLight } = useThemeContext()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`w-96 space-y-2 ${
        isLight
          ? 'bg-white shadow-xl'
          : 'bg-stone-800 border shadow-white shadow-md'
      } p-10 h-fit mt-48 rounded-lg`}
    >
      <p className='text-center text-2xl'>Add New Product</p>
      <label htmlFor='Product Image' className='block text-center'>
        Product Image
      </label>
      <div className='flex justify-center'>
        <FileUpload />
      </div>
      <label htmlFor='Name'>Name</label>
      <input
        className='mb-4 w-full p-2 border rounded-md bg-white focus:ring outline-none text-black'
        placeholder='Name'
        {...register('name', { required: 'Name is required' })}
      />

      <p className='text-red-500'>{errors.name?.message}</p>
      <label htmlFor='Price'>Price</label>
      <input
        className='mb-4 w-full p-2 border rounded-md bg-white focus:ring outline-none text-black'
        placeholder='Price'
        type='number'
        {...register('price', { required: 'Price is required' })}
      />
      <p className='text-red-500'>{errors.price?.message}</p>
      <label htmlFor='Stock'>Stock</label>
      <input
        className='mb-4 w-full p-2 border rounded-md bg-white focus:ring outline-none text-black'
        placeholder='Stock'
        type='number'
        {...register('stock', { required: 'Stock is required' })}
      />
      <p className='text-red-500'>{errors.stock?.message}</p>
      <label htmlFor='Category'>Category</label>
      <Select
        className='mb-4 w-full'
        defaultValue='Clothing'
        onChange={(value) => setValue('category', value)}
      >
        {categories?.map((category, index) => (
          <Option key={index} value={category}>
            {category}
          </Option>
        ))}
      </Select>
      <div className='flex justify-between'>
        <Button
          onClick={handleSubmit(onSubmit)}
          type='submit'
          className='bg-blue-500 text-white'
          htmlType='submit'
        >
          Add
        </Button>
      </div>
    </form>
  )
}

export default ProductForm
