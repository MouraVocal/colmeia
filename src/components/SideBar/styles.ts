import { LogOut } from 'lucide-react'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  height: 100%;
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  border-radius: 0 2rem 2rem 0;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  transition: all 0.2s ease-in-out;
`

export const MainButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const StyledLogoutButton = styled(LogOut)`
  stroke: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    stroke: ${({ theme }) => theme.colors.darkPrimary};
  }
`
