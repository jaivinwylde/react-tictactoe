import { Button, TiltWrapper } from "components"
import { Title } from "components"
import { PopUp } from "components/PopUp"
import { useEffect, useState } from "react"
import styled from "styled-components"

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
  const { turn, moves, winner, gridSize, handleReset } = useGame()
  const [isOver, setIsOver] = useState(false)

  useEffect(() => {
    setIsOver(!!winner)
  }, [winner])

  const renderInfoMessage = () => {
    if (winner) {
      return `${winner} has won!`
    } else if (moves === gridSize * 3) {
      if (!isOver) {
        setIsOver(true)
      }

      return "It's a tie!"
    } else {
      return `It's ${turn ? "X" : "O"}'s turn`
    }
  }

  return (
    <Container>
      <PopUp open={isOver}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Title>{renderInfoMessage()}</Title>
          <Button
            onClick={() => {
              setIsOver(false)
              handleReset()
            }}
          >
            Restart the game
          </Button>
        </div>
      </PopUp>
      <Title>{renderInfoMessage()}</Title>
      <TiltWrapper>
        <GameBoard gridSize={gridSize} />
      </TiltWrapper>
    </Container>
  )
}
