import styled from "styled-components";

import { ReactComponent as Cross } from "../assets/cross.svg";
import { colors } from "../design.config";

export const CloseCross = styled(Cross)`
  position: absolute;
  top: 3.5rem;
  right: 3.5rem;
  height: 2rem;
  width: 2rem;
  cursor: pointer;
  & path {
    fill: ${colors.cornflower};
  }
`;
