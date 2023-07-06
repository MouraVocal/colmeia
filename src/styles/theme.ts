import { createGlobalStyle } from 'styled-components'
import { colors, fontSize, fontWeights, gradients } from './tokens'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`

export const theme = {
  colors,
  fontSize,
  gradients,
  fontWeights
}
