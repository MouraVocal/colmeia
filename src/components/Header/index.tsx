import { StyledHeader, StyledTitle } from './styles'
import { SearchInput } from '../SearchInput'

export const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>Colmeia</StyledTitle>
      <SearchInput />
    </StyledHeader>
  )
}
