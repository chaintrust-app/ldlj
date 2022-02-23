import * as React from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components/macro"

export const ScrollableOutlet = ({
  id,
  padding,
}: {
  id?: string
  padding?: string
}) => (
  <ScrollableContainer id={id} padding={padding}>
    <FullColumn>
      <Outlet />
    </FullColumn>
  </ScrollableContainer>
)

interface ScrollableProps {
  padding: string | undefined
}

const ScrollableContainer = styled.div<ScrollableProps>`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: ${({ padding }) => (padding ? padding : "4rem 4rem 0")};
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
`

const FullColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
`
