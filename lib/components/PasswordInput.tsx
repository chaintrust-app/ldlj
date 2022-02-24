import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Eye } from "../assets/eye.svg";
import { ReactComponent as EyeClosed } from "../assets/eye-closed.svg";
import { colors } from "../design.config";
import { BaseInputProps, Input } from "./Input";

export const PasswordInput = (props: BaseInputProps) => {
  const [type, setType] = useState<"password" | "text">("password");

  const toggleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  return (
    <Input
      {...props}
      type={type}
      suffix={
        <EyeButton
          onToggle={toggleType}
          passwordStatus={type}
          showError={props.showError}
          showWarning={props.showWarning}
        />
      }
    />
  );
};

interface EyeButtonProps {
  passwordStatus: "password" | "text";
  onToggle: () => void;
  showError?: boolean;
  showWarning?: boolean;
}

const EyeButton = ({
  passwordStatus,
  onToggle,
  showError = false,
  showWarning = false,
}: EyeButtonProps) => {
  return (
    <StyledSVGWrapper showError={showError} showWarning={showWarning}>
      {passwordStatus === "password" ? (
        <StyledClosedEye onClick={onToggle} />
      ) : (
        <StyledEye onClick={onToggle} />
      )}
    </StyledSVGWrapper>
  );
};

interface SVGWithError {
  showError: boolean;
  showWarning: boolean;
}

const StyledSVGWrapper = styled.div<SVGWithError>`
  & svg {
    height: 2rem;
    width: 2rem;
  }
  & path {
    fill: ${({ showError, showWarning }) =>
      showWarning ? colors.orange : showError ? colors.amaranth : colors.rock};
  }
`;

const StyledEye = styled((props) => <Eye {...props} />)``;

const StyledClosedEye = styled((props) => <EyeClosed {...props} />)``;
