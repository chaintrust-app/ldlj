/// <reference types="react" />
import { FieldValues, UseFormRegister } from "react-hook-form";
interface InputDateProps {
    name: string;
    label: string;
    disabled: boolean;
    value: string;
    register?: UseFormRegister<FieldValues>;
    minimum?: string;
    maximum?: string;
    onChangeValue: (value: string) => void;
}
export declare const InputDate: (props: InputDateProps) => JSX.Element;
export {};
