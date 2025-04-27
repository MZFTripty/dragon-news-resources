import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout'
import CategoryNews from './pages/CategoryNews'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthProvider from './provider/AuthProvider'
import NewsDetails from './pages/NewsDetails'
import PrivateRoute from './routes/PrivateRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'}></Navigate>
      },
      {
        path: '/category/:id',
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      },
    ],
  },
  {
    path: '/news/:id',
    element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
  {
    path: '*',
    element: <h2>error</h2>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

  </StrictMode>,
)
