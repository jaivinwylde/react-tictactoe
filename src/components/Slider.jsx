import styled from "styled-components"

export default styled.input`
  -webkit-appearance: none;
  width: 150px;
  height: 25px;
  background: #202020;
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #2e2e2e;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #2e2e2e;
    cursor: pointer;
  }
`
