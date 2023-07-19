import { styled } from 'styled-components'
import { ISectionButtonProps } from './types'
import { ReactComponent as Honeycomb } from '../../assets/honeycomb.svg'

export const StyledHoneycombContainer = styled.div.attrs<ISectionButtonProps>(
  ({ x, y, diameter }) => ({
    style: {
      top: (y * 1.6 + diameter) / 2,
      left: (x * 1.6 + diameter) / 2
    }
  })
)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

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
