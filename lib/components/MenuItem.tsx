import * as React from "react"
import { ReactNode } from "react"
import styled from "styled-components"
import { colors, gradients } from "../design.config"
import {NavigateFunction} from "react-router-dom";

export interface MenuItemProps {
  label: string
  linkTo?: string
  selected: boolean
  iconIdle: ReactNode
  iconSelected: ReactNode
  useNavigate: () => NavigateFunction
}

export const MenuItem = ({
  label,
  selected,
  linkTo,
  iconIdle,
  iconSelected,
  useNavigate
}: MenuItemProps) => {
  const navigate = useNavigate()
  const click = () => {
    if (!selected && linkTo) navigate(linkTo)
  }
  return (
    <ItemWrapper selected={selected} onClick={click}>
      <IconContainer selected={selected}>
        {selected ? iconSelected : iconIdle}
      </IconContainer>
      <span>{label}</span>
    </ItemWrapper>
  )
}

interface BarProps {
  selected: boolean
}

const IconContainer = styled.div<BarProps>`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    height: 2rem;
    width: 2rem;
    stroke: ${({ selected }) => (selected ? "" : "")};

    & path {
      fill: ${({ selected }) => (selected ? "white" : colors.steelBlue)};
    }
  }
`
const ItemWrapper = styled.h3<BarProps>`
  display: flex;
  width: 25.25rem;
  height: 4rem;
  border-radius: 1.25rem;
  font-family: "poppins", sans-serif;
  color: ${({ selected }) => (selected ? "white" : colors.steelBlue)};
  font-weight: ${({ selected }) => (selected ? 600 : 400)};
  line-height: 4rem;
  font-size: 1.75rem;
  background: ${({ selected }) => (selected ? gradients.blue : "none")};
  text-transform: uppercase;
  user-select: none;

  transition: 0.2s font-weight ease-in-out, 0.4s background ease-in-out;

  cursor: pointer;
`
