import * as React from "react";
import { components, default as ReactSelect } from "react-select";
import { colors } from "../design.config";
import styled from "styled-components";
import { IntlShape } from "react-intl";
import { RowCheckbox } from "./RowCheckbox";
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Option = (props: any) => {
  return (
    <components.Option {...props}>
      <StyledDiv>
        <RowCheckbox
          label={props.label}
          name={props.label}
          isChecked={props.isSelected}
          onChange={() => {}}
        />
      </StyledDiv>
    </components.Option>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

interface MultiSelectProps<T> {
  options: Array<{ value: T; label: string }>;
  value: ReadonlyArray<{ value: T | "all"; label: string }> | null;
  field: unknown;
  label: string;
  domain: string;
  optionType: string;
  disabled?: boolean;
  onChange?: (
    newValue: ReadonlyArray<{ value: T | "all"; label: string }>
  ) => void;
  autoFocus?: boolean;
  intl: IntlShape;
  canToggleAllOptions?: boolean;
}

export function MultiSelect<T>(props: MultiSelectProps<T>) {
  const {
    options,
    value,
    field,
    label,
    domain,
    optionType,
    disabled,
    onChange,
    intl,
    canToggleAllOptions,
  } = props;

  const [selectAll, setSelectAll] = useState(false);

  const isValue: boolean = value ? value.length > 0 : false;

  const selectAllOption: { value: "all"; label: string } = {
    label: "Sélectionner tout",
    value: "all",
  };
  const allOptions =
    options.length > 1 && canToggleAllOptions
      ? [selectAllOption, ...options]
      : options;

  const CustomPlaceholder = () => <></>;

  return (
    <StyledSelect value={value} disabled={disabled || false} isValue={isValue}>
      <ReactSelect
        {...field}
        isMulti
        isDisabled={disabled}
        options={allOptions}
        value={value}
        components={{
          Placeholder: CustomPlaceholder,
          Option: Option,
        }}
        styles={{
          option: (defaultOptions, selectState) => ({
            ...defaultOptions,
            backgroundColor: selectState.isSelected
              ? colors.mist
              : colors.white,
          }),
          control: (defaultOptions) => ({
            ...defaultOptions,
            backgroundColor: colors.white,
            borderRadius: "0.75rem",
          }),
        }}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        noOptionsMessage={() => "Aucune société"}
        onChange={(selectedValues, actionMeta) => {
          if (!onChange) {
            return;
          }

          if (actionMeta.option?.value === "all") {
            if (!selectAll) {
              setSelectAll(true);
              onChange([...allOptions]);
            } else {
              setSelectAll(false);
              onChange([]);
            }
          } else {
            setSelectAll(false);
            onChange(selectedValues);
          }
        }}
      />
      <label htmlFor={label}>
        {intl.formatMessage({ id: `${domain}.${optionType}` })}
      </label>
    </StyledSelect>
  );
}

interface Selector {
  value: ReadonlyArray<unknown> | null;
  disabled: boolean;
  isValue: boolean;
}

// label always top, otherwise input research not updating
const StyledSelect = styled.div<Selector>`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-grow: 1;
  position: relative;
  font-family: "Roboto", sans-serif;
  border-radius: 0.75rem;

  & label {
    position: absolute;
    left: 1.25rem;
    top: -0.75rem;
    transition: top 0.15s ease-in-out, color 0.5s ease-in-out;
    background-color: ${colors.white};
    color: ${({ disabled }) => (disabled ? colors.disabledGrey : colors.rock)};
    font-size: 1.5rem;
    padding: 0 0.5rem;
    pointer-events: none;
    user-select: none;
  }

  & [class*="container"] {
    flex-grow: 1;
  }

  & div > [class*="control"] {
    flex-grow: 1;
    box-shadow: 0 0 0 0;
    color: ${colors.navy};
    height: 6rem;
    transition: border 0.3s ease-in-out;
    outline: none;
    border-radius: 0.75rem;
    font-size: 1.75rem;
    width: 100%;
    border: ${({ disabled }) =>
      disabled
        ? `1px solid ${colors.disabledGrey}`
        : `1px solid ${colors.rock}`};
    box-sizing: border-box;
  }

  & div > [class*="control"] > div:first-of-type {
    height: 100%;
    width: 100%;
    overflow-y: hidden;
    display: flex;

    :before {
      content: ${({ disabled }) =>
        disabled ? "" : "Sélectionner une ou plusieurs société(s)"};
      color: ${({ isValue }) => (isValue ? colors.white : colors.rock)};
      display: ${({ isValue }) => (isValue ? "none" : "inline")};
      padding-left: 5px;
    }
  }

  & div > [class*="control"] > div:first-of-type > [class*="multiValue"] {
    background-color: ${colors.cornflower};
    border-radius: 8px;
    height: 22px;
    color: ${colors.white};
    align-items: center;
    font-size: 12px;
    & div {
      font-size: 12px;
      color: ${colors.white};
    }
  }

  & div > [class*="IndicatorsContainer"] {
    flex-grow: 0;
  }

  & [class*="indicatorContainer"]:hover {
    color: ${colors.cornflower};
    cursor: pointer;
  }

  & div > [class*="indicatorSeparator"] {
    display: none;
  }

  & div > [class*="Input"] > input {
    caret-color: transparent;
  }

  & div > [class*="Input"]:focus + label {
    top: -0.75rem;
  }

  & div > [class*="option"] {
    padding: 10px 12px;
    cursor: pointer;
    transition: 0.4s background-color ease-in-out;
    :active {
      background-color: ${colors.mist};
    }
  }

  & div > [class*="menu"] {
    right: 0;
    width: 312px;
  }

  & div > [class*="MenuList"] {
    padding: 0;
  }
`;
