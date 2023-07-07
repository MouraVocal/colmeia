import styled from 'styled-components'

export const StyledButton = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.opacityPrimary};
  }
`

export const StyledTitle = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
`
