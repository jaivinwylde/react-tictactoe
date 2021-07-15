import styled from "styled-components"
import { clickable } from "styles/mixins"

export const Button = styled.button`
  width: auto;
  height: auto;

  padding: 0.7rem;
  background-color: ${props => props.theme.colors.text.primary};
  color: ${props => props.theme.colors.bg};
  font-size: ${props => props.theme.sizes.text.extraSmall}px;
  border-radius: 8px;

  ${clickable}

  &:hover:enabled {
    background-color: #8c8c8c;
  }
`
