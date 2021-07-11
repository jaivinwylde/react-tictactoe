import React, { useRef, useState } from "react"
import styled from "styled-components"

interface ContainerProps {
  perspective: number
  rotateX: number
  rotateY: number
}

const Container = styled.div.attrs((props: ContainerProps) => {
  transform: `perspective(${props.perspective}px) rotateX(${
    props.rotateX
  }deg) rotateY(${props.rotateY}deg) scale(${
    props.rotateX + props.rotateY ? 1.1 : 1
  })`
})`
  transition: 150ms ease-out;
`

interface TiltWrapperProps {
  maxRotation?: number
  perspective?: number
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({
  children,
  maxRotation = 15,
  perspective = 800,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const container = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = ({
    clientX: mouseX,
    clientY: mouseY,
  }: React.MouseEvent) => {
    // Get the current container's rect and mouse position
    const { x, y, width, height } =
      container?.current?.getBoundingClientRect()!

    // Calculate the percent that we should rotate in each dimension

    // Make rotation percents between -1 and 1 for each dimension
    const xPercent = -(mouseY - (y + height / 2)) / (height / 2)
    const yPercent = (mouseX - (x + width / 2)) / (width / 2)

    setRotation({ x: xPercent * maxRotation, y: yPercent * maxRotation })
  }

  return (
    <Container
      perspective={perspective}
      rotateX={rotation.x}
      rotateY={rotation.y}
      ref={container}
      onMouseMove={e => handleMouseMove(e)}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      {children}
    </Container>
  )
}

// style={{
//   transform:
//     `perspective(${perspective}px) rotateX(${rotation.x}deg) ` +
//     `rotateY(${rotation.y}deg) scale(${
//       rotation.x + rotation.y ? 1.1 : 1
//     })`,
// }}
export default TiltWrapper
