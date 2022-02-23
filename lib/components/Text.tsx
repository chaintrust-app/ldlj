import styled from "styled-components/macro"
import { colors } from "../design.config"
import * as React from "react"

type FontWeight =
  | 400 // Regular
  | 500 // Medium
  | 600 // SemiBold
  | 700 // Bold

export interface TextProps {
  text: string
  textStyle?: {
    color?: keyof typeof colors
    fontSize?: number
    lineHeight?: number
    underline?: boolean
    fontStyle?: "normal" | "italic"
    fontFamily?: "Roboto" | "Poppins"
    fontWeight?: FontWeight
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "initial"
    cursor?: "pointer" | "auto" | "default"
    textAlign?: "center"
  }
  dataCy?: string
}

const StyledText = styled.span<TextProps>`
  font-family: ${({ textStyle }) =>
    textStyle && textStyle.fontFamily
      ? `${textStyle.fontFamily}, sans-serif;`
      : "Roboto, sans-serif;"};
  font-weight: ${({ textStyle }) =>
    textStyle && textStyle.fontWeight ? textStyle.fontWeight : 400};
  color: ${({ textStyle }) =>
    textStyle && textStyle.color ? colors[textStyle.color] : colors.navy};
  line-height: ${({ textStyle }) =>
    textStyle && textStyle.lineHeight ? `${textStyle.lineHeight}rem` : "auto"};
  font-size: ${({ textStyle }) =>
    textStyle && textStyle.fontSize ? `${textStyle.fontSize}rem` : "1.75rem"};
  text-decoration: ${({ textStyle }) =>
    textStyle && textStyle.underline ? "underline" : "none"};
  cursor: ${({ textStyle }) =>
    textStyle && textStyle.underline
      ? "pointer"
      : textStyle?.cursor
      ? textStyle.cursor
      : "auto"};
  text-transform: ${({ textStyle }) =>
    textStyle && textStyle.textTransform ? textStyle.textTransform : "initial"};
  text-align: ${({ textStyle }) =>
    textStyle && textStyle.textAlign ? textStyle.textAlign : "start "};
  font-style: ${({ textStyle }) =>
    textStyle && textStyle.fontStyle ? textStyle.fontStyle : "normal"};
`

export const Text = (props: TextProps) => {
  return (
      <StyledText data-cy={props.dataCy} {...props}>
        {props.text}
      </StyledText>
  )
}