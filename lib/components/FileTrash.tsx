import * as React from "react"
import { ReactComponent as TrashCan } from "../../assets/drop-documents/TrashCan.svg"
import styled from "styled-components/macro"
import { colors } from "../../styles/design.config"

interface FileProps {
  disabled?: boolean
  onClick: () => void
}

export const FileTrash = ({ disabled, onClick }: FileProps) => {
  return (
    <>
      {!disabled ? (
        <Trash id={"trashCan"} onClick={onClick} />
      ) : (
        <TrashStyled />
      )}
    </>
  )
}

const Trash = styled(TrashCan)`
  cursor: pointer;
`

const TrashStyled = styled(TrashCan)`
  & path {
    fill: ${colors.lightBlueGrey};
  }
`
