import { CardTitle } from '../../components/CardTitle'
import { Column, Container } from './styles'
import PetsSamba from '../../assets/communities/pets.png'
import Netflix from '../../assets/communities/netflix.png'
import Spotify from '../../assets/communities/spotify.png'
import { CommunityCard } from '../../components/CommunityCard'

export const Comunidades = () => {
  const communities = [
    {
      name: 'Pets Samba',
      image: PetsSamba
    },
    {
      name: 'Netflix e pipoquinha',
      image: Netflix
    },
    {
      name: 'Spotify',
      image: Spotify
    }
  ]
  return (
    <Column>
      <CardTitle>COMUNIDADES</CardTitle>
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
