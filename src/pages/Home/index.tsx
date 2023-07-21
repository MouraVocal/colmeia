import { useRef, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { StyledBee, StyledCircle } from './styles'
import { ICirclePosition } from './types'
import { SectionButton } from '../../components/SectionButton'
import { sections } from '../../commons'
import { ISectionButtonProps } from '../../commons/types'

export const Home = () => {
  const [diameter, setDiameter] = useState(0)
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const circle = circleRef.current
    if (circle) {
      setDiameter(circle.getBoundingClientRect().width)
      window.addEventListener('resize', () => {
        setDiameter(circle.getBoundingClientRect().width)
      })

      return () => {
        window.removeEventListener('resize', () => {
          setDiameter(circle.getBoundingClientRect().width)
        })
      }
    }
  }, [])

  const navigate = useNavigate()

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
    return positions
  }

  const sectionButtonPositions = circlePositions(sections, diameter)

  const handleClickSectionButton = (path: string) => {
    navigate(path)
  }

  return (
    <StyledCircle ref={circleRef}>
      {sections.map((section, index) => (
        <SectionButton
          x={sectionButtonPositions[index].x}
          y={sectionButtonPositions[index].y}
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
