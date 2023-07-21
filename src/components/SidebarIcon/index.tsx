import { NavLinkProps } from 'react-router-dom'
import { StyledLink } from './styles'

export const SidebarIcon = ({ ...rest }: NavLinkProps) => {
  return <StyledLink {...rest} />
}
