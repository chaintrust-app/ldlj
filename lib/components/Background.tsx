import styled from "styled-components/macro";
import GradiantWall from "../assets/gradient-wall.svg";
import { ReactNode } from "react";
import * as React from "react";

export interface BackgroundProps {
  children: ReactNode;
  centeredTop?: boolean;
  padding?: number;
}

export const Background = ({
  children,
  centeredTop = true,
  padding = 4,
}: BackgroundProps) => (
  <Absolute>
    <StyledEllipse />
    <StyledWall />
    <StyledOverlay />
    <StyledContent padding={padding} centeredTop={centeredTop}>
      {children}
    </StyledContent>
  </Absolute>
);

const Absolute = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

interface WithCenteredTop {
  centeredTop: boolean;
  padding: number;
}

const StyledContent = styled.div<WithCenteredTop>`
  position: absolute;
  top: ${({ centeredTop }) => (centeredTop ? "24rem" : "0")};
  padding: ${({ centeredTop, padding }) =>
    centeredTop ? "0" : `${padding}rem`};
  height: ${({ centeredTop }) => (centeredTop ? "auto" : "100%")};
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: ${({ centeredTop }) => (centeredTop ? "inherit" : "auto")};
  flex-grow: 1;
`;

const StyledEllipse = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #ecf1ff;
`;

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(50px);
  background: radial-gradient(
    102.52% 357.96% at 0% 2%,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
`;

const StyledWall = styled((props) => <GradiantWall {...props} />)`
  position: absolute;
  height: 100%;
  width: 100%;
`;
