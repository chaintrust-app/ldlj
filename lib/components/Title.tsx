import { colors } from "../design.config"
import styled from "styled-components/macro"
import * as React from "react"

interface TitleProps {
  text: string
  size?: 3 | 7 | 2.25
  className?: string
}

export const Title = ({ text, size = 7, className }: TitleProps) => {
  return (
    <StyledTitle className={className} size={size}>
      {text}
    </StyledTitle>
  )
}

type WithSize = Required<Pick<TitleProps, "size">>

const StyledTitle = styled.h1<WithSize>`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  text-align: center;
  color: ${colors.navy};
  font-size: ${({ size }) => size}rem;
  margin: 0;
  user-select: none;
`
