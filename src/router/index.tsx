import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'

export const router = createBrowserRouter([
  {
    path: '/colmeia',
    element: <Login />
  },
  {
    path: '/colmeia/home',
    element: <Home />
  }
])
