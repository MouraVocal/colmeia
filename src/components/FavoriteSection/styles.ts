import { Heart } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3.8rem 2rem;
  background-color: ${({ theme }) => theme.colors.gray500};
  min-width: 36.2rem;
  border-radius: 2rem;
`

export const Title = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
`

export const StyledHeart = styled(Heart)`
  fill: ${({ theme }) => theme.colors.white};
  stroke: ${({ theme }) => theme.colors.white};
`
