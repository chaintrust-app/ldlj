import * as React from "react";
import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { ReactComponent as Calendar } from "../assets/calendar.svg";
import { colors, sizes } from "../design.config";

interface InputDateProps {
  name: string;
  label: string;
  disabled: boolean;
  value: string;
  register: UseFormRegister<FieldValues>;
  minimum?: string;
  maximum?: string;
  onChangeValue: (value: string) => void;
}

export const InputDate = (props: InputDateProps) => {
  const {
    value,
    label,
    disabled,
    name,
    onChangeValue,
    register,
    maximum,
    minimum,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <DatePickerInput
      value={value}
      disabled={disabled}
      onFocus={() => {
        if (!isFocused) {
          setIsFocused(true);
        }
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      isFocused={isFocused}
    >
      <StyledLabel
        value={value}
        isFocused={isFocused}
        disabled={disabled}
        htmlFor={name}
      >
        {label}
      </StyledLabel>

      {/* TODO: understand font on firefox */}
      <StyledInput
        value={value}
        isFocused={isFocused}
        {...register(name)}
        type="date"
        name={name}
        id={name}
        min={minimum}
        max={maximum}
        onChange={(event) => onChangeValue(event.target.value)}
      />
      <CalendarWrapper value="" disabled={disabled} isFocused={isFocused}>
        <StyledCalendar />
      </CalendarWrapper>
    </DatePickerInput>
  );
};

interface DatePicker {
  value: string;
  disabled: boolean;
  isFocused: boolean;
}

const CalendarWrapper = styled.div<DatePicker>`
  position: absolute;
  right: 2rem;
  top: 2rem;
  max-width: 2rem;
  max-height: 2rem;

  & path {
    transition: fill 0.5s ease-in-out;
    fill: ${({ disabled, isFocused }) =>
      disabled
        ? colors.disabledGrey
        : isFocused
        ? colors.cornflower
        : colors.rock};
  }
`;

interface InputProps {
  value: string;
  isFocused: boolean;
}

const StyledCalendar = styled(Calendar)`
  width: 2rem;
  height: 2rem;
`

const StyledInput = styled.input<InputProps>`
  outline: none;
  border: none;
  border-radius: 0.75rem;
  font-family: "Roboto", sans-serif;
  padding: 1.75rem 14rem 1.75rem 1.25rem;
  color: ${colors.rock};
  font-size: 1.75rem;

  ::-webkit-calendar-picker-indicator {
    background: transparent;
    cursor: pointer;
    height: auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: auto;
  }

  ::-webkit-datetime-edit {
    visibility: ${({ value }) => (value.length === 0 ? "hidden" : "default")};
    color: ${({ disabled }) => (disabled ? colors.disabledGrey : colors.navy)};
    font-family: "Roboto", sans-serif;
    font-size: 1.75rem;
    font-weight: 50rem;
  }
`;

const StyledLabel = styled.label<DatePicker>`
  position: absolute;
  left: 1rem;
  top: ${({ value }) => (value.length === 0 ? "2rem" : "-0.75rem")};
  font-size: ${({ value }) => (value.length === 0 ? "1.75rem" : "1.5rem")};
  color: ${({ disabled, isFocused }) =>
    disabled
      ? colors.disabledGrey
      : isFocused
      ? colors.cornflower
      : colors.rock};

  font-family: "Roboto", sans-serif;
  transition: top 0.15s ease-in-out, color 0.5s ease-in-out;
  background-color: ${colors.white};
  padding: 0 0.5rem;
  pointer-events: none;
  user-select: none;
`;

const DatePickerInput = styled.div<DatePicker>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 50rem;
  width: 29.5rem;
  border-radius: 0.75rem;
  transition: border 0.5s ease-in-out;

  border: ${({ disabled, isFocused }) =>
    disabled
      ? `1px solid ${colors.disabledGrey}`
      : isFocused
      ? `1px solid ${colors.cornflower}`
      : `1px solid ${colors.rock}`};
  cursor: pointer;
  text-align: center;
  overflow: visible;
  position: relative;
  height: fit-content;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  @media (${sizes.screen.breakpoint}) {
    flex-direction: column;
  }
`;
