import { useState, useEffect } from "react"

function getMousePos(event) {
  const { clientX: x, clientY: y } = event

  return { x, y }
}

export default function useMousePos() {
  const [mousePos, setMousePos] = useState({ x: null, y: null })

  useEffect(() => {
    function handleMove(event) {
      setMousePos(getMousePos(event))
    }

    window.addEventListener("mousemove", handleMove)

    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return mousePos
}
