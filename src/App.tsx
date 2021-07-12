import { ThemeProvider } from "styled-components"
import { GameProvider } from "./modules/ticTacToe/context"
import { Game } from "./modules/ticTacToe/pages"
import { defaultTheme } from "./styles/theme"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GameProvider>
        <Game />
      </GameProvider>
    </ThemeProvider>
  )
}
