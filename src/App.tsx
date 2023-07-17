import { RouterProvider } from 'react-router-dom'

import { HoneyCombBackground } from './templates/HoneyCombBackground'
import GlobalStyle, { theme } from './styles/theme'
import { ThemeProvider } from 'styled-components'
import { router } from './router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HoneyCombBackground>
        <RouterProvider router={router} />
      </HoneyCombBackground>
    </ThemeProvider>
  )
}

export default App
