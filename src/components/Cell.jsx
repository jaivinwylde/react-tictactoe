import styled from "styled-components"
import Button from "./Button"

const StyledCell = styled(Button)`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  padding: 0;
  background-color: ${props => (props.winner ? "#6BC754" : "#202020")};
  transform-style: preserve-3d;

  &:hover:enabled {
    background-color: ${props => (props.winner ? "#6BC754" : "#2e2e2e")};
  }
  &:active {
    margin: 0;
    padding: 0;
  }

  & label {
    pointer-events: none;
    transform: translateZ(${props => props.pixels * 0.25}px);
    filter: drop-shadow(5px 5px 5px #121212);
  }
`

export default function Cell({ children, ...props }) {
  return (
    <StyledCell {...props}>
      <label>{children}</label>
    </StyledCell>
  )
}
