import * as React from "react"
import { ReactComponent as Lock } from "../../assets/lock.svg"
import * as Commons from "../Commons"

interface LockableInputProps extends Commons.BaseInputProps {
  locked: boolean
}

export const LockableInput = (props: LockableInputProps) => {
  return (
    <Commons.Input
      {...props}
      onChange={props.locked ? () => {} : props.onChange}
      suffix={props.locked ? <Lock /> : undefined}
    />
  )
}
