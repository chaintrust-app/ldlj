import * as React from "react"
import styled from "styled-components"
import {ElementType} from "react";

export const ScrollableOutlet = ({
  id,
  padding,
  Outlet
}: {
  id?: string
  padding?: string
  Outlet: ElementType
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
