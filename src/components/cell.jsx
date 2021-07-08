import styled from "styled-components"

const Cell = styled.button`
  position: relative;

  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: ${props => (props.winner ? "#2e2e2e" : "#202020")};
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.pixels / 3}px;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:enabled {
    background-color: #2e2e2e;
  }
  &:active {
    background-color: #202020;
  }
`

export default Cell
