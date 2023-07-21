import styled from 'styled-components'
import { ReactComponent as Bee } from '../../assets/bee.svg'

export const StyledCircle = styled.div`
  aspect-ratio: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin: 10rem;
  border-radius: 50%;
`

export const StyledBee = styled(Bee)`
  position: absolute;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  animation: floating 2s ease-in-out infinite;
  transition: transform 0.2s;

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
