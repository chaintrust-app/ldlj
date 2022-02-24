import * as React from "react";
import styled from "styled-components";
import { Text } from "./Text";

import { ReactComponent as FileDownload } from "../assets/fileDownload.svg";

interface FileProps {
  url: string;
  text?: string;
  fileName?: string;
}

export const FileDownloader = ({ url, text, fileName }: FileProps) => {
  return text ? (
    <DownloadBlock
      href={url}
      target="_blank"
      id={"downloadFile"}
      download={fileName ? fileName : true}
      rel="noreferrer"
    >
      <StyledFileDownload />
      <Text
        text={text}
        textStyle={{
          textAlign: "center",
          color: "cornflower",
          underline: true,
          fontSize: 1.75,
          fontWeight: 500,
        }}
      />
    </DownloadBlock>
  ) : (
    <a
      href={url}
      target="_blank"
      id={"downloadFile"}
      download={fileName ? fileName : true}
      rel="noreferrer"
    >
      <FileDownload />
    </a>
  );
};

const DownloadBlock = styled.a`
  display: flex;
  align-items: center;
`;

const StyledFileDownload = styled((props) => <FileDownload {...props} />)`
  margin-right: 1.5rem;
`;
