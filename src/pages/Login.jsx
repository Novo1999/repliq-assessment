import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { EMAIL_REGEX } from '../constants.js'
import useAuthContext from '../hooks/useAuthContext.js'

const Login = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const { setUser, users, user } = useAuthContext()
  console.log(user)
  const handleLogin = (data) => {
    const { username, email } = data

    // check if email exists
    if (users.find((user) => user.email === email)) {
      setUser({ username, accessToken: crypto.randomUUID() }) // setting user on register
      navigate('/')
    } else {
      setError('root.loginError', {
        type: 'login',
        message: 'User does not exist',
      })
    }
  }

  const onSubmit = (data) => {
    console.log(data)
    handleLogin(data)
  }
  return (
    <div className='flex justify-center items-center h-screen font-poppins'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-96 p-8 bg-white rounded-lg shadow-lg'
      >
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
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
          Login
        </button>
        <p className='text-red-500'>
          {errors?.root?.loginError?.type === 'login' &&
            errors?.root?.loginError?.message}
        </p>
        <div className='flex justify-between mt-4'>
          <p className='text-black'>No account?</p>
          <Link className='text-blue-500' to='/register'>
            Register Now
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
