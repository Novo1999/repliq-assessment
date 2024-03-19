import { Button, Select } from 'antd'
import { useForm } from 'react-hook-form'
import FileUpload from './FileUpload.jsx'

const { Option } = Select

const categories = ['Category 1', 'Category 2', 'Category 3']

const ProductForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm()
  console.log(watch('category'))
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-96 mx-auto space-y-2 bg-white p-10 h-fit mt-48 rounded-lg shadow-xl'
    >
      <label htmlFor='Product Image' className='block text-center'>
        Product Image
      </label>

      <FileUpload />
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
        placeholder='Name'
        {...register('price', { required: 'Price is required' })}
      />
      <p className='text-red-500'>{errors.price?.message}</p>
      <label htmlFor='Stock'>Stock</label>
      <input
        className='mb-4 w-full p-2 border rounded-md bg-white focus:ring outline-none text-black'
        placeholder='Name'
        {...register('stock', { required: 'Stock is required' })}
      />
      <p className='text-red-500'>{errors.stock?.message}</p>
      <label htmlFor='Category'>Category</label>
      <Select
        className='mb-4 w-full'
        defaultValue={categories[0]}
        onChange={(value) => setValue('category', value)}
      >
        {categories.map((category, index) => (
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
