import * as React from "react";
import { ChangeEventHandler } from "react";
import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
export interface BaseInputProps {
    label: string;
    name?: string;
    register?: UseFormRegister<FieldValues>;
    validations?: RegisterOptions;
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
    padding?: string;
    isSearch?: boolean;
}
export interface InputProps extends BaseInputProps {
    suffix?: JSX.Element;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<React.RefObject<HTMLInputElement>>>;
