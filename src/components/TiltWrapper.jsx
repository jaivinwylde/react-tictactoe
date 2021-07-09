import React, { useRef, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  transform-style: preserve-3d;
  transition: 150ms ease-out;
`

export default function TiltWrapper({ children, maxRotation = 15 }) {
  //Hooks
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const container = useRef(null)

  const handleMouseMove = ({ clientX: mouseX, clientY: mouseY }) => {
    // Get the current container's rect and mouse position
    const { x, y, width, height } = container.current.getBoundingClientRect()

    // Calculate the percent that we should rotate in each dimension

    // Makes numbers between -1 and 1 for each dimension
    const xPercent = -(mouseY - (y + height / 2)) / (height / 2)
    const yPercent = (mouseX - (x + width / 2)) / (width / 2)

    setRotation({ x: xPercent * maxRotation, y: yPercent * maxRotation })
  }

  return (
    <Container
      ref={container}
      onMouseMove={e => handleMouseMove(e)}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
      style={{
        transform:
          `perspective(800px) rotateX(${rotation.x}deg) ` +
          `rotateY(${rotation.y}deg) scale(${
            rotation.x + rotation.y ? 1.1 : 1
          })`,
      }}
    >
      {children}
    </Container>
  )
}
