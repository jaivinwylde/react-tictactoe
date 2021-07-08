import styled from "styled-components"

const Button = styled.button`
  width: ${props => props.pixels}px;
  height: ${props => props.pixels}px;
  border: 0;
  margin: 0;
  padding: 0.7rem;
  background-color: #202020;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.pixels / 3}px;

  transition: background-color 100ms ease-in-out;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:enabled {
    background-color: #2e2e2e;
  }
  &:active {
    transform: scale(0.9);
  }
`

export default Button
