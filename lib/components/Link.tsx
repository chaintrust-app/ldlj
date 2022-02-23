import * as React from "react"
import { Link as RouterLink } from "react-router-dom"
import * as Commons from "../../components/Commons"
import styled from "styled-components/macro"

interface LinkProps {
  text: string
  href: string
}

export const Link = ({ text, href }: LinkProps) => {
  return (
    <StyledLink to={href}>
      <Commons.Text
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
