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
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`

export const theme = Tokens
