import { useNavigate } from 'react-router-dom'
import {
  StyledBackgroundImagesIcon,
  StyledBee,
  StyledCircle,
  StyledCommunitiesIcon,
  StyledGamesIcon,
  StyledHomeIcon,
  StyledLinkIcon,
  StyledTeamsIcon
} from './styles'
import { ICirclePosition, ISectionButtonProps } from './types'
import { SectionButton } from '../../components/SectionButton'

export const Home = () => {
  const navigate = useNavigate()

  const sections: ISectionButtonProps[] = [
    {
      title: 'Home',
      icon: <StyledHomeIcon />,
      path: 'colmeia/home'
    },
    {
      title: 'Links Importantes',
      icon: <StyledLinkIcon />,
      path: 'colmeia/links-importantes'
    },
    {
      title: 'Comunidades',
      icon: <StyledCommunitiesIcon />,
      path: 'colmeia/comunidades'
    },
    {
      title: 'Jogos',
      icon: <StyledGamesIcon />,
      path: 'colmeia/jogos'
    },
    {
      title: 'Planos de fundo',
      icon: <StyledBackgroundImagesIcon />,
      path: 'colmeia/planos-de-fundo'
    },
    {
      title: 'Times',
      icon: <StyledTeamsIcon />,
      path: 'colmeia/times'
    }
  ]

  const circlePositions = (array: ISectionButtonProps[], diameter: number) => {
    const radius = diameter / 2
    const positions: ICirclePosition[] = []
    const angle = (Math.PI * 2) / array.length

    for (let i = 0; i < array.length; i++) {
      positions.push({
        x: radius * Math.round(Math.cos(angle * i) * 100),
        y: radius * Math.round(Math.sin(angle * i) * 100)
      })
    }
    return positions
  }

  const myPositions = circlePositions(sections, 6)

  const handleClickSectionButton = (path: string) => {
    console.log(path)
    navigate(path)
  }

  return (
    <StyledCircle>
      {sections.map((section, index) => (
        <SectionButton
          x={myPositions[index].x}
          y={myPositions[index].y}
          onClick={() => handleClickSectionButton(section.path)}
          key={section.title}
        >
          {section.icon}
        </SectionButton>
      ))}
      <StyledBee />
    </StyledCircle>
  )
}
