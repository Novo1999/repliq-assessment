import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import NotFoundPage from './components/misc/NotFoundPage.jsx'
import './index.css'
import AdminDashBoard from './pages/AdminDashBoard.jsx'
import AdminOrderList from './pages/AdminOrderList.jsx'
import Checkout from './pages/Checkout.jsx'
import Home from './pages/Home.jsx'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: 'dashboard',
        element: <AdminDashBoard />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'orders',
        element: <AdminOrderList />,
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
