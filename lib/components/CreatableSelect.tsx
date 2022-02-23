import * as React from "react"
import ReactCreatable from "react-select/creatable"
import styled from "styled-components/macro"
import { components, SingleValue } from "react-select"
import { ReactComponent as Down } from "../../assets/down.svg"
import { colors } from "../design.config"
import { useState } from "react"
import InputMovingPlaceholder from "./InputMovingPlaceholder";

export interface selectOption {
  value: string
  label: string
}

export interface creatableSelectProps {
  options: Array<selectOption>
  value: selectOption | null
  disabled: boolean
  onChangeCallback?: (option: selectOption | null) => void
  onCreateOption: (text: string) => void
  placeholderText: string
  formatCreateLabel: string
  inputId?: string
}

export const CreatableSelect = (props: creatableSelectProps) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <StyledCreatableContainer disabled={props.disabled} isFocused={true}>
      <ReactCreatable
        isDisabled={props.disabled}
        value={props.value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        options={props.options}
        onChange={(e: SingleValue<selectOption>) =>
          props.onChangeCallback && props.onChangeCallback(e)
        }
        onCreateOption={props.onCreateOption}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: StyledDropDownIndicator,
        }}
        formatCreateLabel={(inputValue) =>
          `${props.formatCreateLabel} ${inputValue}`
        }
        id={"creatableSelect"}
        inputId={props.inputId}
      />
      <InputMovingPlaceholder
        hasValue={props.value !== null}
        disabled={props.disabled}
        isFocused={isFocused}
      >
        {" "}
        {props.placeholderText}{" "}
      </InputMovingPlaceholder>
    </StyledCreatableContainer>
  )
}

interface StyledCreatableContainerProps {
  disabled: boolean
  isFocused: boolean
}

const StyledCreatableContainer = styled.div<StyledCreatableContainerProps>`
  position: relative;
  width: 100%;

  & div > [class*="control"] {
    flex-grow: 1;
    color: ${colors.navy};
    box-shadow: unset;
    height: 6rem;
    transition: border 0.3s ease-in-out;
    outline: none;
    border-radius: 1.25rem;
    font-size: 1.75rem;
    width: 100%;
    box-sizing: border-box;
    border: ${({ disabled, isFocused }) =>
      disabled
        ? `1px solid ${colors.disabledGrey}`
        : `1px solid ${isFocused ? colors.cornflower : colors.rock}`};
  }
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <Down />
    </components.DropdownIndicator>
  )
}
const StyledDropDownIndicator = styled(DropdownIndicator)`
  svg {
    transition: 0.5s fill ease-in-out;
    fill: ${({ disabled, isFocused }) =>
      disabled
        ? `${colors.disabledGrey}`
        : isFocused
        ? `${colors.cornflower}`
        : `${colors.rock}`};
  }
  :hover {
    cursor: pointer;
    svg {
      fill: ${colors.cornflower};
    }
  }
`
