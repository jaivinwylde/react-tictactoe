import styled from "styled-components"

const StyledTitle = styled.h1`
  font-weight: 600;
`

interface TitleType {
  children: React.ReactNode
}

export function Title({ children }: TitleType) {
  return <StyledTitle>{children}</StyledTitle>
}
