import { HoneyCombBackground } from './templates/HoneyCombBackground'
import GlobalStyle, { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { ReactComponent as SambaLogo } from './assets/samba-logo.svg'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HoneyCombBackground>
        <SambaLogo />
      </HoneyCombBackground>
    </ThemeProvider>
  )
}

export default App
