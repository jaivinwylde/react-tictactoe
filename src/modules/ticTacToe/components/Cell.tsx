import styled from "styled-components"
import { clickable } from "styles/mixins"

interface StyledCellProps {
  pixels: number
  isWinner: boolean
}

interface CellProps {
  children: React.ReactNode
  pixels: number
  isWinner: boolean
  onClick(): void
}

const StyledCell = styled.button<StyledCellProps>`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  padding: 0;

  background-color: ${props => (props.isWinner ? "#6BC754" : "#202020")};
  color: #fff;

  ${clickable}

  &:hover:enabled {
    background-color: ${props => (props.isWinner ? "#6BC754" : "#2e2e2e")};
  }
  & label {
    filter: drop-shadow(5px 5px 5px #121212);
    cursor: pointer;
    font-size: ${props => props.pixels * 0.4}px;
  }
`

export function Cell({ children, pixels, isWinner, onClick }: CellProps) {
  return (
    <StyledCell pixels={pixels} isWinner={isWinner} onClick={onClick}>
      <label>{children}</label>
    </StyledCell>
  )
}
