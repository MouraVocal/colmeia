import { styled } from 'styled-components'
import { ISectionButtonProps } from './types'
import { ReactComponent as Honeycomb } from '../../assets/honeycomb.svg'

const centerFactor = 270

export const StyledHoneycombContainer = styled.div<ISectionButtonProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${({ y }) => y + centerFactor}px;
  left: ${({ x }) => x + centerFactor}px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.7);
    cursor: pointer;
  }
`

export const StyledHoneycomb = styled(Honeycomb)`
  transform: rotate(-90deg);
`
