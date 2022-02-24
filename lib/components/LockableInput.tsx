import * as React from "react";
import Lock from "../../assets/lock.svg";
import { BaseInputProps, Input } from "./Input";

interface LockableInputProps extends BaseInputProps {
  locked: boolean;
}

export const LockableInput = (props: LockableInputProps) => {
  return (
    <Input
      {...props}
      onChange={props.locked ? () => {} : props.onChange}
      suffix={props.locked ? <Lock /> : undefined}
    />
  );
};
