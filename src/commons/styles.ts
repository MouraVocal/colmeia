import {
  Gamepad2,
  HomeIcon,
  Link,
  MessageSquare,
  Users,
  Image
} from 'lucide-react'
import styled, { css } from 'styled-components'

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
