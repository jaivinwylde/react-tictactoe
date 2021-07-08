import styled from "styled-components"
import Button from "./button"

const StyledCell = styled(Button)`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  padding: 0;

  &:active {
    margin: 0;
    padding: 0;
  }

  p {
    transform: translateZ(25px);
    filter: drop-shadow(10px 5px 5px #121212);
  }
`

function Cell({ children, ...props }) {
  return (
    <StyledCell {...props}>
      <p>{children}</p>
    </StyledCell>
  )
}

export default Cell
