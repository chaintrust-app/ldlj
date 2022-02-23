import * as React from "react"
import styled from "styled-components/macro"

import { ReactComponent as FileDownload } from "../../assets/fileDownload.svg"
import * as Commons from "../../components/Commons"

interface FileProps {
  url: string
  text?: string
  fileName?: string
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
      <Commons.Text
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
  )
}

const DownloadBlock = styled.a`
  display: flex;
  align-items: center;
`

const StyledFileDownload = styled(FileDownload)`
  margin-right: 1.5rem;
`
