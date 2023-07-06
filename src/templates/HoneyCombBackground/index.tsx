import { useEffect, useRef } from 'react'
import { Container, Content, Grid, HexGrid, Light } from './styles'
import { IHoneyCombBackgroundProps } from './types'

export const HoneyCombBackground = ({
  children
}: IHoneyCombBackgroundProps) => {
  useEffect(() => {
    if (!LightRef.current) return

    const Light = LightRef.current

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      Light.style.top = y + 'px'
      Light.style.left = x + 'px'
    }

    window.addEventListener('mousemove', onMouseMove)
  }, [])

  const LightRef = useRef<HTMLDivElement>(null)

  return (
    <Container>
      <HexGrid>
        <Grid />
        <Light ref={LightRef} />
        <Content>{children}</Content>
      </HexGrid>
    </Container>
  )
}
