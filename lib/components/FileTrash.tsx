import * as React from "react";
import TrashCan from "../../assets/drop-documents/TrashCan.svg";
import styled from "styled-components/macro";
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

const Trash = styled((props) => <TrashCan {...props} />)`
  cursor: pointer;
`;

const TrashStyled = styled((props) => <TrashCan {...props} />)`
  & path {
    fill: ${colors.lightBlueGrey};
  }
`;
