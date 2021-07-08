import React, { useEffect, useState } from "react"
import styled from "styled-components"
import useWindowSize from "../hooks/useWindowSize"
import Cell from "./cell"

// Styles
const GameBoard = styled.div`
  display: flex;

  width: ${props => props.pixels * props.grid + props.pixels * 0.5}px;
  height: ${props => props.pixels * props.grid + props.pixels * 0.5}px;

  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;

  height: 100vh;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Helper functions
function generateBoard(size) {
  // Create a vector of cells that will fill in the board grid
  const vector = [...Array(size * 3).keys()]
  const cells = {}

  // Add to an object and give each cell their own state
  vector.forEach(cell => {
    cells[cell] = { cellState: null, winner: false }
  })

  return cells
}

// Component
function Board() {
  const gridSize = 3

  // Hooks
  const { height } = useWindowSize()

  // Start the slider in the middle
  const [pixels, setPixels] = useState(height / 5 / 2 + 15)

  const [cells, setCells] = useState(generateBoard(gridSize))
  const [turn, setTurn] = useState(true)
  const [winner, setWinner] = useState(null)
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

    const getState = id => {
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

  // Helper functions
  const resetBoard = () => {
    setCells(generateBoard(gridSize))
    setTurn(true)
    setWinner(null)
    setMoves(0)
  }

  const handleCellClick = cellId => {
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

  const handlePixelsInput = ({ currentTarget: input }) => {
    setPixels(input.value)
  }

  return (
    <Container>
      <h3>{renderInfoMessage()}</h3>
      <GameBoard pixels={pixels} grid={gridSize}>
        {Object.keys(cells).map(cell => {
          cell = parseInt(cell)
          const { cellState: state, winner: isWinner } = cells[cell]

          return (
            <Cell
              key={cell}
              pixels={pixels}
              winner={isWinner}
              disabled={winner || state}
              onClick={() => handleCellClick(cell)}
            >
              {state ? state : ""}
            </Cell>
          )
        })}
      </GameBoard>
      <input
        type="range"
        min="30"
        max={height / 5}
        value={pixels}
        onChange={handlePixelsInput}
      />
      <button onClick={resetBoard}>Reset</button>
    </Container>
  )
}

export default Board
