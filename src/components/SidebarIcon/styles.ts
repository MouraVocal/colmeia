import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 0.5rem;
  max-width: 5.6rem;
  max-height: 5.8rem;
  min-width: 3.5rem;
  min-height: 3.5rem;

  &.active {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.darkPrimary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }
`
