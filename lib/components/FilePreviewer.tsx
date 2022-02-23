import * as React from "react"
import { ReactComponent as Eye } from "../../assets/eyeSimple.svg"

interface FileProps {
  url: string
}

export const FilePreviewer = ({ url }: FileProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      id={"filePreviewer"}
    >
      <Eye />
    </a>
  )
}
