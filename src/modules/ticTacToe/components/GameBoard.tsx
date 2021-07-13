import { Cell } from "./Cell"
import styled from "styled-components"
import { useGame } from "../context"

interface StyledGameBoardProps {
  pixels: number
  grid: number
}

const StyledGameBoard = styled.div<StyledGameBoardProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: ${props => props.pixels * props.grid + props.pixels * 0.5}px;
  height: ${props => props.pixels * props.grid + props.pixels * 0.5}px;
`

interface GameBoardProps {
  scale?: number
  gridSize?: number
}

export function GameBoard({ scale = 1, gridSize = 3 }: GameBoardProps) {
  const pixels = 120 * scale

  const { cells, handleMove } = useGame()

  return (
    <StyledGameBoard pixels={pixels} grid={gridSize}>
      {Object.keys(cells).map(cell => {
        const cellId = +cell
        const { cellState: state, isWinner } = cells[cellId]

        return (
          <Cell
            key={cellId}
            pixels={pixels}
            isWinner={isWinner}
            onClick={() => handleMove(cellId)}
          >
            {state ? state : ""}
          </Cell>
        )
      })}
    </StyledGameBoard>
  )
}
