import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      highlight: string
      text: {
        primary: string
      }
      bg: string
    }
    sizes: {
      text: {
        extraLarge: number
        large: number
        medium: number
        small: number
        extraSmall: number
      }
      button: {
        width: number
        height: number
      }
    }
  }
}
