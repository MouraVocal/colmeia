import styled from 'styled-components'

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.gray100};
  font-weight: 500;
  margin-bottom: 1.2rem;
`
