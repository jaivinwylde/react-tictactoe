import "./app.css"

import { GameProvider } from "./modules/ticTacToe/context"
import { Game } from "./modules/ticTacToe/pages"

export function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}
