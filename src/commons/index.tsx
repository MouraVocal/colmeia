import {
  StyledBackgroundImagesIcon,
  StyledCommunitiesIcon,
  StyledGamesIcon,
  StyledHomeIcon,
  StyledLinkIcon,
  StyledTeamsIcon
} from './styles'
import { ISectionButtonProps } from './types'

export const sections: ISectionButtonProps[] = [
  {
    title: 'Profile',
    icon: <StyledHomeIcon />,
    path: '/colmeia/dashboard/profile'
  },
  {
    title: 'Links Importantes',
    icon: <StyledLinkIcon />,
    path: '/colmeia/dashboard/links-importantes'
  },
  {
    title: 'Comunidades',
    icon: <StyledCommunitiesIcon />,
    path: '/colmeia/dashboard/comunidades'
  },
  {
    title: 'Jogos',
    icon: <StyledGamesIcon />,
    path: '/colmeia/dashboard/jogos'
  },
  {
    title: 'Planos de fundo',
    icon: <StyledBackgroundImagesIcon />,
    path: '/colmeia/dashboard/planos-de-fundo'
  },
  {
    title: 'Times',
    icon: <StyledTeamsIcon />,
    path: '/colmeia/dashboard/times'
  }
]
