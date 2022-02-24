import * as React from "react";
import styled from "styled-components/macro";
import { colors } from "../design.config";
import CheckedSvg from "../../assets/checked.svg";
import { Spacer } from "./Spacer";

interface RowCheckboxProps {
  label: string;
  name: string;
  isChecked: boolean;
  onChange: () => void;
}

export const RowCheckbox = ({
  label,
  name = "",
  isChecked,
  onChange,
}: RowCheckboxProps) => {
  return (
    <>
      <HiddenInput
        type="checkbox"
        id={name}
        name={name}
        defaultChecked={isChecked}
      />
      <StyledInput onClick={onChange}>
        <StyledInputLabel>{label}</StyledInputLabel>
        <Spacer height={0} width={1} />
        <StyledSquare checked={isChecked}>
          {isChecked && (
            <StyledChecked>
              <CheckedSvg />
            </StyledChecked>
          )}
        </StyledSquare>
      </StyledInput>
    </>
  );
};

interface CheckedProp {
  checked: boolean;
}

const HiddenInput = styled.input`
  display: none;
`;
const StyledInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
`;
const StyledSquare = styled.div<CheckedProp>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 2rem;
  width: 2rem;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) =>
    props.checked ? colors.shamrock : colors.rock};
  border-radius: 0.5rem;
  flex-shrink: 0;
`;
const StyledInputLabel = styled.span`
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  color: ${colors.navy};
  font-weight: 400;
  font-size: 1.75rem;
  user-select: none;
`;

const StyledChecked = styled.div`
  display: flex;
  user-select: none;
  & svg {
    fill: ${colors.white};
  }
`;
