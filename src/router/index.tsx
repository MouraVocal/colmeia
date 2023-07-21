import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { LinksImportantes } from '../pages/LinksImportantes'
import { Comunidades } from '../pages/Comunidades'
import { Jogos } from '../pages/Jogos'
import { PlanosDeFundo } from '../pages/PlanosDeFundo'
import { Times } from '../pages/Times'
import { Dashboard } from '../pages/Dashboard'
import { DashboardProfile } from '../pages/DashboardProfile'

export const router = createBrowserRouter([
  {
    path: '/colmeia',
    element: <Login />
  },
  {
    path: '/colmeia/home',
    element: <Home />
  },
  {
    element: <Dashboard />,
    path: '/colmeia/dashboard',
    children: [
      {
        element: <DashboardProfile />,
        path: '/colmeia/dashboard/profile'
      },
      {
        element: <LinksImportantes />,
        path: '/colmeia/dashboard/links-importantes'
      },
      {
        element: <Comunidades />,
        path: '/colmeia/dashboard/comunidades'
      },
      {
        element: <Jogos />,
        path: '/colmeia/dashboard/jogos'
      },
      {
        element: <PlanosDeFundo />,
        path: '/colmeia/dashboard/planos-de-fundo'
      },
      {
        element: <Times />,
        path: '/colmeia/dashboard/times'
      }
    ]
  }
])
