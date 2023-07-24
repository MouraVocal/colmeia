import { Container, StyledHeart, Title } from './styles'
import { IFavoriteSectionProps } from './types'

export const FavoriteSection = ({ title, url }: IFavoriteSectionProps) => {
  return (
    <Container>
      <Title href={url}>{title}</Title>
      <StyledHeart />
    </Container>
  )
}
