import React, { useEffect, useState } from "react"
import useWindowSize from "../hooks/useWindowSize"
import Button from "./Button"
import Cell from "./Cell"
import Slider from "./Slider"
import TiltWrapper from "./TiltWrapper"
import styled from "styled-components"

interface Cells {
  [id: number]: { cellState: string | null; winner: boolean }
}

interface GameBoardProps {
  pixels: number
  grid: number
}

const GameBoard = styled.div<GameBoardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: ${props => props.pixels * props.grid + props.pixels * 0.5}px;
  height: ${props => props.pixels * props.grid + props.pixels * 0.5}px;
`

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

function generateBoard(size: number): Cells {
  // Create a vector of cells that will fill in the board grid
  const vector = [...Array(size * 3).keys()]
  const cells: Partial<Cells> = {}

  // Add to an object and give each cell their own state
  vector.forEach((cell: number) => {
    cells[cell] = { cellState: null, winner: false }
  })

  return cells as Cells
}

interface BoardProps {
  gridSize?: number
}

const Board: React.FC<BoardProps> = ({ gridSize = 3 }) => {
  const { height } = useWindowSize()

  // Start the slider in the middle
  const [pixels, setPixels] = useState(height / 5 / 2 + 15)

  const [cells, setCells] = useState(generateBoard(gridSize))
  const [turn, setTurn] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    if (height / 5 < pixels) {
      setPixels(height / 5)
    }
  }, [height, pixels])

  useEffect(() => {
    if (winner) return

    // Check for a winner
    const potential_wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    const getState = (id: number) => {
      return cells[id].cellState
    }

    for (let i = 0; i < potential_wins.length; i++) {
      const row = potential_wins[i]

      const currentState = getState(row[0])

      if (
        currentState &&
        currentState === getState(row[1]) &&
        currentState === getState(row[2])
      ) {
        const winningCells = { ...cells }

        for (const i of row) {
          winningCells[i] = { ...cells[i], winner: true }
        }

        setCells(winningCells)
        setWinner(currentState)
      }
    }
  }, [winner, cells])

  const resetBoard = () => {
    setCells(generateBoard(gridSize))
    setTurn(true)
    setWinner(null)
    setMoves(0)
  }

  const handleCellClick = (cellId: number) => {
    if (winner) return
    if (cells[cellId].cellState) return

    // Update the cell's state
    let cellState = null

    if (turn) {
      cellState = "X"
    } else {
      cellState = "O"
    }

    setMoves(moves + 1)

    setCells({ ...cells, [cellId]: { cellState, winner: false } })
    setTurn(!turn)
  }

  const renderInfoMessage = () => {
    if (winner) {
      return `${winner} has won!`
    } else if (moves === gridSize * 3) {
      return "It's a tie!"
    } else {
      return `It's ${turn ? "X" : "O"}'s turn`
    }
  }

  const handlePixelsInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPixels(+event.currentTarget.value)
  }

  return (
    <Container>
      <h3>{renderInfoMessage()}</h3>
      <TiltWrapper>
        <GameBoard pixels={pixels} grid={gridSize}>
          {Object.keys(cells).map(cell => {
            const cellId = +cell

            const { cellState: state, winner: isWinner } = cells[cellId]

            return (
              <Cell
                key={cellId}
                pixels={pixels}
                winner={isWinner}
                onClick={() => handleCellClick(cellId)}
              >
                {state ? state : ""}
              </Cell>
            )
          })}
        </GameBoard>
      </TiltWrapper>
      <Slider
        type="range"
        min="30"
        max={height / 5}
        value={pixels}
        onChange={handlePixelsInput}
      />
      <Button onClick={resetBoard}>Reset</Button>
    </Container>
  )
}

export default Board
