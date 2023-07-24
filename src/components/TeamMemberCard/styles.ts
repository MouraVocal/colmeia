import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const StyledAvatar = styled.img`
  aspect-ratio: 1;
  width: 4.8rem;
  height: 4.6rem;
  border-radius: 1rem;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Name = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
`

export const Role = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.gray100};
`

export const Email = styled(Role)`
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.white};
`
