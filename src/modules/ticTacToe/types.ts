export interface CellType {
  cellState: string | null
  isWinner: boolean
}

export interface CellsType {
  [id: number]: CellType
}
