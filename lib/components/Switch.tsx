import * as React from "react"
import styled from "styled-components/macro"
import { colors } from "../design.config"

export default Switch
export type { SwitchProps }

interface SwitchProps {
  value: boolean
  id?: string
  onToggle: () => void
}

function Switch({ id, value, onToggle }: SwitchProps) {
  return (
    <SwitchStyled
      onClick={() => {
        onToggle()
      }}
    >
      <Input id={id || "switch"} type="checkbox" checked={value} />
      <Span isToggled={value} />
    </SwitchStyled>
  )
}

interface IsToggledProps {
  isToggled: boolean
}

const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 7rem;
  height: 4rem;
`

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`

const Span = styled.label<IsToggledProps>`
  border-radius: 4rem;
  margin: 0;
  height: 4rem;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  background-color: ${(props) =>
    props.isToggled ? colors.cornflower : colors.moon};
  transition: 0.4s;
  :before {
    position: absolute;
    content: "";
    min-height: 3.5rem;
    width: 3.5rem;
    bottom: 2px;
    background-color: ${colors.white};
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.05), 0 3px 1px 0 rgba(0, 0, 0, 0.04),
      0 3px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 8px 0 rgba(0, 0, 0, 0.04);
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.isToggled ? "translateX(3.2rem);" : "translateX(2px);"};
  }
`
