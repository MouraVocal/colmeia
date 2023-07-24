import { CardContainer } from '../../templates/CardTemplate/styles'
import { Container, Title } from './styles'
import { ICommunityCardProps } from './types'

export const CommunityCard = ({ image, name }: ICommunityCardProps) => {
  return (
    <CardContainer>
      <Container>
        <img src={image} alt={`imagem da comunidade ${name}`} />
        <Title>{name}</Title>
      </Container>
    </CardContainer>
  )
}
