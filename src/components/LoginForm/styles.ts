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

export const StyledButton = styled.button`
  all: unset;
  border: 1px solid transparent;

  &:focus-visible {
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  }
`
