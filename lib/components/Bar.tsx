import styled from "styled-components"
import * as React from "react"

import { colors } from "../design.config"

type AlignInterface =
  | "auto"
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "unset"
interface BarProps {
  height?: number
  width?: number
  align?: AlignInterface
}

export const Bar = ({ height = 0, width = 2, align = "auto" }: BarProps) => (
  <StyledBar height={height} width={width} align={align} />
)

const StyledBar = styled.div<Required<BarProps>>`
  display: flex;
  height: ${({ height }) => `${height}rem`};
  width: ${({ width }) => `${width}rem`};
  border: 0;
  border-top: 1px solid ${colors.rock};
  align-self: ${({ align }) => `${align}`};
`
