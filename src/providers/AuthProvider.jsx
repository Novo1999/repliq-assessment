import { useState } from 'react'
import { AuthContext } from '../context/index.js'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    accessToken: '',
  })

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
