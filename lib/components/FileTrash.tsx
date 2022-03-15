import * as React from "react";
import { ReactComponent as TrashCan } from "../assets/drop-documents/TrashCan.svg";
import styled from "styled-components";
import { colors } from "../design.config";

interface FileProps {
  disabled?: boolean;
  onClick: () => void;
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
  );
};

const StyledTrashIcon = styled((props) => <TrashCan {...props} />)`
  width: 3rem;
  height: 3rem;
`


const Trash = styled(StyledTrashIcon)`
  cursor: pointer;
`;

const TrashStyled = styled(StyledTrashIcon)`
  & path {
    fill: ${colors.lightBlueGrey};
  }
`;

