import React, { useEffect, useState } from "react"
import styled from "styled-components"

// Styles
const Cell = styled.button`
  position: relative;

  width: ${props => props.scale}rem;
  height: ${props => props.scale}rem;
  // border: 0.15rem #2e2e2e solid;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: #202020;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.scale / 3}rem;

  cursor: pointer;

  &:hover {
    background-color: #2e2e2e;
  }
  &:active {
    background-color: #202020;
  }
`

const GameBoard = styled.div`
  display: flex;

  width: ${props => props.scale * props.grid + props.scale * 0.5}rem;
  height: ${props => props.scale * props.grid + props.scale * 0.5}rem;

  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
    cells[cell] = { cellState: null }
  })

  return cells
}

// Component
function Board() {
  const scale = 5
  const gridSize = 3

  // Hooks
  const [cells, setCells] = useState(generateBoard(gridSize))
  const [turn, setTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    // Check for a winner
    const potential_wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 7],
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

      console.log(currentState)
      if (
        currentState &&
        currentState === getState(row[1]) &&
        currentState === getState(row[2])
      ) {
        setWinner(currentState)
      }
    }
  }, [cells])

  // Helper functions
  const resetBoard = () => {
    setCells(generateBoard(gridSize))
    setTurn(true)
    setWinner(null)
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

    setCells({ ...cells, [cellId]: { cellState } })
    setTurn(!turn)
  }

  return (
    <Container>
      <h3>
        {winner ? `${winner} has won!` : `It's ${turn ? "X" : "O"}'s turn`}
      </h3>
      <GameBoard scale={scale} grid={gridSize}>
        {Object.keys(cells).map(cell => {
          cell = parseInt(cell)
          const state = cells[cell].cellState

          return (
            <Cell
              key={cell}
              scale={scale}
              disabled={winner}
              onClick={() => handleCellClick(cell)}
            >
              {state ? state : ""}
            </Cell>
          )
        })}
      </GameBoard>
      <button onClick={resetBoard}>Reset</button>
    </Container>
  )
}

export default Board
