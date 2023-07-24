import { CardTitle } from '../../components/CardTitle'
import { Column, Container } from './styles'
import { CommunityCard } from '../../components/CommunityCard'
import Bingo from '../../assets/games/bingo.png'

export const Jogos = () => {
  const communities = [
    {
      name: 'Bingo',
      image: Bingo
    }
  ]
  return (
    <Column>
      <CardTitle>Jogos</CardTitle>
      <Container>
        {communities.map(community => {
          return (
            <CommunityCard
              key={community.name}
              name={community.name}
              image={community.image}
            />
          )
        })}
      </Container>
    </Column>
  )
}
