import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { Container, IconsContainer, Message, Name } from './styles'
import { IBoardPostProps } from './types'

export const BoardPost = ({ name, message }: IBoardPostProps) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Message>{message}</Message>
      <IconsContainer>
        <ThumbsUp />
        <ThumbsDown />
      </IconsContainer>
    </Container>
  )
}
