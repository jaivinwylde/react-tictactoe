import styled from "styled-components"
import { TiltWrapper } from "../../../components"
import { GameBoard } from "../components"
import { useGame } from "../context/GameContext"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;

  input,
  div {
    margin: 1rem;
  }
`

export function Game() {
  const { turn, moves, winner, gridSize } = useGame()

  const renderInfoMessage = () => {
    if (winner) {
      return `${winner} has won!`
    } else if (moves === gridSize * 3) {
      return "It's a tie!"
    } else {
      return `It's ${turn ? "X" : "O"}'s turn`
    }
  }

  return (
    <Container>
      <h1>{renderInfoMessage()}</h1>
      <TiltWrapper>
        <GameBoard gridSize={gridSize} />
      </TiltWrapper>
    </Container>
  )
}
