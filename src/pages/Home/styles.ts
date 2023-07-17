import styled from 'styled-components'
import { ReactComponent as Bee } from '../../assets/bee.svg'

export const StyledBee = styled(Bee)`
  animation: floating 2s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`
