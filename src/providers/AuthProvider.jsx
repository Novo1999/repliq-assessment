import { useState } from 'react'
import { AuthContext } from '../context/index.js'

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: '',
    accessToken: '',
  })
  const [users, setUsers] = useState([])

  return (
    <AuthContext.Provider value={{ user, setUser, users, setUsers }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
