const MenuListItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className='text-black flex-start block p-3 pl-4 transform origin-left translate-x-20 cursor-pointer bg-sky-500 font-poppins hover:text-black border-none hover:bg-white duration-300 shadow-xl'
    >
      {children}
    </li>
  )
}
export default MenuListItem
