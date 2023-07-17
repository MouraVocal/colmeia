import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { ErrorPage } from '../pages/Error'

export const router = createBrowserRouter([
  {
    path: '/colmeia',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/home',
    element: <Home />
  }
])
