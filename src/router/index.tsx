import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { LinksImportantes } from '../pages/LinksImportantes'
import { Comunidades } from '../pages/Comunidades'
import { Jogos } from '../pages/Jogos'
import { PlanosDeFundo } from '../pages/PlanosDeFundo'
import { Times } from '../pages/Times'
import { Dashboard } from '../pages/Dashboard'

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
    element: <LinksImportantes />,
    path: '/colmeia/links-importantes'
  },
  {
    element: <Comunidades />,
    path: '/colmeia/comunidades'
  },
  {
    element: <Jogos />,
    path: '/colmeia/jogos'
  },
  {
    element: <PlanosDeFundo />,
    path: '/colmeia/planos-de-fundo'
  },
  {
    element: <Times />,
    path: '/colmeia/times'
  },
  {
    element: <Dashboard />,
    path: '/colmeia/dashboard'
  }
])
