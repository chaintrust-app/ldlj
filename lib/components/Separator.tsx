import * as React from "react"
import styled from "styled-components/macro"
import { colors } from "../design.config"

type SeparatorSize = "half" | "full"

interface SeparatorProps {
  size: SeparatorSize
  color?: keyof typeof colors
}

export const Separator = ({
  size = "half",
  color = "rock",
}: SeparatorProps) => {
  return componentBySize(color)[size]
}

interface WithColor {
  color: keyof typeof colors
}

const HalfSeparator = styled.hr<WithColor>`
  background-color: ${({ color }) => colors[color]};
  height: 1px;
  width: 50%;
  margin: 0 25%;
  border: none;
  flex-shrink: 0;
`

const FullSeparator = styled.hr<WithColor>`
  background-color: ${({ color }) => colors[color]};

  height: 1px;
  width: 100%;
  border: none;
  flex-shrink: 0;
`

export const VerticalSeparator = styled.div`
  background-color: ${colors.rock};
  height: 100%;
  width: 1px;
  border: none;
  flex-shrink: 0;
`

const componentBySize = (
  color: keyof typeof colors
): Record<SeparatorSize, JSX.Element> => ({
  half: <HalfSeparator color={color} />,
  full: <FullSeparator color={color} />,
})
