import { Space, Switch } from 'antd'
import { FaMoon } from 'react-icons/fa'
import { ImSun } from 'react-icons/im'
import useThemeContext from '../../hooks/useThemeContext.js'

const DarkModeSwitch = () => {
  const { isLight, setIsLight } = useThemeContext()

  return (
    <Space direction='vertical'>
      <Switch
        checked={isLight}
        onChange={(value) => {
          localStorage.setItem('repliq-theme-light', JSON.stringify(value))

          setIsLight(value)
        }}
        className='bg-gray-500'
        checkedChildren={
          <div className='pt-1'>
            <ImSun />
          </div>
        }
        unCheckedChildren={
          <div className='pt-[11px]'>
            <FaMoon />
          </div>
        }
        defaultChecked
      />
    </Space>
  )
}
export default DarkModeSwitch
