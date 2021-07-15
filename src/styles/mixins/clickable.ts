import { css } from "styled-components"

interface ClickableProps {
  disabled?: boolean
}

export const clickable = css<ClickableProps>`
  outline: none;
  border: none;
  font-family: Lexend, sans-serif;
  font-weight: bold;

  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};

  &:hover:enabled {
    background-color: ${props => props.theme.colors.highlight};
  }
  &:active {
    transform: scale(0.9);
  }
  &:not(:active) {
    transition: background-color 100ms ease-in-out, transform 100ms ease-out;
  }
`
