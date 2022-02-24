import * as React from "react";
import styled from "styled-components/macro";
import Loader from "../../assets/loader.svg";
import LoaderShadow from "../../assets/loaderShadow.svg";
import { colors, rotate } from "../design.config";

export const SpinningLoader = styled((props) => <Loader {...props} />)<{
  spinnersize?: number;
}>`
  width: ${({ spinnersize }) => (spinnersize ? `${spinnersize}rem` : "2rem")};
  height: ${({ spinnersize }) => (spinnersize ? `${spinnersize}rem` : "2rem")};
  margin: 0;
  animation: 0.6s ${rotate} 0s linear infinite;
  & path:nth-of-type(2) {
    fill: ${colors.cornflower};
  }
`;

export const SpinningLoaderShadow = () => <StyledLoaderShadow />;
export const StyledLoaderShadow = styled((props) => (
  <LoaderShadow {...props} />
))`
  height: 2rem;
  width: 2rem;
  margin: 0;
  transform-origin: 50% 60%;
  & path:nth-of-type(2) {
    fill: ${colors.cornflower};
  }
`;
