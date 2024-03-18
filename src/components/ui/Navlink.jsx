import { NavLink } from 'react-router-dom'

const Navlink = ({ children, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'bg-blue-500 px-3 py-2 mx-3 mt-2 text-white transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-blue-600'
          : 'px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100'
      }
      to={to}
    >
      {children}
    </NavLink>
  )
}
export default Navlink
