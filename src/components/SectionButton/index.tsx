import { StyledHoneycomb, StyledHoneycombContainer } from './styles'
import { ISectionButtonProps } from './types'

export const SectionButton = ({
  x,
  y,
  children,
  ...rest
}: ISectionButtonProps) => {
  return (
    <StyledHoneycombContainer x={x} y={y} {...rest}>
      <StyledHoneycomb />
      {children}
    </StyledHoneycombContainer>
  )
}
