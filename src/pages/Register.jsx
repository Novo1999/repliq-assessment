import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { EMAIL_REGEX } from '../constants.js'
import useAuthContext from '../hooks/useAuthContext.js'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const { setUser, users, setUsers } = useAuthContext()
  const navigate = useNavigate()

  const handleRegister = (data) => {
    const { username, email } = data
    // check if email already exists
    if (users.find((user) => user.email === email)) {
      setError('root.registerError', {
        type: 'register',
        message: `An user with name ${username} already exists`,
      })
    } else {
      setUsers((prevUsers) => [...prevUsers, { email, username }]) // adding new user to the users array
      setUser({ username, accessToken: crypto.randomUUID() }) // setting user on register
      navigate('/')
    }
  }

  const onSubmit = (data) => {
    handleRegister(data)
  }

  return (
    <div className='flex justify-center items-center h-screen font-poppins'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-96 p-8 bg-white rounded-lg shadow-lg'
      >
        <h2 className='text-2xl font-semibold mb-4'>Register</h2>
        <div className='mb-4'>
          <input
            className='w-full p-2 border border-gray-300 rounded-md bg-white'
            type='text'
            placeholder='Username'
            {...register('username', { required: 'User name is required' })}
          />
          <p className='text-red-500'>{errors.username?.message}</p>
        </div>
        <div className='mb-4'>
          <input
            className='w-full p-2 border border-gray-300 rounded-md bg-white'
            type='email'
            placeholder='Email'
            {...register('email', {
              required: 'Email is required',
              // email validation
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid Email',
              },
            })}
          />
          <p className='text-red-500'>{errors.email?.message}</p>
        </div>
        <div className='mb-4'>
          <input
            className='w-full p-2 border border-gray-300 rounded-md bg-white'
            type='password'
            placeholder='Password'
            {...register('password', { required: 'Password is required' })}
          />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md'
        >
          Register
        </button>
        <p className='text-red-500'>
          {errors?.root?.registerError?.type === 'register' &&
            errors?.root?.registerError?.message}
        </p>
        <div className='flex justify-between mt-4'>
          <p className='text-black'>Already have an account?</p>
          <Link className='text-blue-500' to='/login'>
            Login Now
          </Link>
        </div>
      </form>
    </div>
  )
}
export default Register