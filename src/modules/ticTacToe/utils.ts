import { CellsInterface } from "./types"

export function generateBoard(size: number): CellsInterface {
  // Create a vector of cells that will fill in the board grid
  const vector = [...Array(size * size).keys()]
  const cells: Partial<CellsInterface> = {}

  // Add to an object and give each cell their own state
  vector.forEach((cell: number) => {
    cells[cell] = { cellState: null, isWinner: false }
  })

  return cells as CellsInterface
}
