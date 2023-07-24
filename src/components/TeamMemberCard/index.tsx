import {
  Email,
  InfoContainer,
  Name,
  Role,
  StyledAvatar,
  TextContainer
} from './styles'
import { ITeamMemberCardProps } from './types'

export const TeamMemberCard = ({
  name,
  avatar,
  role,
  email
}: ITeamMemberCardProps) => {
  return (
    <InfoContainer>
      <StyledAvatar src={avatar} alt={`foto de perfil de ${name}`} />
      <TextContainer>
        <Name>{name}</Name>
        <Role>{role}</Role>
        <Email>{email}</Email>
      </TextContainer>
    </InfoContainer>
  )
}
