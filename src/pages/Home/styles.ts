import styled, { css } from 'styled-components'
import { ReactComponent as Bee } from '../../assets/bee.svg'
import {
  Gamepad2,
  HomeIcon,
  Image,
  Link,
  MessageSquare,
  Users
} from 'lucide-react'

export const StyledCircle = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border-radius: 50%;
`

const buttonIconCommonStyles = css`
  position: absolute;
  fill: none;
  stroke: white;
`

export const StyledHomeIcon = styled(HomeIcon)`
  ${buttonIconCommonStyles}
`

export const StyledLinkIcon = styled(Link)`
  ${buttonIconCommonStyles}
`

export const StyledCommunitiesIcon = styled(MessageSquare)`
  ${buttonIconCommonStyles}
`

export const StyledGamesIcon = styled(Gamepad2)`
  ${buttonIconCommonStyles}
`

export const StyledBackgroundImagesIcon = styled(Image)`
  ${buttonIconCommonStyles}
`

export const StyledTeamsIcon = styled(Users)`
  ${buttonIconCommonStyles}
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
