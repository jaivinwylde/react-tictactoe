import styled from "styled-components"

interface ButtonProps {
  disabled?: boolean
}

export default styled.button<ButtonProps>`
  width: ${props => props.theme.sizes.button.width}px;
  height: ${props => props.theme.sizes.text.height}px;
  border: 0;
  padding: 0.7rem;
  background-color: #202020;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: ${props => props.theme.sizes.text.medium / 3}px;

  transition: background-color 100ms ease-in-out;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:enabled {
    background-color: #2e2e2e;
  }
  &:active {
    transform: scale(0.9);
  }
`
