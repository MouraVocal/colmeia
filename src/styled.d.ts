import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
    }
    fontSize: {
      small: string
      medium: string
      large: string
    }
    fontWeights: {
      regular: number
      semibold: number
      bold: number
    }
    gradients: {
      secondary: string
    }
  }
}
