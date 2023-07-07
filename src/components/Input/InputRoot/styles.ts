import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray800};
  border-radius: 1rem;
  border: 1px solid transparent;
  padding: 1rem;
  transition: all 0.2s ease-in-out;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`
