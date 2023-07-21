import { SidebarIcon } from '../SidebarIcon'
import { sections } from '../../commons'
import {
  StyledUl,
  StyledNav,
  StyledLogoutButton,
  MainButtonsContainer
} from './styles'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  console.log()
  return (
    <StyledNav>
      <StyledUl>
        <MainButtonsContainer>
          {sections.map((section, index) => (
            <SidebarIcon
              to={section.path}
              key={section.title}
              tabIndex={index + 1}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {section.icon}
            </SidebarIcon>
          ))}
        </MainButtonsContainer>

        <Link to="/colmeia">
          <StyledLogoutButton />
        </Link>
      </StyledUl>
    </StyledNav>
  )
}
