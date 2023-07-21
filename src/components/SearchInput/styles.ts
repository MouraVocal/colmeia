import { Search } from 'lucide-react'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.gray600};
  align-items: center;
  border-radius: 1rem;
  padding: 1.4rem 2.7rem;
  width: 33.9rem;
`

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.gray600};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
  }
`

export const StyledSearchIcon = styled(Search)`
  stroke: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`
