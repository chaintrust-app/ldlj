import * as React from "react";
import styled from "styled-components";
import { colors } from "../design.config";
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
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.36023 3.2801C1.96718 2.89211 1.33403 2.89621 0.946044 3.28925C0.558057 3.6823 0.562157 4.31545 0.955202 4.70344L3.49616 7.2117C3.91418 7.62434 4.59615 7.58954 4.96999 7.13648L9.0957 2.13648C9.4472 1.71049 9.38682 1.08021 8.96083 0.728708C8.53484 0.377208 7.90456 0.437592 7.55306 0.863579L4.12315 5.02033L2.36023 3.2801Z" />
              </svg>
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
