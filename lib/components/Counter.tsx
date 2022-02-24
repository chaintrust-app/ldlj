import * as React from "react"
import styled from "styled-components"

import { colors } from "../design.config"

interface CounterProps {
  value: number
  onPlus: () => void
  onMinus: () => void
  min?: number
}

export const Counter = ({ value, onPlus, onMinus, min = 1 }: CounterProps) => {
  return (
    <Wrapper>
      <CounterButton
        onClick={() => {
          if (value <= min) {
            return
          }
          onMinus()
        }}
      >
        -
      </CounterButton>
      <div>{value}</div>
      <CounterButton onClick={onPlus}>+</CounterButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16.5rem;
  height: 6.25rem;
  box-sizing: border-box;
  border: 1px solid ${colors.rock};
  border-radius: 1.25rem;
  padding: 1rem;
  font-size: 2rem;
`

const CounterButton = styled.button`
  border: 2px solid ${colors.rock};
  color: ${colors.rock};
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 2rem;
  width: 2.25rem;
  height: 2.25rem;
  background-color: ${colors.white};
  transition: all 0.3s ease-in-out;
  :hover {
    color: ${colors.white};
    border: 2px solid ${colors.cornflower};
    background-color: ${colors.cornflower};
  }
`
