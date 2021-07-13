import styled from "styled-components"
import { clickable } from "styles/mixins"

export const Button = styled.button`
  width: ${props => props.theme.sizes.button.width}px;
  height: ${props => props.theme.sizes.button.height}px;
  padding: 0.7rem;
  background-color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.sizes.text.medium / 3}px;

  ${clickable}
`
