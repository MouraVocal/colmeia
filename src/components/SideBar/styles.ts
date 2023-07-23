import { LogOut } from 'lucide-react'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
`

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 0 2rem 2rem 0;
  background-color: ${({ theme }) => theme.colors.lightSecondary};
  transition: all 0.2s ease-in-out;

  @media (max-height: 768px) {
    padding: 1rem;
  }
`

export const MainButtonsContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
`

export const StyledLogoutButton = styled(LogOut)`
  stroke: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    stroke: ${({ theme }) => theme.colors.darkPrimary};
  }
`
