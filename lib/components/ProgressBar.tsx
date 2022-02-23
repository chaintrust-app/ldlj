import * as React from "react"
import styled from "styled-components/macro"
import { colors } from "../../styles/design.config"

interface ProgressBarProps {
  color?: keyof typeof colors
  progress: number
  height?: number
  withText?: boolean
}

export const ProgressBar = ({
  color = "shamrock",
  progress,
  height = 1,
  withText = false,
}: ProgressBarProps) => (
  <StyledProgressBarBackground
    color={color}
    progress={progress}
    height={height}
  >
    <StyledProgressBar
      color={color}
      progress={progress}
      height={height}
      withText={withText}
    />
    {withText && <StyledText>{progress}%</StyledText>}
  </StyledProgressBarBackground>
)

const StyledProgressBar = styled.div<Required<ProgressBarProps>>`
  width: ${(props) => props.progress}%;
  height: ${(props) => (props.height ? props.height : "1")}rem;
  border-radius: 3rem;
  background-color: ${(props) => colors[props.color]};
  transition: 0.5s background-color ease-in-out, 0.5s width ease-in-out;
`
const StyledProgressBarBackground = styled.div<ProgressBarProps>`
  position: relative;
  text-align: center;
  width: 100%;
  height: ${(props) => (props.height ? props.height : "1")}rem;
  border-radius: 3rem;
  background-color: ${colors.rock};
`
const StyledText = styled.p`
  top: 0rem;
  width: 4rem;
  color: white;
  position: absolute;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  left: calc(50% - 2rem);
`
