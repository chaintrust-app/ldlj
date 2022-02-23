import * as React from "react"
import { colors } from "../design.config"
import styled from "styled-components/macro"

interface SubtitleProps {
  text: string
  size?: 2 | 2.25 | 1.75
  className?: string
}

export const Subtitle = ({ text, size = 2, className }: SubtitleProps) => {
  return (
    <StyledSubtitle size={size} className={className}>
      {text}
    </StyledSubtitle>
  )
}

type WithSize = Required<Pick<SubtitleProps, "size">>

const StyledSubtitle = styled.h2<WithSize>`
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: ${colors.slateGrey};
  font-weight: 400;
  font-size: ${({ size }) => size}rem;
  margin: 0;
  user-select: none;
`
