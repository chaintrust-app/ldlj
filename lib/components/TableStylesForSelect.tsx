import * as React from "react";
import styled from "styled-components";
import { colors } from "../design.config";
import { Text } from "./Text";

export const TableHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  height: 7rem;
  width: 100%;
  flex-shrink: 0;
  background-color: ${colors.lavender};
  overflow: hidden;
`;

export const TableBody = styled.div`
  box-sizing: border-box;
  padding-bottom: 8rem;
  overflow-y: auto;
  height: 100%;
`;

export const WrapperRows = styled.div`
  border-bottom: 1px solid ${colors.lavender};

  :last-child {
    border-bottom: none;
  }
`;

export const StyledTitles = styled((props) => <Text {...props} />)`
  display: flex;
  flex: 1 0;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;

export const TableWrapper = styled.div`
  border-radius: 2.5rem;
  width: 100%;
  border: 1px solid ${colors.lavender};
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Cell = styled.div`
  display: flex;
  height: 11rem;
  flex: 1 0;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;
`

export const CellStart = styled.div`
  display: flex;
  height: 11rem;
  flex: 1 0;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  position: relative;
`;
