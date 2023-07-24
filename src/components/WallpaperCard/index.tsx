import { Container, DownloadButton, DownloadContainer, Title } from './styles'
import { IWallpaperCardProps } from './types'

export const WallpaperCard = ({ title, image }: IWallpaperCardProps) => {
  return (
    <Container>
      <img src={image} alt={`plano de fundo ${title}`} />
      <DownloadContainer>
        <Title>{title}</Title>
        <DownloadButton />
      </DownloadContainer>
    </Container>
  )
}
