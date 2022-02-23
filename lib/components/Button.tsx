import * as React from "react"
import { colors, gradients, rotate } from "../design.config"
import styled, { css, keyframes } from "styled-components/macro"
import { ReactNode } from "react"
import { Spacer } from "./Spacer"
import { ReactComponent as LocationArrow } from "../assets/location-arrow.svg"
import { ReactComponent as Checked } from "../assets/checked.svg"
import { StyledLoaderShadow } from ".."


type ColorType = "Primary" | "Secondary" | "Tertiary" | "Quaternary"

type ColorScheme = {
  background: keyof typeof colors
  color: keyof typeof colors
  border: keyof typeof colors
}

export type LoadingStatus = "idle" | "loading" | "success" | "error"

export interface ButtonProps {
  label: ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: "submit"
  colorType?: ColorType
  width?: "auto" | number
  height?: number
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "none"
  prefix?: ReactNode
  suffix?: ReactNode
  loadingStatus?: LoadingStatus
  colorScheme?: ColorScheme
  id?: string
  dataCy?: string
}
export const Button = ({
  id,
  dataCy,
  label,
  onClick,
  disabled = false,
  type,
  colorType = "Primary",
  width = 20,
  height = 6,
  textTransform = "uppercase",
  prefix,
  loadingStatus = "idle",
  suffix,
  colorScheme = {
    background: "mist",
    color: "white",
    border: "mist",
  },
}: ButtonProps) => (
  <>
    {colorType === "Primary" && (
      <FlexWrapper width={width}>
        <OverFlowHiddenMask
          loadingStatus={loadingStatus}
          width={width}
          height={height}
        >
          <StyledButtonPrimary
            type={type === "submit" ? "submit" : "button"}
            onClick={onClick}
            disabled={disabled}
            colorType={colorType}
            width={width}
            height={height}
            loadingStatus={loadingStatus}
            id={id}
            data-cy={dataCy}
          >
            <Zindex
              loadingStatus={loadingStatus}
              width={width}
              height={height}
              textTransform={textTransform}
              disabled={disabled}
              colorScheme={colorScheme}
            >
              {prefix ? (
                <>
                  {prefix}
                  <Spacer width={1} />
                </>
              ) : null}
              {label}
            </Zindex>
          </StyledButtonPrimary>
          <RotatingWrapper>
            <AppearingSpinningLoader $loadingStatus={loadingStatus} />
          </RotatingWrapper>
          <SVGColorWrapper loadingStatus={loadingStatus}>
            <Checked />
          </SVGColorWrapper>
        </OverFlowHiddenMask>
      </FlexWrapper>
    )}
    {colorType === "Secondary" && (
      <StyledButtonSecondary
        type={type === "submit" ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        colorType={colorType}
        width={width}
        height={height}
        loadingStatus={loadingStatus}
        id={id}
        data-cy={dataCy}
      >
        <Zindex
          loadingStatus={loadingStatus}
          width={width}
          height={height}
          textTransform={textTransform}
          disabled={disabled}
          colorScheme={colorScheme}
        >
          {prefix && (
            <>
              {prefix}
              <Spacer width={1} />
            </>
          )}
          {label}
          {suffix && (
            <>
              <Spacer width={1} />
              {suffix}
            </>
          )}
        </Zindex>
      </StyledButtonSecondary>
    )}
    {colorType === "Tertiary" && (
      <StyledButtonTertiary
        type={type === "submit" ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        colorType={colorType}
        width={width}
        height={height}
        loadingStatus={loadingStatus}
        colorScheme={colorScheme}
        id={id}
        data-cy={dataCy}
      >
        <Zindex
          loadingStatus={loadingStatus}
          width={width}
          height={height}
          textTransform={textTransform}
          disabled={disabled}
          colorScheme={colorScheme}
        >
          {prefix && (
            <>
              {prefix}
              <Spacer width={1} />
            </>
          )}
          {label}
          {suffix && (
            <>
              <Spacer width={1} />
              {suffix}
            </>
          )}
        </Zindex>
      </StyledButtonTertiary>
    )}
    {colorType === "Quaternary" && (
      <StyledButtonQuaternary
        type={type === "submit" ? "submit" : "button"}
        onClick={onClick}
        disabled={disabled}
        colorType={colorType}
        width={width}
        height={height}
        loadingStatus={loadingStatus}
        id={id}
        data-cy={dataCy}
      >
        <Zindex
          loadingStatus={loadingStatus}
          width={width}
          height={height}
          textTransform={textTransform}
          disabled={disabled}
          colorScheme={colorScheme}
        >
          {prefix && (
            <>
              {prefix}
              <Spacer width={1} />
            </>
          )}
          {label}
          <Spacer width={0.5} />
          <LocationArrow />
          <Spacer width={1} />
          <StyledSeparator />
          <Spacer width={1} />
          {suffix && <>{suffix}</>}
        </Zindex>
      </StyledButtonQuaternary>
    )}
  </>
)

const StyledSeparator = styled.div`
  width: 1px;
  height: 100%;
  background-color: ${colors.cornflower};
`

const sharedButtonProps = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 42rem;
  border: none;
  border-radius: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
`

type ButtonStyleProps = Required<
  Pick<ButtonProps, "height" | "width" | "colorType" | "loadingStatus">
>

type TertiaryButtonStyleProps = Required<
  Pick<
    ButtonProps,
    "height" | "width" | "colorType" | "loadingStatus" | "colorScheme"
  >
>
const roundLoadingSize = "4rem"

const SVGColorWrapper = styled.div<
  Required<Pick<ButtonProps, "loadingStatus">>
>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${roundLoadingSize};
  width: ${roundLoadingSize};
  background: ${gradients.blue};
  border-radius: 50%;

  opacity: ${({ loadingStatus }) => (loadingStatus === "success" ? "1" : "0")};
  transition: 0.6s opacity 0s ease-in-out;

  pointer-events: none;

  & svg {
    height: 1.75rem;
    width: 1.75rem;
    fill: ${colors.white};
  }
`

const RotatingWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${roundLoadingSize};
  width: ${roundLoadingSize};
  pointer-events: none;
  cursor: auto;
`

const AppearingSpinningLoader = styled((props) => (
  <StyledLoaderShadow {...props} />
))<{
  $loadingStatus: LoadingStatus
}>`
  animation: 0.6s ${rotate} 0s linear infinite;
  transform-origin: center;
  margin: 0;
  height: 3rem;
  width: 3rem;
  max-height: 3rem;
  max-width: 3rem;
  box-sizing: border-box;
  opacity: ${({ $loadingStatus }) =>
    $loadingStatus === "loading" ? "1" : "0"};
  transition: 0.6s opacity 0.8s ease-in-out;
  display: ${({ $loadingStatus }) =>
    ["success", "error"].includes($loadingStatus) ? "none" : "flex"};
  cursor: auto;
`

const FlexWrapper = styled.div<Required<Pick<ButtonProps, "width">>>`
  position: relative;
  display: flex;
  width: ${({ width }) => (width === "auto" ? "auto" : width + "rem")};
  align-items: center;
  justify-content: center;
`

export const bounce = keyframes`
  0% {
    width: 20rem;
    border-radius:1.25rem;
  }
  
  20% {
    width: 2rem;
    border-radius:50%;
  }
  25% {
    width: 2rem;
    border-radius:50%;
  }
  45% {
    width: 4rem;
    border-radius:50%;
  }
  
  100% {
    width: 4rem;
    border-radius:50%;
  }
`

const OverFlowHiddenMask = styled.div<Omit<ButtonStyleProps, "colorType">>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: ${({ height, loadingStatus }) =>
    loadingStatus === "loading" ? roundLoadingSize : height + "rem"};
  width: ${({ width, loadingStatus }) =>
    loadingStatus === "loading"
      ? roundLoadingSize
      : width === "auto"
      ? "auto"
      : width + "rem"};

  animation: ${({ loadingStatus }) =>
    loadingStatus === "loading"
      ? css`2s ${bounce} 0s ease-in-out` /* stylelint-disable-line */
      : ""};

  background-color: ${({ loadingStatus }) =>
    loadingStatus === "success" ? colors.mist : colors.mist};

  overflow: ${({ loadingStatus }) =>
    loadingStatus === "loading" ? "hidden" : "visible"};

  border-radius: ${({ loadingStatus }) =>
    loadingStatus === "loading" ? "50%" : "1.25rem"};
  transition: 0.4s border-radius ease-in-out, 0.4s height ease-in-out,
    0.4s width ease-in-out;
`

const StyledButtonPrimary = styled.button<ButtonStyleProps>`
  ${sharedButtonProps};
  width: ${({ width, loadingStatus }) =>
    loadingStatus === "loading" || loadingStatus === "success"
      ? roundLoadingSize
      : width === "auto"
      ? "auto"
      : width + "rem"};
  height: ${({ height, loadingStatus }) =>
    loadingStatus === "loading" || loadingStatus === "success"
      ? roundLoadingSize
      : height + "rem"};
  color: ${({ disabled }) => (disabled ? colors.moon : colors.white)};
  cursor: ${({ disabled, loadingStatus }) =>
    disabled
      ? "not-allowed"
      : loadingStatus === "loading"
      ? "auto"
      : "pointer"};

  border-radius: ${({ loadingStatus }) =>
    loadingStatus === "loading" || loadingStatus === "success"
      ? "50%"
      : "1.25rem"};
  opacity: 1;
  z-index: 0;
  background-image: linear-gradient(#eff0f6 50%, #eff0f6 50%);
  transition: 0.4s border-radius ease-in-out, 0.4s height ease-in-out,
    0.4s width ease-in-out, 0.4s opacity ease-in-out;

  :before {
    opacity: ${({ disabled }) => (disabled ? 0 : 1)};
    transition: 0.4s opacity ease-in-out;
    background-image: linear-gradient(125.36deg, #6b92ff 5.35%, #9fd8ff 94.88%);
    z-index: 1;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const StyledButtonSecondary = styled.button<ButtonStyleProps>`
  ${sharedButtonProps};
  width: ${({ width }) => (width === "auto" ? "auto" : width + "rem")};
  height: ${({ height }) => height + "rem"};
  background-color: ${({ disabled }) => (disabled ? colors.mist : colors.mist)};
  color: ${({ disabled }) => (disabled ? colors.moon : colors.cornflower)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  box-shadow: 0 4px 4px rgba(2, 76, 248, 0.2);
`

const StyledButtonTertiary = styled.button<TertiaryButtonStyleProps>`
  ${sharedButtonProps};
  width: ${({ width }) => (width === "auto" ? "auto" : width + "rem")};
  height: ${({ height }) => height + "rem"};
  background-color: ${({ disabled, colorScheme }) =>
    disabled ? colors.mist : colors[colorScheme.background]};
  color: ${({ disabled, colorScheme }) =>
    disabled ? colors.moon : colors[colorScheme.color]};
  border: ${({ disabled, colorScheme }) =>
    disabled
      ? `1px solid ${colors.mist}`
      : `1px solid ${colors[colorScheme.border]}`};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`

const StyledButtonQuaternary = styled.button<ButtonStyleProps>`
  ${sharedButtonProps};
  width: ${({ width }) => (width === "auto" ? "auto" : width + "rem")};
  height: ${({ height }) => (height ? height + "rem" : "6rem")};
  background-color: ${colors.white};
  color: ${colors.slateGrey};
  cursor: pointer;
`

const Zindex = styled.div<
  Required<
    Pick<
      ButtonProps,
      | "width"
      | "height"
      | "textTransform"
      | "loadingStatus"
      | "disabled"
      | "colorScheme"
    >
  >
>`
  width: ${({ width }) => (width === "auto" ? "auto" : width + "rem")};
  height: ${({ height }) => height + "rem"};
  text-transform: ${({ textTransform }) => textTransform};
  color: ${({ loadingStatus, disabled, colorScheme }) =>
    loadingStatus === "loading"
      ? "transparent"
      : disabled
      ? colors.moon
      : colors[colorScheme.color]};
  opacity: ${({ loadingStatus }) => (loadingStatus === "idle" ? "1" : "0")};
  transition: 0.4s opacity 0.6s ease-in-out;

  letter-spacing: 0.075rem;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  > span,
  > span > span {
    cursor: pointer;
  }

  > svg {
    stroke: ${({ disabled }) => (disabled ? colors.moon : "auto")};
  }
`
