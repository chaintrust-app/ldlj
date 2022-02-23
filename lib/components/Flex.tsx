import styled from "styled-components/macro"

export const SpacedBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`

export const FlexStart = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const FlexShrinkZero = styled.div`
  display: flex;
  flex-shrink: 0;
`

export const SpacedBetweenCenter = styled(SpacedBetween)`
  align-items: center;
`

export const SpacedBetweenEnd = styled(SpacedBetween)`
  align-items: flex-end;
`

export const JustifyCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ColumnSpacedBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const ColumnStretch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
`

export const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ColumnCenterCenter = styled(ColumnCenter)`
  align-items: center;
`

export const Row = styled.div`
  display: flex;
`

export const RowCenter = styled.div`
  display: flex;
  align-items: center;
`

export const AlignSelfStart = styled.div`
  align-self: flex-start;
`

export const AlignSelfCenter = styled.div`
  align-self: center;
`

export const SelfAlignedColumn = styled(Column)`
  align-self: center;
  align-items: center;
`