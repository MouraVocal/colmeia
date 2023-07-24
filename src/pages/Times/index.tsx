import { TeamCard } from '../../components/TeamCard'
import Biamara from '../../assets/avatar/biamara.png'
import Daiana from '../../assets/avatar/daiana.png'
import Diego from '../../assets/avatar/diego.png'
import Janaina from '../../assets/avatar/janaina.png'

export const Times = () => {
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

  return (
    <>
      <TeamCard team={team} />
      <TeamCard team={team} />
      <TeamCard team={team} />
      <TeamCard team={team} />
    </>
  )
}
