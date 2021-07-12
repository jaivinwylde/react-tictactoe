export interface CellInterface {
  cellState: string | null
  isWinner: boolean
}

export interface CellsInterface {
  [id: number]: CellInterface
}
