import styled from "styled-components"
import Button from "./Button"

interface StyledCellProps {
  pixels: number
  winner: boolean
}

interface CellProps {
  pixels: number
  winner: boolean
  onClick: () => void
}

const StyledCell = styled(Button)<StyledCellProps>`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  padding: 0;
  background-color: ${props => (props.winner ? "#6BC754" : "#202020")};

  &:hover:enabled {
    background-color: ${props => (props.winner ? "#6BC754" : "#2e2e2e")};
  }
  & label {
    filter: drop-shadow(5px 5px 5px #121212);
    cursor: pointer;
    font-size: ${props => props.pixels * 0.4}px;
  }
`

const Cell: React.FC<CellProps> = ({ children, pixels, winner, onClick }) => {
  return (
    <StyledCell pixels={pixels} winner={winner} onClick={onClick}>
      <label>{children}</label>
    </StyledCell>
  )
}

export default Cell
