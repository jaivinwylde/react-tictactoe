import styled from "styled-components"
import Button from "./Button"

interface CellProps {
  pixels: number
  winner: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement> &
    ((cellId: number) => void)
}

const StyledCell = styled(Button)<CellProps>`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  padding: 0;
  background-color: ${props => (props.winner ? "#6BC754" : "#202020")};

  &:hover:enabled {
    background-color: ${props => (props.winner ? "#6BC754" : "#2e2e2e")};
  }
  &:active {
    margin: 0;
    padding: 0;
  }

  & label {
    filter: drop-shadow(5px 5px 5px #121212);
    font-size: ${props => props.theme.sizes.text.medium}px;
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
