import { WallpaperCard } from '../../components/WallpaperCard'
import Wallpaper1 from '../../assets/wallpapers/wallpaper1.png'
import Wallpaper2 from '../../assets/wallpapers/wallpaper2.png'
import Wallpaper3 from '../../assets/wallpapers/wallpaper3.png'
import Wallpaper4 from '../../assets/wallpapers/wallpaper4.png'
import Wallpaper5 from '../../assets/wallpapers/wallpaper5.png'
import Wallpaper6 from '../../assets/wallpapers/wallpaper6.png'
import { CardTitle } from '../../components/CardTitle'
import { Container } from './styles'

export const PlanosDeFundo = () => {
  const wallpapers = [
    {
      title: 'wallpaper 1',
      image: Wallpaper1
    },
    {
      title: 'wallpaper 2',
      image: Wallpaper2
    },
    {
      title: 'wallpaper 3',
      image: Wallpaper3
    },
    {
      title: 'wallpaper 4',
      image: Wallpaper4
    },
    {
      title: 'wallpaper 5',
      image: Wallpaper5
    },
    {
      title: 'wallpaper 6',
      image: Wallpaper6
    }
  ]

  return (
    <div>
      <CardTitle>Planos de Fundo</CardTitle>
      <Container>
        {wallpapers.map(wallpaper => {
          return (
            <WallpaperCard
              key={wallpaper.title}
              title={wallpaper.title}
              image={wallpaper.image}
            />
          )
        })}
      </Container>
    </div>
  )
}
