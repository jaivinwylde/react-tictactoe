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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: none;
    padding: none;
    outline: none;
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
