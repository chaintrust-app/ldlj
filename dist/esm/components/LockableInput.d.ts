/// <reference types="react" />
import { BaseInputProps } from "./Input";
interface LockableInputProps extends BaseInputProps {
    locked: boolean;
}
export declare const LockableInput: (props: LockableInputProps) => JSX.Element;
export {};
