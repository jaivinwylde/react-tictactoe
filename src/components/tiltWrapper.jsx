import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import useMousePos from "../hooks/useMousePos"

const Container = styled.div`
  transform-style: preserve-3d;
  transition: 150ms ease-out;
`

function TiltWrapper({ children }) {
  const maxRotation = 15

  //Hooks
  const { x: mouseX, y: mouseY } = useMousePos()
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const container = useRef(null)

  useEffect(() => {
    const { x, y, width, height } = container.current.getBoundingClientRect()

    let xPercent = (mouseY - (y + height / 2)) / (height / 2)
    xPercent = Math.min(xPercent, 1)
    xPercent = -Math.max(xPercent, -1)

    let yPercent = (mouseX - (x + width / 2)) / (width / 2)
    yPercent = Math.min(yPercent, 1)
    yPercent = Math.max(yPercent, -1)

    if (xPercent > -1 && xPercent < 1 && yPercent > -1 && yPercent < 1) {
      setRotation({ x: xPercent * maxRotation, y: yPercent * maxRotation })
    } else {
      setRotation({ x: 0, y: 0 })
    }
  }, [mouseX, mouseY])

  return (
    <Container
      ref={container}
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

export default TiltWrapper
