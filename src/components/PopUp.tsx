import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  margin: 0 !important;

  background-color: #00000050;

  width: 100%;
  height: 100vh;
`

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;

  padding: 3rem;
  margin: 0 auto !important;

  background-color: #202020;
  color: #fff;
  border-radius: 15px;
  border: 5px solid #fff;
  font-weight: 600;
  font-size: 1rem;

  width: max-content;
  height: auto;
  min-width: 25%;
  min-height: 25%;
  max-width: 50%;
  max-height: 50vh;
  overflow: auto;
`

interface PopUpProps {
  children: React.ReactNode
  open: boolean
}

export function PopUp({ children, open }: PopUpProps) {
  return (
    <>
      {open && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </>
  )
}
