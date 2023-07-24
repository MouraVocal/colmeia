import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const StyledInput = styled.textarea`
  width: 100%;
  height: 9rem;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.gray100};
  border: none;
  outline: none;
  resize: none;
`

export const StyledButton = styled.button`
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border: none;
  outline: none;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`
