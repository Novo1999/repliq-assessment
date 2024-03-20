import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import NotFoundPage from './components/misc/NotFoundPage.jsx'
import './index.css'
import AddProduct from './pages/AddProduct.jsx'
import AdminDashBoard from './pages/AdminDashBoard.jsx'
import AdminOrderList from './pages/AdminOrderList.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <AdminDashBoard />,
      },
      {
        path: 'orders',
        element: <AdminOrderList />,
      },
      {
        path: 'products',
        element: <AddProduct />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
