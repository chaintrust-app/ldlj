import * as React from "react"
import { DragEvent, useEffect, useState } from "react"
import styled from "styled-components/macro"
import { useIntl } from "react-intl"

import { appearing, colors, opacityColors } from "../../styles/design.config"
import { ReactComponent as CloudComputing } from "../../assets/cloud-computing.svg"
import { ReactComponent as Valid } from "../../assets/upload/valid.svg"
import { ReactComponent as Wrong } from "../../assets/upload/wrong.svg"
import * as Commons from "../../components/Commons"
import { resetUploadStatusAction } from "../../store/ducks/dropDocuments.ducks"
import { useDispatch } from "react-redux"

export type UploadStatus =
  | "start"
  | "confirmation"
  | "uploading"
  | "success"
  | "error"

export type DropText = "Logo" | "Fec" | "FileDrop"

interface BaseFileUploadProps {
  uploadStatus: UploadStatus
  uploadProgress: number
  dropText: DropText
  height?: string
  errorMessage?: string
  secondErrorMessage?: string
  allowMultiple?: boolean
}

interface SingleFileUploadProps extends BaseFileUploadProps {
  uploadFile: (file: File) => void
  uploadFiles?: undefined
}

interface MultipleFilesUploadProps extends BaseFileUploadProps {
  uploadFile?: undefined
  uploadFiles: (files: File[]) => void
}

type DropFileUploadProps = SingleFileUploadProps | MultipleFilesUploadProps

export const DropFileUpload = ({
  uploadFile,
  uploadFiles,
  uploadStatus,
  uploadProgress,
  dropText,
  allowMultiple,
  height = "23rem",
  errorMessage = "",
  secondErrorMessage = "",
}: DropFileUploadProps) => {
  const [dragover, setDragover] = useState(false)

  const intl = useIntl()
  const dispatch = useDispatch()
  const [resetDropFile, setResetDropFile] = useState(false)

  const handleFolder =
    (promises: Array<Promise<void>>) => (item: FileSystemEntry) => {
      if (uploadFile !== undefined) {
        if (item.isFile) (item as FileSystemFileEntry).file(uploadFile)
        else if (item.isDirectory) {
          promises.push(
            new Promise((resolve, rejected) => {
              var dirReader = (item as FileSystemDirectoryEntry).createReader()
              dirReader.readEntries((entries) => {
                Array.from(entries).forEach(handleFolder(promises))
                resolve()
              })
            })
          )
        }
      }
    }

  const dropHandler = (ev: DragEvent) => {
    ev.preventDefault()
    if (uploadFile) {
      if (ev.dataTransfer.items) {
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          if (ev.dataTransfer.items[i].kind === "file") {
            const fileOrFolder = ev.dataTransfer.items[i].webkitGetAsEntry()
            if (fileOrFolder) handleFolder([])(fileOrFolder)
            else {
              const file = ev.dataTransfer.items[i].getAsFile()
              if (file) uploadFile(file)
            }
            if (!allowMultiple) return
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          const file = ev.dataTransfer.files[i]
          uploadFile(file)
          if (!allowMultiple) return
        }
      }
    } else if (uploadFiles) {
      const files = Array.from(ev.dataTransfer.files)
      uploadFiles(files)
    }
  }

  const clickHandler = () => {
    const input = document.createElement("input")
    input.type = "file"

    if (uploadFiles || allowMultiple) {
      input.multiple = true
    }
    document.body.appendChild(input)

    input.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLInputElement
      const fileList = target.files
      if (fileList && uploadFile) {
        if (!allowMultiple) {
          const file = fileList[0]
          uploadFile(file)
        } else {
          Array.from(fileList).map(uploadFile)
        }
        document.body.removeChild(input)
      }
      if (fileList && uploadFiles) {
        const files = Array.from(fileList)
        uploadFiles(files)
        document.body.removeChild(input)
      }
    })

    input.click()
  }

  useEffect(() => {
    if (resetDropFile) {
      dispatch(resetUploadStatusAction())
      setResetDropFile(false)
    }
  }, [dispatch, setResetDropFile, resetDropFile])

  return (
    <DropFile
      onClick={clickHandler}
      onDragEnter={() => {
        setDragover(true)
      }}
      onDragLeave={() => {
        setDragover(false)
      }}
      onDragOver={(e) => {
        e.stopPropagation()
        e.preventDefault()
      }}
      onDrop={(e) => dropHandler(e)}
      dragover={dragover}
      uploadStatus={uploadStatus}
      height={height}
      dropText={dropText}
    >
      {["success", "error", "uploading"].includes(uploadStatus) && (
        <>
          <StatusMessage>
            {["success", "error"].includes(uploadStatus) && (
              <>
                <Commons.Text
                  text={intl.formatMessage({
                    id: `initializationFEC.${uploadStatus}`,
                  })}
                  textStyle={{ color: "navy", fontWeight: 700 }}
                />
                <Commons.Spacer />
                {uploadStatus === "success" ? <Valid /> : <Wrong />}
              </>
            )}
          </StatusMessage>
          {["uploading", "success"].includes(uploadStatus) && (
            <>
              <Commons.Spacer height={1} />
              <ProgressBarWrapper>
                <Commons.ProgressBar
                  color={
                    uploadStatus === "success"
                      ? "shamrock"
                      : uploadStatus === "error"
                      ? "amaranth"
                      : "cornflower"
                  }
                  progress={uploadProgress}
                />
              </ProgressBarWrapper>
            </>
          )}
          {(errorMessage || secondErrorMessage) &&
            !["uploading", "success"].includes(uploadStatus) && (
              <>
                <StatusMessage>
                  {["error"].includes(uploadStatus) && (
                    <Commons.Text
                      text={errorMessage}
                      textStyle={{
                        color: "amaranth",
                        fontWeight: 700,
                        textAlign: "center",
                        lineHeight: 3,
                      }}
                    />
                  )}
                </StatusMessage>
                {secondErrorMessage && (
                  <StatusMessage>
                    {["error"].includes(uploadStatus) && (
                      <Commons.Text
                        text={secondErrorMessage}
                        textStyle={{
                          color: "amaranth",
                          fontWeight: 700,
                          textAlign: "center",
                          lineHeight: 3,
                        }}
                      />
                    )}
                  </StatusMessage>
                )}
                <Commons.Spacer height={2} />
                <ResetDropZoneLink
                  onClick={(e) => {
                    e.stopPropagation()
                    e.nativeEvent.stopImmediatePropagation()
                    setResetDropFile(true)
                  }}
                >
                  <Commons.Text
                    text={intl.formatMessage({
                      id: "company-drop-document.reset-dropZone",
                    })}
                    textStyle={{
                      color: "cornflower",
                      fontWeight: 500,
                      fontSize: 2.25,
                      textAlign: "center",
                      lineHeight: 2.7,
                      underline: true,
                      cursor: "pointer",
                    }}
                  />
                </ResetDropZoneLink>
              </>
            )}
        </>
      )}
      <DropZoneContent uploadStatus={uploadStatus}>
        <CloudComputing />
        <Commons.Spacer height={1} />
        {dropText === "Fec" ? (
          <Commons.Text
            text={intl.formatMessage({ id: "initializationFEC.drop-file" })}
            textStyle={{ fontSize: 2.25, fontWeight: 500 }}
          />
        ) : dropText === "FileDrop" ? (
          <>
            <Commons.Text
              text={intl.formatMessage({
                id: "company-drop-document.drop-file",
              })}
              textStyle={{ fontSize: 2.25, fontWeight: 500 }}
            />
            <Commons.Text
              text={intl.formatMessage({
                id: "company-drop-document.drop-file-2",
              })}
              textStyle={{ fontSize: 2.25, fontWeight: 500 }}
            />
          </>
        ) : (
          <>
            <Commons.Text
              text={intl.formatMessage({ id: "importLogo.drop-file.1" })}
              textStyle={{ fontSize: 2.25, fontWeight: 500 }}
            />
            <Commons.Text
              text={intl.formatMessage({ id: "importLogo.drop-file.2" })}
              textStyle={{ fontSize: 2.25, fontWeight: 500 }}
            />
          </>
        )}
      </DropZoneContent>
    </DropFile>
  )
}

interface DropFileProps {
  dragover: boolean
  uploadStatus: UploadStatus
  height: string
  dropText: string
}

const DropFile = styled.div<DropFileProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: ${(props) =>
    props.uploadStatus === "success"
      ? `1px dashed ${colors.shamrock}`
      : props.uploadStatus === "error"
      ? `1px dashed ${colors.amaranth}`
      : `1px dashed ${colors.cornflower}`};

  background-color: ${(props) =>
    props.uploadStatus === "success"
      ? opacityColors.shamrock
      : props.uploadStatus === "error"
      ? opacityColors.amaranth
      : props.dropText === "Logo"
      ? opacityColors.mistSemiTransparant
      : colors.mist};
  height: ${(props) => props.height};
  width: 100%;

  border-radius: 3rem;
  opacity: ${(props) =>
    ["confirmation"].includes(props.uploadStatus) ? 0.5 : 1};
  pointer-events: ${(props) =>
    ["confirmation"].includes(props.uploadStatus) ? "none" : "auto"};
  transition: opacity 0.5s ease-in-out,
    0.6s height 0s cubic-bezier(0.65, 0.31, 0.83, 1.2),
    0.6s background-color ease-in-out, 0.6s border ease-in-out;
`

const DropZoneContent = styled.div<UploadStatusProp>`
  padding: ${(props) =>
    ["confirmation", "start"].includes(props.uploadStatus) ? "1rem" : "0"};
  max-height: ${(props) =>
    ["confirmation", "start"].includes(props.uploadStatus) ? "100%" : "0"};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${(props) =>
    ["confirmation", "start"].includes(props.uploadStatus) ? "1" : "0"};
  transition: 0.2s opacity 0s, 0s max-height 0.2s;
`

const ProgressBarWrapper = styled.div`
  width: 50rem;

  animation: 0.6s ${appearing} 0s ease-in-out;
`

const StatusMessage = styled((props) => <Commons.RowCenter {...props} />)`
  height: 5rem;
`

interface UploadStatusProp {
  uploadStatus: UploadStatus
}

const ResetDropZoneLink = styled.p``
