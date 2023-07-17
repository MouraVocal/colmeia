import { useNavigate } from 'react-router-dom'
import { StyledBee } from './styles'

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <StyledBee onClick={() => navigate('/')} />
    </div>
  )
}
