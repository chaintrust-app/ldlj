import * as React from "react";
import { ReactComponent as CloseCrossSVG } from "../assets/close-cross.svg";
import styled from "styled-components";
import { Modal, ModalComponentsProps } from "./Modal";
import { Spacer } from "./Spacer";
import { Title } from "./Title";
import { Card } from "./Card";
import { fileExtensionOfString } from "../utils/string";

export interface displayPreviewParams {
  isDisplayed: boolean
  elementToDisplay: string
  elementName: string
  displayInvoice?: boolean
}

interface DocumentPreviewModalParams extends ModalComponentsProps {
  documentToDisplay: string
  elementName: string
  displayInvoice?: boolean
}

export const DocumentPreviewModal = ({
  isDisplayed,
  onClose,
  documentToDisplay,
  elementName,
  displayInvoice,
}: DocumentPreviewModalParams) => {
  const currentRef = React.useRef<HTMLIFrameElement | null>(null)
  return (
    <Modal isDisplayed={isDisplayed} onClose={onClose} top="16rem">
      <StyledCard width="58vw" height={"100rem"}>
        <Spacer height={2} />
        <HeaderPreviewModal>
          <TextWrapper>
            <Title text={elementName} size={3} />
          </TextWrapper>
          <CrossWrapper onClick={() => onClose()}>
            <CloseCrossSVG />
          </CrossWrapper>
        </HeaderPreviewModal>
        <Spacer height={2} />
        <StyledIframe
          src={documentToDisplay}
          ref={currentRef}
          onLoad={() => {
            const doc = currentRef.current?.contentDocument
            const isPdf =
              displayInvoice || fileExtensionOfString(elementName) === "pdf"
            if (doc && !isPdf)
              doc.body.innerHTML =
                doc.body.innerHTML + "<style> img {width: 100%;} </style>"
          }}
        />
      </StyledCard>
    </Modal>
  )
}

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`
const StyledCard = styled(Card)`
  padding: 0;
  border-radius: 1rem;
`

const HeaderPreviewModal = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

const CrossWrapper = styled.div`
  cursor: pointer;
  position: relative;
  right: 18px;
`

const TextWrapper = styled.div`
  display: flex;
  margin: auto;
`
