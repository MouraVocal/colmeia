import { HoneyCombBackground } from './templates/HoneyCombBackground'
import GlobalStyle from './styles/global'
import { ReactComponent as SambaLogo } from './assets/samba-logo.svg'

function App() {
  return (
    <>
      <GlobalStyle />
      <HoneyCombBackground>
        <SambaLogo />
      </HoneyCombBackground>
    </>
  )
}

export default App
