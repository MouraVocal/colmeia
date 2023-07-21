import { Container, StyledInput, StyledSearchIcon } from './styles'

export const SearchInput = () => {
  return (
    <Container>
      <StyledInput placeholder="Digite o que você procura" />
      <StyledSearchIcon />
    </Container>
  )
}
