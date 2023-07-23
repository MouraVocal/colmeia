import { StyledHeader, StyledTitle } from './styles'
import { SearchInput } from '../SearchInput'
import { HTMLAttributes, forwardRef } from 'react'

export const Header = forwardRef<
  HTMLHeadElement,
  HTMLAttributes<HTMLHeadElement>
>(({ ...rest }, ref) => {
  return (
    <StyledHeader ref={ref} {...rest}>
      <StyledTitle>Colmeia</StyledTitle>
      <SearchInput />
    </StyledHeader>
  )
})
