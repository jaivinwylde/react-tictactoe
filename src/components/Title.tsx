import styled from "styled-components"

const StyledTitle = styled.h1`
  font-weight: 600;
`

interface TitleProps {
  children: React.ReactNode
}

export function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>
}
