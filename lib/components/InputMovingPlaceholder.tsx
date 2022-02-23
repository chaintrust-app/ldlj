import * as React from "react"
import { colors } from "../design.config"
import styled from "styled-components/macro"
import { ReactNode } from "react"

export interface inputLabelProps {
  children: ReactNode
  hasValue: boolean
  disabled: boolean
  isFocused: boolean
}

const InputMovingPlaceholder = (props: inputLabelProps) => {
  return (
    <StyledLabel
      hasValue={props.hasValue}
      disabled={props.disabled}
      isFocused={props.isFocused}
    >
      {props.children}
    </StyledLabel>
  )
}

export default InputMovingPlaceholder

interface args {
  hasValue: boolean
  disabled: boolean
  isFocused: boolean
}

const StyledLabel = styled.label<args>`
  position: absolute;
  left: 1.25rem;
  top: ${({ hasValue }) => (!hasValue ? "2rem" : "-0.75rem")};
  transition: top 0.15s ease-in-out, color 0.5s ease-in-out,
    font-size 0.5s ease-in-out;
  background-color: ${colors.white};
  color: ${({ disabled, isFocused }) =>
    disabled
      ? colors.disabledGrey
      : isFocused
      ? colors.cornflower
      : colors.rock};

  font-size: ${({ hasValue }) => (!hasValue ? "1.75rem" : "1.5rem")};

  padding: 0 0.5rem;
  pointer-events: none;
  user-select: none;
`
