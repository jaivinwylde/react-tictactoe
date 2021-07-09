import styled from "styled-components"

export default styled.input`
  -webkit-appearance: none;
  width: 10rem;
  height: 1.5rem;
  background: #202020;
  outline: none;
  border-radius: 100px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border-radius: 100px;
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    background: #2e2e2e;
    cursor: pointer;

    &:active {
      transform: scale(0.8);
    }
  }

  &::-moz-range-thumb {
    outline: none;
    border-radius: 100px;
    width: 1.5rem;
    height: 1.5rem;
    background: #2e2e2e;
    cursor: pointer;

    &:active {
      transform: scale(0.8);
    }
  }
`
