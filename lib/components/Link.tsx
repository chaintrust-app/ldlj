import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components/macro"
import {Text} from "./Text"

interface LinkProps {
  text: string
  href: string
}

export const Link = ({ text, href }: LinkProps) => {
  return (
    <StyledLink to={href}>
      <Text
        text={text}
        textStyle={{
          fontWeight: 500,
          color: "cornflower",
          fontSize: 1.75,
          fontFamily: "Roboto",
          underline: true,
          cursor: "pointer",
        }}
      />
    </StyledLink>
  )
}

const StyledLink = styled(RouterLink)``
