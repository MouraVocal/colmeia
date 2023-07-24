import { CardTemplate } from '../../templates/CardTemplate'
import { BoardPost } from '../BoardPost'
import { CardTitle } from '../CardTitle'
import { Column, Container, StyledButton, StyledInput } from './styles'

export const BoardCard = () => {
  const posts = [
    {
      id: '1',
      name: 'Diego Moura',
      message: 'Seja muito bem-vindx Beezer!'
    },
    {
      id: '2',
      name: 'Daiana Oliveira',
      message: 'Que bom que você chegou!!'
    }
  ]
  return (
    <CardTemplate>
      <Column>
        <CardTitle>MURAL</CardTitle>
        <Container>
          {posts.map(post => {
            return (
              <BoardPost
                key={post.id}
                name={post.name}
                message={post.message}
              />
            )
          })}
          <StyledInput />
          <StyledButton>Enviar</StyledButton>
        </Container>
      </Column>
    </CardTemplate>
  )
}
