import * as React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

import { colors } from "../design.config"

export interface MenuItemProps {
  label: string
  linkTo: string
  selected: boolean
  blocked: boolean
}

export const NestedMenuItem = ({
  label,
  selected,
  linkTo,
  blocked,
}: MenuItemProps) => {
  const navigate = useNavigate()
  const click = () => {
    if (!blocked) {
      navigate(linkTo)
    }
  }
  return (
    <ItemWrapper selected={selected} onClick={click}>
      <span>{label}</span>
    </ItemWrapper>
  )
}

interface BarProps {
  selected: boolean
}

const ItemWrapper = styled.li<BarProps>`
  display: flex;
  height: 4rem;
  padding-left: 2rem;
  align-items: center;
  font-family: "Roboto", sans-serif;
  border-left: 1px solid ${colors.cornflower};
  color: ${({ selected }) => (selected ? colors.cornflower : colors.navy)};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  font-size: 1.75rem;
  list-style-type: none;
  user-select: none;

  transition: 0.4s color ease-in-out, 0.4s font-weight ease-in-out;

  cursor: pointer;
`
