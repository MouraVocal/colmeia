import { CardTemplate } from '../../templates/CardTemplate'
import { CardTitle } from '../CardTitle'
import { FavoriteSection } from '../FavoriteSection'
import { Column, FavoritesContainer } from './styles'
import { IFavoritesCardProps } from './types'

export const FavoritesCard = ({ favorites }: IFavoritesCardProps) => {
  return (
    <CardTemplate>
      <Column>
        <CardTitle>FAVORITOS</CardTitle>
        <FavoritesContainer>
          {favorites.map(favorite => {
            return (
              <FavoriteSection
                key={favorite.title}
                title={favorite.title}
                url={favorite.url}
              />
            )
          })}
        </FavoritesContainer>
      </Column>
    </CardTemplate>
  )
}
