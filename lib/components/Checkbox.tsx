import * as React from "react"
import styled from "styled-components/macro"

import { colors } from "../../styles/design.config"
import * as Commons from "../../components/Commons"
import { ReactComponent as CheckedSvg } from "../../assets/checked.svg"

interface CheckboxProps {
  label: string
  name: string
  isChecked: boolean
  onChange: () => void
  id?: string
  disabled?: boolean
}

export const Checkbox = ({
  label,
  name = "",
  isChecked,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  return (
    <div>
      <HiddenInput
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={isChecked}
      />
      <StyledInput
        onClick={onChange}
        htmlFor={name}
        data-cy={name}
        aria-disabled={disabled}
      >
        <StyledSquare checked={isChecked} disabled={disabled}>
          {isChecked && (
            <StyledChecked>
              <CheckedSvg />
            </StyledChecked>
          )}
        </StyledSquare>
        <Commons.Spacer height={0} width={1} />
        <StyledInputLabel disabled={disabled}>{label}</StyledInputLabel>
      </StyledInput>
    </div>
  )
}

interface CheckedProp {
  checked: boolean
  disabled?: boolean
}

interface DisabledProp {
  disabled: boolean
}

const HiddenInput = styled.input`
  display: none;
`
const StyledInput = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const StyledSquare = styled.div<CheckedProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 2rem;
  width: 2rem;
  transition: all 0.5s ease-in-out;

  background-color: ${(props) =>
    props.checked
      ? colors.shamrock
      : props.disabled
      ? colors.disabledGrey
      : colors.rock};
  border-radius: 0.5rem;
`
const StyledInputLabel = styled.label<DisabledProp>`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 1.75rem;
  user-select: none;
  transition: all 0.3s ease-in-out;

  color: ${({ disabled }) => (disabled ? colors.disabledGrey : colors.navy)};
`

const StyledChecked = styled.div`
  display: flex;
  user-select: none;
  & svg {
    fill: ${colors.white};
  }
`
