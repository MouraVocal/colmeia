import { styled } from 'styled-components'
import { ISectionButtonProps } from './types'
import { ReactComponent as Honeycomb } from '../../assets/honeycomb.svg'

export const StyledHoneycombContainer = styled.div<ISectionButtonProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ y, diameter }) => y + diameter / 2}px;
  left: ${({ x, diameter }) => x + diameter / 2}px;
  transform: translate(-50%, -50%);
  transition: transform 0.2s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.7);
    cursor: pointer;
  }
`

export const StyledHoneycomb = styled(Honeycomb)`
  transform: rotate(-90deg);
`
