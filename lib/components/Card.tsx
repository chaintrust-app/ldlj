import * as React from "react";
import styled from "styled-components";

import { boxShadow, colors, spacings } from "../design.config";

type trianglePosition = {
  position: "left" | "top";
  size: 1.25 | 2.5;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
} | null;
export interface CardProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  trianglePosition?: trianglePosition;
  className?: string;
  backgroundColor?: keyof typeof colors;
  alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
  overridePosition?: boolean;
  radius?: number;
  padding?: string;
  onBlur?: () => void;
}

export const Card: React.VFC<CardProps> = ({
  className,
  children,
  width = "70rem",
  height,
  trianglePosition = null,
  backgroundColor = "white",
  alignSelf = "center",
  overridePosition = false,
  radius = 2.5,
  padding,
  onBlur,
}: CardProps) => (
  <StyledSection
    trianglePosition={trianglePosition}
    width={width}
    height={height}
    className={className}
    backgroundColor={backgroundColor}
    alignSelf={alignSelf}
    overridePosition={overridePosition}
    radius={radius}
    padding={padding}
    onBlur={onBlur}
  >
    {children}
  </StyledSection>
);

interface WithWidth {
  width: string;
  height?: string;
  trianglePosition: trianglePosition;
  backgroundColor: keyof typeof colors;
  alignSelf: "flex-start" | "flex-end" | "center" | "stretch";
  overridePosition: boolean;
  radius: number;
  padding?: string;
}

const StyledSection = styled.section<WithWidth>`
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ overridePosition }) =>
    overridePosition ? "absolute" : "relative"};
  width: ${({ width }) => width};
  height: ${({ height }) => (height === undefined ? "auto" : `${height}`)};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: ${({ backgroundColor }) => colors[backgroundColor]};
  border-radius: ${({ radius }) => radius}rem;
  padding: ${({ padding }) =>
    padding === undefined ? spacings.defaultPadding : `${padding}`};
  box-shadow: ${boxShadow};

  :after {
    display: ${({ trianglePosition }) => (trianglePosition ? "flex" : "none")};
    content: "";
    position: absolute;
    right: ${({ trianglePosition }) =>
      trianglePosition?.right ? trianglePosition?.right + "rem" : "auto"};
    left: ${({ trianglePosition }) =>
      trianglePosition?.left ? trianglePosition?.left + "rem" : "auto"};
    top: ${({ trianglePosition }) =>
      trianglePosition?.top ? trianglePosition?.top + "rem" : "auto"};
    bottom: ${({ trianglePosition }) =>
      trianglePosition?.bottom ? trianglePosition?.bottom + "rem" : "auto"};

    height: ${({ trianglePosition }) => trianglePosition?.size + "rem"};
    width: ${({ trianglePosition }) => trianglePosition?.size + "rem"};
    background-color: ${({ backgroundColor }) => colors[backgroundColor]};

    transform: rotate(45deg);
  }
`;
