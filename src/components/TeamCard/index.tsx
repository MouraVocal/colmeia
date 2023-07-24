import { CardTemplate } from '../../templates/CardTemplate'
import { CardTitle } from '../CardTitle'
import { TeamMemberCard } from '../TeamMemberCard'
import { Column } from './styles'
import { ITeamCardProps } from './types'

export const TeamCard = ({ team }: ITeamCardProps) => {
  return (
    <CardTemplate>
      <Column>
        <CardTitle>MEU TIME</CardTitle>
        {team.map(member => {
          return (
            <TeamMemberCard
              key={member.name}
              name={member.name}
              avatar={member.avatar}
              role={member.role}
              email={member.email}
            />
          )
        })}
      </Column>
    </CardTemplate>
  )
}
