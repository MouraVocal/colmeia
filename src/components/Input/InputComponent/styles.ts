import styled from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 1rem;
  border: 1px solid transparent;
  padding: 1.2rem;
  background: ${({ theme }) => theme.colors.gray800};
  outline: none;
  color: ${({ theme }) => theme.colors.gray100};
  font-size: ${({ theme }) => theme.fontSize.xs};

  &::placeholder {
    caret-color: ${({ theme }) => theme.colors.primary};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.gray100};
  }
`
