import * as React from "react"
import styled from "styled-components/macro"
import { colors } from "../../styles/design.config"

type NotifierColors = "error" | "success"
interface CircleNotifierProps {
  type: NotifierColors
}
export const CircleNotifier = ({ type }: CircleNotifierProps) => (
  <StyledCircleNotifier type={type} />
)

const StyledCircleNotifier = styled.div<CircleNotifierProps>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.type === "success" ? colors.shamrock : colors.amaranth};
  margin-right: 1rem;
`
