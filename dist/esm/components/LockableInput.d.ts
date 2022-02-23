/// <reference types="react" />
import * as Commons from "../Commons";
interface LockableInputProps extends Commons.BaseInputProps {
    locked: boolean;
}
export declare const LockableInput: (props: LockableInputProps) => JSX.Element;
export {};
