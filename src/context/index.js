import { createContext } from 'react'

const CartContext = createContext(null)
const AuthContext = createContext(null)
const ProductContext = createContext(null)
const CategoryContext = createContext(null)

export { AuthContext, CartContext, CategoryContext, ProductContext }
