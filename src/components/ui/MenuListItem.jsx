const MenuListItem = ({ children, onClick }) => {
  return (
    <li
      onClick={onClick}
      className='text-black flex-start block p-3 pl-4 transform origin-left translate-x-20 cursor-pointer hover:bg-slate-400 border-none bg-white duration-300'
    >
      {children}
    </li>
  )
}
export default MenuListItem