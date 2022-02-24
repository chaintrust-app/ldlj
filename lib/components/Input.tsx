import * as React from "react";
import {
  ChangeEventHandler,
  forwardRef,
  MutableRefObject,
  RefObject,
} from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { boxShadow, colors } from "../design.config";
import { ReactComponent as Exclamation } from "../assets/exclamation-mark.svg";
import { ReactComponent as Remove } from "../assets/remove.svg";
import { ReactComponent as Check } from "../assets/check.svg";

export interface BaseInputProps {
  label: string;
  name?: string;
  register?: UseFormRegister<FieldValues>;
  validations?: RegisterOptions;
  type?: "password" | "text" | "checkbox" | "email" | "number";
  value: string;
  showError?: boolean;
  showWarning?: boolean;
  showSuccess?: boolean;
  autoFocus?: boolean;
  id?: string;
  isPrefilled?: boolean;
  disabled?: boolean;
  bypassDisabled?: boolean;
  maxWidth?: number | "auto";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  borderRadius?: number;
  maxLength?: number;
  max?: string;
  min?: string;
  placeholder?: string;
  shadowed?: boolean;
  noBorder?: boolean;
  readOnly?: boolean;
  dataCy?: string;
  onInput?: () => void;
}

interface InputProps extends BaseInputProps {
  suffix?: JSX.Element;
}

type DisplayedSuffixType = Pick<
  InputProps,
  "suffix" | "showWarning" | "showError" | "showSuccess"
>;
const displayedSuffix = ({
  suffix,
  showWarning,
  showError,
  showSuccess,
}: DisplayedSuffixType): JSX.Element | undefined => {
  if (suffix) {
    return suffix;
  }
  if (showError) {
    return <Remove />;
  }
  if (showWarning) {
    return <Exclamation />;
  }
  if (showSuccess) {
    return <Check />;
  }
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef<RefObject<HTMLInputElement>, InputProps>(
  (
    {
      label,
      name = "",
      type = "text",
      suffix,
      register,
      validations,
      value,
      showError = false, // TODO Refactor into "Status" option attribute
      showWarning = false,
      showSuccess = false,
      autoFocus = false,
      id = "",
      isPrefilled = false,
      disabled = false,
      bypassDisabled = false,
      maxWidth = "auto",
      onChange,
      required = true,
      borderRadius = 1.25,
      maxLength,
      max,
      min,
      placeholder,
      shadowed = false,
      noBorder = false,
      readOnly,
      dataCy,
      onInput,
    }: InputProps,
    forwardRef
  ) => {
    if (!register) {
      return (
        <StyledInputWrapper
          showError={showError}
          showWarning={showWarning}
          showSuccess={showSuccess}
          disabled={disabled}
          maxWidth={maxWidth}
          bypassDisabled={bypassDisabled}
          shadowed={shadowed}
        >
          <StyledInput
            type={type}
            showError={showError}
            showWarning={showWarning}
            showSuccess={showSuccess}
            autoFocus={autoFocus}
            disabled={disabled}
            onChange={onChange}
            borderRadius={borderRadius}
            bypassDisabled={bypassDisabled}
            value={value}
            onInput={onInput}
            id={id}
            maxLength={maxLength}
            max={max}
            min={min}
            placeholder={placeholder}
            noBorder={noBorder}
            readOnly={readOnly}
            data-cy={dataCy}
          />
          <StyledLabel
            value={value || ""}
            showError={showError}
            showWarning={showWarning}
            showSuccess={showSuccess}
            isPrefilled={isPrefilled}
            disabled={disabled}
            bypassDisabled={bypassDisabled}
          >
            {label}
          </StyledLabel>
          <SuffixWrapper>
            {displayedSuffix({ suffix, showWarning, showError, showSuccess })}
          </SuffixWrapper>
        </StyledInputWrapper>
      );
    }

    const { ref, ...rest } = register(name, validations);

    return (
      <StyledInputWrapper
        showError={showError}
        showWarning={showWarning}
        showSuccess={showSuccess}
        disabled={disabled}
        maxWidth={maxWidth}
        bypassDisabled={bypassDisabled}
        shadowed={shadowed}
      >
        <StyledInput
          {...rest}
          ref={(e) => {
            ref(e);
            if (forwardRef && e) {
              const inputRef =
                forwardRef as unknown as MutableRefObject<HTMLInputElement>;
              inputRef.current = e;
            }
          }}
          required={required}
          type={type}
          showWarning={showWarning}
          showError={showError}
          showSuccess={showSuccess}
          autoFocus={autoFocus}
          disabled={disabled}
          onInput={onInput}
          borderRadius={borderRadius}
          bypassDisabled={bypassDisabled}
          id={id}
          maxLength={maxLength}
          max={max}
          min={min}
          placeholder={placeholder}
          noBorder={noBorder}
          readOnly={readOnly}
          data-cy={dataCy}
        />
        <StyledLabel
          value={value || ""}
          showError={showError}
          showWarning={showWarning}
          showSuccess={showSuccess}
          disabled={disabled}
          isPrefilled={isPrefilled}
          bypassDisabled={bypassDisabled}
        >
          {label}
        </StyledLabel>
        <SuffixWrapper>
          {displayedSuffix({ suffix, showWarning, showError, showSuccess })}
        </SuffixWrapper>
      </StyledInputWrapper>
    );
  }
);

interface LabelWithValue {
  value: string;
  showError: boolean;
  showWarning: boolean;
  showSuccess: boolean;
  isPrefilled: boolean;
  disabled: boolean;
  bypassDisabled: boolean;
}

interface InputWithError {
  bypassDisabled: boolean;
  showWarning: boolean;
  showError: boolean;
  showSuccess: boolean;
  disabled: boolean;
  maxWidth?: number | "auto";
  borderRadius?: number;
  shadowed?: boolean;
  noBorder?: boolean;
}

const StyledInputWrapper = styled.div<InputWithError>`
  width: 100%;
  max-width: ${({ maxWidth }) =>
    maxWidth === "auto" ? "auto" : maxWidth + "rem"};
  display: flex;
  position: relative;
  font-family: "Roboto", sans-serif;
  border-radius: 0.75rem;
  box-shadow: ${({ shadowed }) => (shadowed ? `${boxShadow}` : "none")};

  & input:focus {
    + label {
      color: ${(props) =>
        props.showWarning
          ? colors.orange
          : props.showError
          ? colors.amaranth
          : props.showSuccess
          ? colors.shamrock
          : colors.cornflower};
      top: -0.75rem;
      font-size: 1.5rem;
    }

    + label + div > div > svg > path {
      fill: ${(props) =>
        props.showWarning
          ? colors.orange
          : props.showError
          ? colors.amaranth
          : props.showSuccess
          ? colors.shamrock
          : colors.cornflower};
    }
  }
`;

const SuffixWrapper = styled.div`
  position: absolute;
  right: 1.25rem;
  top: 2rem;
  max-height: 2rem;
  max-width: 2rem;
`;

const StyledLabel = styled.label<LabelWithValue>`
  position: absolute;
  left: 1.25rem;
  top: ${({ value, isPrefilled }) =>
    isPrefilled ? "-0.75rem" : value.length === 0 ? "2rem" : "-0.75rem"};
  font-size: ${({ value, isPrefilled }) =>
    isPrefilled ? "1.5rem" : value.length === 0 ? "1.75rem" : "1.5rem"};

  transition: top 0.15s ease-in-out, color 0.5s ease-in-out,
    font-size 0.15s ease-in-out;

  background-color: ${colors.white};
  color: ${(props) =>
    props.showWarning
      ? colors.orange
      : props.showError
      ? colors.amaranth
      : props.showSuccess
      ? colors.shamrock
      : props.bypassDisabled
      ? colors.rock
      : props.disabled
      ? colors.disabledGrey
      : colors.rock};

  padding: 0 0.5rem;
  pointer-events: none;
  user-select: none;
`;

const StyledInput = styled.input<InputWithError>`
  flex: 1;
  height: 6rem;
  transition: border 0.3s ease-in-out;
  outline: none;
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
  font-size: 1.75rem;
  width: 100%;
  padding: ${(props) =>
    props.type === "password" ? `0 3.5rem 0 1.75rem` : `0 1.75rem 0 1.75rem`};
  border: ${(props) =>
    props.noBorder
      ? `0px solid ${colors.rock};`
      : props.showWarning
      ? `1px solid ${colors.orange};`
      : props.showError
      ? `1px solid ${colors.amaranth};`
      : props.showSuccess
      ? `1px solid ${colors.shamrock};`
      : props.bypassDisabled
      ? `1px solid ${colors.rock};`
      : props.disabled
      ? `1px solid ${colors.disabledGrey}`
      : `1px solid ${colors.rock};`};
  color: ${(props) =>
    props.bypassDisabled
      ? colors.navy
      : props.disabled
      ? colors.disabledGrey
      : colors.navy};
  box-sizing: border-box;
  background-color: ${colors.white};

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: transparent;
    transition: 0.5s color ease-in-out;
  }
  :focus {
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: ${colors.rock};
    }
    outline: none;

    border: ${(props) =>
      props.showWarning
        ? `1px solid ${colors.orange};`
        : props.showError
        ? `1px solid ${colors.amaranth};`
        : props.showSuccess
        ? `1px solid ${colors.shamrock};`
        : `1px solid ${colors.cornflower};`};
  }
`;
