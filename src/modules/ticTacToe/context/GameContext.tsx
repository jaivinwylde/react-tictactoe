import { createContext, useContext, useEffect, useState } from "react"

import type { CellsType, CellType } from "../types"
import { generateBoard } from "../utils"

interface ContextType {
  gridSize: number
  cells: CellsType
  turn: boolean
  winner: string | null
  moves: number
  handleMove(cellId: number): void
  handleReset(): void
}

const GameContext = createContext<ContextType>({
  gridSize: 3,
  cells: {},
  turn: true,
  winner: null,
  moves: 0,
  handleMove: () => null,
  handleReset: () => null,
})

export const useGame = () => useContext(GameContext)

interface ProviderProps {
  children: React.ReactNode
}

export function GameProvider({ children }: ProviderProps) {
  const gridSize = 3

  const [cells, setCells] = useState(generateBoard(gridSize))
  const [turn, setTurn] = useState(true)
  const [winner, setWinner] = useState<string | null>(null)
  const [moves, setMoves] = useState(0)

  useEffect(() => {
    if (winner) {
      return
    }

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

    // Check for all winning patterns
    for (let i = 0; i < potential_wins.length; i++) {
      const row = potential_wins[i]

      const currentState = getState(row[0])

      if (
        currentState &&
        currentState === getState(row[1]) &&
        currentState === getState(row[2])
      ) {
        // We've found a winning pattern
        const winningCells = { ...cells }

        for (const i of row) {
          winningCells[i] = { ...cells[i], isWinner: true }
        }

        setCells(winningCells)
        setWinner(currentState)
      }
    }
  }, [cells, winner])

  const handleMove = (cellId: number) => {
    // Handle the return null cases
    if (winner) {
      return null
    }

    if (cells[cellId].cellState) {
      return null
    }

    let cellState = null

    // Get the player
    if (turn) {
      cellState = "X"
    } else {
      cellState = "O"
    }

    const newCell: CellType = { cellState, isWinner: false }

    // Update the state
    setMoves(moves => moves + 1)
    setTurn(turn => !turn)
    setCells(cells => ({ ...cells, [cellId]: newCell }))
  }

  const handleReset = () => {
    setCells(generateBoard(gridSize))
    setTurn(true)
    setWinner(null)
    setMoves(0)
  }

  return (
    <GameContext.Provider
      value={{ turn, winner, moves, gridSize, cells, handleMove, handleReset }}
    >
      {children}
    </GameContext.Provider>
  )
}
