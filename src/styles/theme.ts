import { createGlobalStyle } from 'styled-components'
import * as Tokens from './tokens'

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.small};    
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar {
      width: 1rem;
      background: transparent;
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray600};
      border-radius: 1rem;
  }

  button {
    cursor: pointer;
  }
`

export const theme = Tokens
