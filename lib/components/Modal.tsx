import * as React from "react"
import styled from "styled-components/macro"
import { colors } from "../design.config"

export const Modal = ({
  isDisplayed,
  onClose,
  children,
  ...rest
}: ModalProps) => {
  return (
    <ModalWrapper isDisplayed={isDisplayed} {...rest}>
      <ModalBackground
        isDisplayed={isDisplayed}
        onClick={() => {
          isDisplayed && onClose()
        }}
        {...rest}
      />
      {isDisplayed && (
        <ModalBody isDisplayed={isDisplayed} {...rest}>
          {children}
        </ModalBody>
      )}
    </ModalWrapper>
  )
}

interface ModalStyleProps {
  isDisplayed: boolean
  height?: number
  top?: string
  left?: string
  right?: string
  bottom?: string
  backgroundDisabled?: boolean
}

interface ModalProps extends ModalStyleProps {
  onClose: () => void
  children?: React.ReactNode
}

export interface ModalComponentsProps {
  isDisplayed: boolean
  onClose: () => void
}

const ModalWrapper = styled.div<ModalStyleProps>`
  display: flex;
  justify-content: center;
  height: ${(props) => (props.isDisplayed ? "auto" : "0")};
  overflow: hidden;
  touch-action: ${(props) => (props.isDisplayed ? "auto" : "none")};
`

const ModalBackground = styled.div<ModalStyleProps>`
  position: fixed;
  display: ${(props) => (props.backgroundDisabled ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  left: 0;
  background-color: ${colors.navy};
  opacity: ${(props) =>
    props.isDisplayed && props.backgroundDisabled !== true ? 0.4 : 0};
  transition: 0.6s opacity ease-in-out;
  z-index: 10;
  text-align: center;
  width: 100vw;
  height: 100vh;
  pointer-events: ${(props) => (props.isDisplayed ? "auto" : "none")};
  touch-action: ${(props) => (props.isDisplayed ? "auto" : "none")};
`

const ModalBody = styled.div<ModalStyleProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  opacity: ${(props) => (props.isDisplayed ? 1 : 0)};
  transition: 0.2s opacity ease-in-out 0.2s;
  z-index: 11;
  pointer-events: ${(props) => (props.isDisplayed ? "auto" : "none")};
  touch-action: ${(props) => (props.isDisplayed ? "auto" : "none")};
`
