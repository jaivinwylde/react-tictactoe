import { CellsType } from "./types"

export function generateBoard(size: number): CellsType {
  // Create a vector of cells that will fill in the board grid
  const vector = [...Array(size * size).keys()]
  const cells: Partial<CellsType> = {}

  // Add to an object and give each cell their own state
  vector.forEach((cell: number) => {
    cells[cell] = { cellState: null, isWinner: false }
  })

  return cells as CellsType
}
