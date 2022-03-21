import { colors, spacings } from "../design.config";
import styled from "styled-components";
import * as React from "react";

import { ReactComponent as Cross } from "../assets/cross.svg";
import { ReactComponent as Bulb } from "../assets/bulb.svg";
import { ReactComponent as ChaintrustLogo } from "../assets/chaintrust-logo.svg";
import { ReactComponent as Checked } from "../assets/checked.svg";

export interface AlertProps {
  children: React.ReactNode;
  alertType: alertType;
  centerIcon?: boolean;
  boxSizing?: string;
  margin?: string;
  padding?: string;
  stretch?: boolean;
}

type alertType = "error" | "warning" | "info" | "success";

const colorByAlertType: Record<alertType, keyof typeof colors> = {
  error: "amaranth",
  warning: "lightSun",
  info: "rock",
  success: "shamrock",
};

const borderColorByAlertType: Record<alertType, keyof typeof colors> = {
  error: "amaranth",
  warning: "brightSun",
  info: "rock",
  success: "shamrock",
};

export const Alert = ({
  children,
  alertType,
  centerIcon = true,
  boxSizing,
  margin,
  padding,
  stretch,
}: AlertProps) => {
  const color = colors[colorByAlertType[alertType]];
  const borderColor = colors[borderColorByAlertType[alertType]];
  const icon = iconsByAlertType[alertType];

  return (
    <StyledSection
      color={borderColor}
      boxSizing={boxSizing}
      margin={margin}
      padding={padding}
      stretch={stretch}
    >
      {alertType === "info" ? (
        <StyledLogo>{icon}</StyledLogo>
      ) : (
        <StyledIcon centerIcon={centerIcon} color={color}>
          {icon}
        </StyledIcon>
      )}
      <div />
      {children}
    </StyledSection>
  );
};

const StyledChaintrustLogo = styled(ChaintrustLogo)`
  height: 1.75rem;
  width: 3.75rem;
`

const SVGColorWrapper = styled.div<WithColor>`
  display: flex;
  justify-content: center;
  & path {
    fill: ${({ color }) => color};
  }
`;

const iconsByAlertType: Record<alertType, JSX.Element> = {
  error: (
    <SVGColorWrapper color={colors.white}>
      <Cross />
    </SVGColorWrapper>
  ),
  warning: (
    <SVGColorWrapper color={colors.brightSun}>
      <Bulb />
    </SVGColorWrapper>
  ),
  info: (
    <SVGColorWrapper>
      <StyledChaintrustLogo />
    </SVGColorWrapper>
  ),
  success: (
    <SVGColorWrapper color={colors.white}>
      <Checked />
    </SVGColorWrapper>
  ),
};

interface WithColor {
  color?: string;
}
interface WithCenter extends WithColor {
  centerIcon: boolean;
}
interface WithProps extends WithColor {
  boxSizing?: string;
  margin?: string;
  stretch?: boolean;
  padding?: string;
}

const StyledSection = styled.section<WithProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: ${({ boxSizing }) => boxSizing};
  background: ${colors.white};
  border-radius: 2.5rem;
  padding: ${({ padding }) => (padding ? padding : spacings.alertPadding)};
  margin: ${({ margin }) => (margin ? margin : "")};
  align-self: ${({ stretch }) => (stretch ? "stretch" : "")};
  border: 0.125rem solid ${({ color }) => color};
`;

const StyledIcon = styled.div<WithCenter>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  position: absolute;
  left: -2rem;
  top: ${({ centerIcon }) => (centerIcon ? "calc(50% - 2rem)" : "1.5rem")};
  background-color: ${({ color }) => color};
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  position: absolute;
  left: -2.4rem;
  top: 1.125rem;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(2, 76, 248, 0.1);
`;

