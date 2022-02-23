import { ReactNode } from "react";
export interface inputLabelProps {
    children: ReactNode;
    hasValue: boolean;
    disabled: boolean;
    isFocused: boolean;
}
declare const InputMovingPlaceholder: (props: inputLabelProps) => JSX.Element;
export default InputMovingPlaceholder;
