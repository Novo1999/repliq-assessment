import { useState } from 'react'
import { ThemeContext } from '../context/index.js'

const ThemeProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(
    JSON.parse(localStorage.getItem('repliq-theme-light')) ?? true
  )

  return (
    <ThemeContext.Provider
      value={{
        isLight,
        setIsLight,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
