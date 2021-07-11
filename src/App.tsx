import React from "react"
import { ThemeProvider } from "styled-components"
import Board from "./components/Board"
import { defaultTheme } from "./styles/theme"

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Board />
    </ThemeProvider>
  )
}

export default App
