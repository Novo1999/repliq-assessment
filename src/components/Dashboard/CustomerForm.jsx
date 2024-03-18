import { Button, Form, Input } from 'antd'
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const CustomerForm = () => (
  <Form
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
      label='Name'
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
      label='Email'
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
      label='Address'
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
      <Button type='default' htmlType='submit'>
        Submit
      </Button>
    </Form.Item>
  </Form>
)
export default CustomerForm
