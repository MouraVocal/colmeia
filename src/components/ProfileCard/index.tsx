import { CardTemplate } from '../../templates/CardTemplate'
import {
  Column,
  Description,
  Email,
  Greetings,
  InfoContainer,
  Role,
  StyledAvatar,
  TextContainer
} from './styles'
import { IProfileCardProps } from './types'

export const ProfileCard = ({
  name,
  avatar,
  email,
  role
}: IProfileCardProps) => {
  return (
    <CardTemplate>
      <Column>
        <InfoContainer>
          <StyledAvatar src={avatar} alt={`foto de perfil de ${name}`} />
          <TextContainer>
            <Greetings>
              Olá,
              <br />
              {name}
            </Greetings>
            <Role>{role}</Role>
            <Email>{email}</Email>
          </TextContainer>
        </InfoContainer>
        <Description>
          Aqui você encontra os caminhos para a sua jornada na Sambatech!
        </Description>
      </Column>
    </CardTemplate>
  )
}
