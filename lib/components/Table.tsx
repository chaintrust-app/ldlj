import * as React from "react"
import { Fragment, ReactNode } from "react"
import { useIntl } from "react-intl"
import styled from "styled-components/macro"

import { colors } from "../design.config"
import ReactTooltip from "react-tooltip"
import {Separator} from "./Separator";
import {Spacer} from "./Spacer";
import {Alert} from "./Alert";
import {Card} from "./Card";
import {Text} from "./Text"

export interface TableBuilder<T> {
  headerText: string
  flexGrow?: string
  content: (rowData: T) => JSX.Element
}

const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`

export interface TableProps<T> {
  columns: TableBuilder<T>[]
  rows: Array<T>
  rowBackgroundColors?: Array<keyof typeof colors>
  width?: string
  height?: string
  alignItems?: string
  padding?: string
  alertMessage?: string
  rowTooltip?: (rowData: T) => { "data-tip": string } | {}
  suffixContent?: ReactNode
  keyBuilder?: (rowData: T, index: number) => string
}

export const Table = <T,>({
  columns,
  rows,
  rowBackgroundColors,
  width,
  height,
  alignItems,
  padding,
  alertMessage,
  rowTooltip,
  suffixContent,
  keyBuilder,
}: TableProps<T>) => {
  const bgColors = rowBackgroundColors || rows.map(() => "white")
  const intl = useIntl()
  return (
    <Wrapper width={width} height={height} padding={padding}>
      <Header>
        {columns.map((column) => (
          <Flex1 key={column.headerText} flexGrow={column.flexGrow}>
            <TitleTable tid={column.headerText} />
          </Flex1>
        ))}
      </Header>

      <ContentSection dataLoaded={Object.keys(rows).length > 0}>
        {rows.map((row, index) => {
          let additionalAttributes = {}
          if (rowTooltip) {
            additionalAttributes = rowTooltip(row)
            ReactTooltip.rebuild()
          }

          return (
            <Fragment
              key={keyBuilder ? keyBuilder(row, index) : `row-${index}`}
            >
              {index > 0 && (
                <Separator size="full" color={"lavender"} />
              )}
              <RowWithPadding
                backgroundColor={bgColors[index]}
                alignItems={alignItems}
                {...additionalAttributes}
              >
                {columns.map((column, index) => (
                  <Flex1
                    justifyLeft={index === 0}
                    key={`row-${column.headerText}-${index}`}
                    flexGrow={column.flexGrow}
                  >
                    {column.content(row)}
                  </Flex1>
                ))}
              </RowWithPadding>
            </Fragment>
          )
        })}

        {rows.length === 0 && alertMessage && (
          <>
            <Spacer height={8} />
            <Alert alertType="info">
              <Text
                text={intl.formatMessage({
                  id: alertMessage,
                })}
              />
            </Alert>
          </>
        )}
        {suffixContent}
      </ContentSection>
    </Wrapper>
  )
}

interface WrapperStyle {
  width?: string
  height?: string
  padding?: string
}

// need 2rem padding for table shadow
const Wrapper = styled.div<WrapperStyle>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : `initial`)};
  height: ${({ height }) => (height ? height : `initial`)};
  overflow-y: auto;
  padding: ${({ padding }) => (padding ? padding : "0 2rem 2rem 2rem")};
`

export const TitleTable = ({ tid }: { tid: string }) => {
  const intl = useIntl()
  return (
      <Text
      text={intl.formatMessage({ id: tid })}
      textStyle={{
        fontWeight: 700,
        fontFamily: "Poppins",
        textTransform: "uppercase",
        textAlign: "center",
      }}
    />
  )
}

//     padding-right: 5.5rem; because of scrollbar
//     TODO: add more padding right depending on scrollbar display
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0 4rem;
  box-sizing: border-box;

  border-top-left-radius: 2.5rem;
  border-top-right-radius: 2.5rem;
  height: 7rem;
  width: 100%;
  flex-shrink: 0;
  background-color: ${colors.lavender};
`

interface WithTransition {
  dataLoaded: boolean
}

interface WithFlexGrow {
  flexGrow?: string | null
  justifyLeft?: boolean
}

const Flex1 = styled.div<WithFlexGrow>`
  display: flex;
  flex: ${({ flexGrow }) => (flexGrow ? `0 0 ${flexGrow}` : "1 0")};
  overflow: auto;
  align-items: center;
  justify-content: ${({ justifyLeft }) =>
    justifyLeft ? `flex-start` : "center"};
`
interface WithColor {
  backgroundColor: keyof typeof colors
  alignItems: string | undefined
}

const RowWithPadding = styled(Row)<WithColor>`
  padding: 3rem 4rem;
  box-sizing: border-box;
  background-color: ${({ backgroundColor }) => colors[backgroundColor]};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "normal")};
`

const ContentSection = styled(Card)<WithTransition>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  height: 100%;
  overflow: auto;
  transition: 0.8s height ease-in;
  transform: translateZ(0);
  border: 1px solid ${colors.lavender};
  box-shadow: none;
`
