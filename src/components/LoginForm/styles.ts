import { styled } from 'styled-components'
import { ReactComponent as SambaLogo } from '../../assets/samba-logo.svg'

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  max-width: 400px;
  border-radius: 1rem;
  padding: 2rem;
`

export const StyledSambaLogo = styled(SambaLogo)`
  margin-bottom: 2rem;
`

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray400};
  margin-bottom: 2rem;
  text-align: center;
`

export const StyledButton = styled.button`
  all: unset;
  border: 1px solid transparent;

  &:focus-visible {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }
`

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.gray400};
  margin-top: 3.2rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
