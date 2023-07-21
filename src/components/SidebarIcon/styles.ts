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
  width: 5.6rem;
  height: 5.8rem;

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
