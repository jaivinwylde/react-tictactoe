import React from "react"
import ReactDOM from "react-dom"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"

import { App } from "./App"
import { defaultTheme } from "./styles/theme"

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text.primary};
  }

  body {
    font-family: Lexend, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
