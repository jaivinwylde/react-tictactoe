import React, { useState } from "react"
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

  width: ${props => props.scale * 3 + props.scale * 0.5}rem;
  height: ${props => props.scale * 3 + props.scale * 0.5}rem;

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
function generateBoard() {
  // Create a vector of cells that will fill in the board grid
  const vector = [...Array(9).keys()]
  const cells = {}

  // Add to an object and give each cell their own state
  vector.forEach(cell => {
    cells[cell] = { cellState: null }
  })

  return cells
}

// Component
function Board() {
  const [cells, setCells] = useState(generateBoard())
  const [turn, setTurn] = useState(true)
  const scale = 5

  // Helper functions
  const resetBoard = () => {
    setCells(generateBoard())
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

    const winner = checkWinner()

    if (winner) console.log(winner)
  }

  const checkWinner = () => {}

  return (
    <Container>
      <h3>It's {turn ? "X" : "O"}'s turn</h3>
      <GameBoard scale={scale}>
        {Object.keys(cells).map(cell => {
          cell = parseInt(cell)
          const state = cells[cell].cellState

          return (
            <Cell
              key={cell}
              scale={scale}
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
