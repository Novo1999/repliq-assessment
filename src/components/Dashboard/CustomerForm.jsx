import { Button, Form, Input } from 'antd'
import { toast } from 'react-toastify'
import useCustomerContext from '../../hooks/useCustomer.js'
import useThemeContext from '../../hooks/useThemeContext.js'
const CustomerForm = ({ setIsModalOpen }) => {
  const { setCustomer } = useCustomerContext()
  const [form] = Form.useForm()
  const { isLight } = useThemeContext()

  // add new customer from the form data
  const onFinish = (values) => {
    setCustomer((prevCustomers) => [
      ...prevCustomers,
      { ...values, id: crypto.randomUUID() },
    ])
    setIsModalOpen(false)
    toast.success(`Added new customer ${values.name}`, { autoClose: 1000 })
    // reset field after adding
    form.resetFields()
  }

  // show error from form
  const onFinishFailed = (errorInfo) => {
    console.error('Failed:', errorInfo)
  }

  return (
    <Form
      form={form}
      className='sm:mr-[80px] sm:mt-[60px]'
      name='customer form'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        className='sm:w-[400px]'
        label={
          <p className={`${isLight ? 'text-black' : 'text-white'}`}>Name</p>
        }
        name='name'
        rules={[
          {
            required: true,
            message: 'Please input customers username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={
          <p className={`${isLight ? 'text-black' : 'text-white'}`}>Email</p>
        }
        name='email'
        rules={[
          {
            required: true,
            message: 'Please input customers email!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label={
          <p className={`${isLight ? 'text-black' : 'text-white'}`}>Address</p>
        }
        name='address'
        rules={[
          {
            required: true,
            message: 'Please input customers address!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          className={`${isLight ? 'text-black' : 'text-white'}`}
          type='default'
          htmlType='submit'
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CustomerForm
