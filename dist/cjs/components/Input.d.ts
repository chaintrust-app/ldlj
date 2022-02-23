import { ChangeEventHandler, RefObject } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
export interface BaseInputProps {
    label: string;
    name?: string;
    register?: UseFormRegister<FieldValues>;
    validations?: RegisterOptions<FieldValues>;
    type?: "password" | "text" | "checkbox" | "email" | "number";
    value: string;
    showError?: boolean;
    showWarning?: boolean;
    showSuccess?: boolean;
    autoFocus?: boolean;
    id?: string;
    isPrefilled?: boolean;
    disabled?: boolean;
    bypassDisabled?: boolean;
    maxWidth?: number | "auto";
    onChange?: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    borderRadius?: number;
    maxLength?: number;
    max?: string;
    min?: string;
    placeholder?: string;
    shadowed?: boolean;
    noBorder?: boolean;
    readOnly?: boolean;
    dataCy?: string;
    onInput?: () => void;
}
interface InputProps extends BaseInputProps {
    suffix?: JSX.Element;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<RefObject<HTMLInputElement>>>;
export {};
