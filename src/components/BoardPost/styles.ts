import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Name = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.lightSecondary};
`

export const Message = styled.p``

export const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`
