import * as React from "react";
import { components, default as ReactSelect } from "react-select";
import { boxShadow, colors } from "../design.config";
import { ReactComponent as ChevronDown } from "../assets/chevron-down.svg";
import { ReactComponent as Down } from "../assets/down.svg";
import styled from "styled-components";
import { IntlShape } from "react-intl";
import { useState } from "react";
import { ReactComponent as LocationArrow } from "../assets/location-arrow.svg";
import { ReactComponent as StringAsc } from "../assets/sort-icons/string-asc.svg";
import { ReactComponent as StringDesc } from "../assets/sort-icons/string-desc.svg";
import { ReactComponent as NumberAsc } from "../assets/sort-icons/numbers-asc.svg";
import { ReactComponent as NumberDesc } from "../assets/sort-icons/numbers-desc.svg";
import { ReactComponent as DateAsc } from "../assets/sort-icons/date-asc.svg";
import { ReactComponent as DateDesc } from "../assets/sort-icons/date-desc.svg";
import {RowCenter} from "./Flex";
import { Spacer } from "./Spacer";
import { Text } from "./Text";

interface SelectProps {
  options: Array<Option<string>>;
  value: Option<string> | null;
  label?: string;
  domain?: string;
  optionType?: string;
  defaultValue?: Option<string> | null;
  field?: unknown;
  disabled?: boolean;
  selectType?: string;
  onChangeCallback?: (value: Option<string>) => void;
  shadowed?: boolean;
  isClearable?: boolean;
  dataCy?: string;
  customWidth?: string;
  intl: IntlShape;
  asc?: boolean;
}

export type Option<T extends string> = {
  value: T;
  label: string;
  disabled?: boolean;
  sortType?: "string" | "number" | "date";
}
export type OptionList<T extends string> = Array<Option<T>>

export function createOptionList<T extends string>(
    optionList: Array<[T, string, boolean?]>
): OptionList<T> {
  return optionList.map(([key, value, disabled = false, type = undefined]) => ({
    value: key,
    label: value.toLowerCase(),
    disabled: disabled,
    sortType: type,
  }));
}

export function Select(props: SelectProps) {
  const {
    options,
    value,
    field,
    label,
    domain,
    optionType,
    selectType = "input",
    disabled,
    defaultValue,
    onChangeCallback,
    shadowed = false,
    isClearable = false,
    dataCy,
    customWidth,
    intl,
    asc,
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const CustomPlaceholder = () => <></>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownIndicatorSort = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
          <ChevronDown />
        </components.DropdownIndicator>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownIndicator = (props: any) => {
    return (
        <components.DropdownIndicator {...props}>
          <Down />
        </components.DropdownIndicator>
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SingleValue = ({ children, ...props }: any) => (
      <components.SingleValue {...props}>
        <RowCenter>
          <Spacer width={0.5} />
          <Text
              textStyle={{ color: "slateGrey" }}
              text={intl ? intl.formatMessage({ id: "office.sort" }) : ""}
          />
          <Spacer width={0.5} />
          <StyledSpan>{children}</StyledSpan>
          {props?.data?.sortType && (
              <>
                {props.data.sortType === "number" && asc ? (
                    <NumberAsc id={"sortIcon"} />
                ) : props.data.sortType === "number" && !asc ? (
                    <NumberDesc id={"sortIcon"} />
                ) : props.data.sortType === "string" && asc ? (
                    <StringAsc id={"sortIcon"} />
                ) : props.data.sortType === "string" && !asc ? (
                    <StringDesc id={"sortIcon"} />
                ) : props.data.sortType === "date" && asc ? (
                    <DateAsc id={"sortIcon"} />
                ) : props.data.sortType === "date" && !asc ? (
                    <DateDesc id={"sortIcon"} />
                ) : (
                    <LocationArrow />
                )}
              </>
          )}
        </RowCenter>
      </components.SingleValue>
  );

  return (
      <StyledSelect
          isFocused={isFocused}
          value={value ? value.value : null}
          disabled={disabled || false}
          selectType={selectType}
          shadowed={shadowed}
          myDefaultValue={defaultValue ? defaultValue.value : null}
          customWidth={customWidth}
      >
        {selectType === "sort" ? (
            <ReactSelect
                {...field}
                onFocus={() => {
                  setIsFocused(true);
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
                value={
                  (field as { value: string })?.value || value ? value : defaultValue
                }
                isDisabled={disabled}
                isClearable={isClearable}
                options={options}
                components={{
                  Placeholder: CustomPlaceholder,
                  DropdownIndicator: DropdownIndicatorSort,
                  SingleValue,
                }}
                styles={{
                  menu: (provided) => ({ ...provided, zIndex: 2 }), // Fixes the overlapping problem of the component
                  option: (defaultOptions, selectState) => ({
                    ...defaultOptions,
                    backgroundColor: selectState.isSelected
                        ? colors.cornflower
                        : colors.white,
                  }),
                  control: (defaultOptions) => ({
                    ...defaultOptions,
                    backgroundColor: colors.white,
                    borderRadius: "1.25rem",
                    border: "0px",
                  }),
                  dropdownIndicator: (defaultOptions) => ({
                    ...defaultOptions,
                  }),
                }}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  return onChangeCallback && onChangeCallback(e);
                }}
                data-cy={dataCy}
            />
        ) : (
            <>
              <ReactSelect
                  {...field}
                  onFocus={() => {
                    setIsFocused(true);
                  }}
                  isOptionDisabled={(option) => option.disabled as boolean}
                  onBlur={() => {
                    setIsFocused(false);
                  }}
                  value={
                    ((field as { value: string })?.value || value) &&
                    value?.value?.length &&
                    value?.value?.length > 0
                        ? value
                        : defaultValue
                  }
                  isDisabled={disabled}
                  isClearable={isClearable}
                  options={options}
                  components={{
                    Placeholder: CustomPlaceholder,
                    DropdownIndicator,
                  }}
                  styles={{
                    menu: (provided) => ({ ...provided, zIndex: 2 }), // Fixes the overlapping problem of the component
                    option: (defaultOptions, selectState) => ({
                      ...defaultOptions,
                      backgroundColor: selectState.isSelected
                          ? colors.cornflower
                          : colors.white,
                    }),
                    control: (defaultOptions) => ({
                      ...defaultOptions,
                      backgroundColor: colors.white,
                      borderRadius: "1.25rem",
                    }),
                    dropdownIndicator: (defaultOptions) => ({
                      ...defaultOptions,
                    }),
                  }}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e: any) => {
                    return onChangeCallback && onChangeCallback(e);
                  }}
                  data-cy={dataCy}
              />
              <label htmlFor={label}>
                {intl.formatMessage({ id: `${domain}.${optionType}` })}
              </label>
            </>
        )}
      </StyledSelect>
  );
}

const StyledSpan = styled.span`
  font-weight: bold;
  color: ${colors.navy};
`;

export interface Selector {
  value: string | null;
  disabled: boolean;
  isFocused: boolean;
  selectType: string;
  shadowed: boolean;
  myDefaultValue: string | null;
  customWidth: string | undefined;
}

export const StyledSelect = styled.div<Selector>`
  display: flex;
  width: ${({ selectType, customWidth }) =>
      selectType === "sort" ? "auto" : customWidth ? customWidth : "100%"};
  flex-direction: row;
  flex-grow: ${({ selectType, customWidth }) =>
      selectType === "sort" ? "" : customWidth ? "unset" : 1};
  position: relative;
  font-family: "Roboto", sans-serif;
  border-radius: 1.25rem;
  align-self: flex-end;

  & label {
    position: absolute;
    left: 1.25rem;
    top: ${({ value, myDefaultValue }) =>
        value?.length === 0 && !myDefaultValue ? "2rem" : "-0.75rem"};
    transition: top 0.15s ease-in-out, color 0.5s ease-in-out,
    font-size 0.5s ease-in-out;
    background-color: ${colors.white};
    color: ${({ disabled, isFocused }) =>
        disabled
            ? colors.disabledGrey
            : isFocused
                ? colors.cornflower
                : colors.rock};

    font-size: ${({ value, myDefaultValue }) =>
        value?.length === 0 && !myDefaultValue ? "1.75rem" : "1.5rem"};

    padding: 0 0.5rem;
    pointer-events: none;
    user-select: none;
  }

  & [class*="container"] {
    flex-grow: 1;
  }

  & [class*="indicatorContainer"] svg {
    transition: 0.5s fill ease-in-out;
    fill: ${({ disabled, isFocused }) =>
        disabled
            ? `${colors.disabledGrey}`
            : isFocused
                ? `${colors.cornflower}`
                : `${colors.rock}`};
  }

  & [class*="indicatorContainer"]:hover {
    cursor: pointer;
    svg {
      fill: ${colors.cornflower};
    }
  }

  & div > [class*="control"] {
    flex-grow: 1;
    box-shadow: ${({ shadowed }) => (shadowed ? `${boxShadow}` : "0 0 0 0")};
    color: ${colors.navy};
    height: 6rem;
    transition: border 0.3s ease-in-out;
    outline: none;
    border-radius: 1.25rem;
    font-size: 1.75rem;
    width: 100%;
    border: ${({ disabled, isFocused, selectType }) =>
        selectType === "sort"
            ? `0px`
            : disabled
                ? `1px solid ${colors.disabledGrey}`
                : `1px solid ${isFocused ? colors.cornflower : colors.rock}`};
    box-sizing: border-box;
  }

  & div > [class*="MenuList"] {
    max-height: 27rem;
  }

  & div > [class*="control"] > [class*="ValueContainer"] {
    height: 100%;
    width: 100%;
    overflow: visible;
  }

  &
  div
  > [class*="control"]
  > [class*="ValueContainer"]
  > [class*="singleValue"] {
    color: ${({ disabled }) =>
        disabled ? `${colors.disabledGrey}` : `${colors.navy}`};
  }
  
  #sortIcon {
    width: 3rem;
    height: 3rem;
    padding-left: 0.75rem;
  }

  & div > [class*="IndicatorsContainer"] {
    flex-grow: 0;
  }

  & div > [class*="indicatorSeparator"] {
    display: ${({ selectType }) => (selectType === "sort" ? "block" : "none")};
  }

  & div > [class*="Input"] > input {
    caret-color: transparent;
  }

  & div > [class*="Input"]:focus + label {
    top: -0.75rem;
  }
`;
