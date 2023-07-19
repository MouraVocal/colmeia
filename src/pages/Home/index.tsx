import { useRef, useEffect, useState } from 'react'
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
  const [diameter, setDiameter] = useState(0)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      setDiameter(circle.getBoundingClientRect().width)
    }
    window.addEventListener('resize', () => {
      if (circle) {
        setDiameter(circle.getBoundingClientRect().width)
      }
    })
  }, [])

  const navigate = useNavigate()

  const sections: ISectionButtonProps[] = [
    {
      title: 'Home',
      icon: <StyledHomeIcon />,
      path: '/colmeia'
    },
    {
      title: 'Links Importantes',
      icon: <StyledLinkIcon />,
      path: '/colmeia/links-importantes'
    },
    {
      title: 'Comunidades',
      icon: <StyledCommunitiesIcon />,
      path: '/colmeia/comunidades'
    },
    {
      title: 'Jogos',
      icon: <StyledGamesIcon />,
      path: '/colmeia/jogos'
    },
    {
      title: 'Planos de fundo',
      icon: <StyledBackgroundImagesIcon />,
      path: '/colmeia/planos-de-fundo'
    },
    {
      title: 'Times',
      icon: <StyledTeamsIcon />,
      path: '/colmeia/times'
    }
  ]

  const circlePositions = (array: ISectionButtonProps[], diameter: number) => {
    const radius = diameter / 2
    const positions: ICirclePosition[] = []
    const angle = (Math.PI * 2) / array.length

    for (let i = 0; i < array.length; i++) {
      positions.push({
        x: radius * Math.cos(angle * i),
        y: radius * Math.sin(angle * i)
      })
    }
    console.log(positions)
    return positions
  }

  const myPositions = circlePositions(sections, diameter)

  const handleClickSectionButton = (path: string) => {
    console.log(path)
    navigate(path)
  }

  return (
    <StyledCircle ref={circleRef}>
      {sections.map((section, index) => (
        <SectionButton
          x={myPositions[index].x}
          y={myPositions[index].y}
          diameter={diameter}
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
