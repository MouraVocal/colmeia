import { HoneyCombBackground } from './templates/HoneyCombBackground'
import GlobalStyle, { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { LoginForm } from './components/LoginForm'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HoneyCombBackground>
        <LoginForm />
      </HoneyCombBackground>
    </ThemeProvider>
  )
}

export default App
