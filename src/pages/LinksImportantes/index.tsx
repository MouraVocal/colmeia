import { CardTitle } from '../../components/CardTitle'
import { FavoriteSection } from '../../components/FavoriteSection'
import { Column, Container } from './styles'

export const LinksImportantes = () => {
  const favorites = [
    {
      title: 'Ponto Mais',
      url: 'https://app2.pontomais.com.br/login'
    },
    {
      title: 'Feedz',
      url: 'https://app.feedz.com.br/inicio'
    }
  ]
  return (
    <Column>
      <CardTitle>LINKS IMPORTANTES</CardTitle>
      <Container>
        {favorites.map(favorite => {
          return (
            <FavoriteSection
              key={favorite.title}
              title={favorite.title}
              url={favorite.url}
            />
          )
        })}
      </Container>
    </Column>
  )
}
