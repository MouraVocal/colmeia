import { ProfileCard } from '../../components/ProfileCard'
import JesseAvatar from '../../assets/avatar/jesse.png'
import { TeamCard } from '../../components/TeamCard'
import Biamara from '../../assets/avatar/biamara.png'
import Daiana from '../../assets/avatar/daiana.png'
import Diego from '../../assets/avatar/diego.png'
import Janaina from '../../assets/avatar/janaina.png'
import { FavoritesCard } from '../../components/FavoritesCard'
import { BoardCard } from '../../components/BoardCard'

export const DashboardProfile = () => {
  const team = [
    {
      name: 'Biamara Iwanowski',
      avatar: Biamara,
      role: 'RH',
      email: 'biamara.iwanoswski@sambatech.com.br'
    },
    {
      name: 'Daiana Oliveira',
      avatar: Daiana,
      role: 'RH',
      email: 'daiana.oliveira@sambatech.com.br'
    },
    {
      name: 'Diego Moura',
      avatar: Diego,
      role: 'Dev',
      email: 'diego.moura@sambatech.com.br'
    },
    {
      name: 'Janaina Marangon',
      avatar: Janaina,
      role: 'Designer',
      email: 'janaina.marangon@sambatech.com.br'
    }
  ]

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
    <>
      <ProfileCard
        name="Jesse Vasconcelos"
        avatar={JesseAvatar}
        role="Tech Lead"
        email="jesse.vasconcelos@sambatech.com.br"
      />
      <TeamCard team={team} />
      <FavoritesCard favorites={favorites} />
      <BoardCard />
    </>
  )
}
