import { colors } from "../design.config";
import { ReactNode } from "react";
declare type ColorType = "Primary" | "Secondary" | "Tertiary" | "Quaternary";
declare type ColorScheme = {
    background: keyof typeof colors;
    color: keyof typeof colors;
    border: keyof typeof colors;
};
export declare type LoadingStatus = "idle" | "loading" | "success" | "error";
export interface ButtonProps {
    label: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit";
    colorType?: ColorType;
    width?: "auto" | number;
    height?: number;
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
    prefix?: ReactNode;
    suffix?: ReactNode;
    loadingStatus?: LoadingStatus;
    colorScheme?: ColorScheme;
    id?: string;
    dataCy?: string;
}
export declare const Button: ({ id, dataCy, label, onClick, disabled, type, colorType, width, height, textTransform, prefix, loadingStatus, suffix, colorScheme, }: ButtonProps) => JSX.Element;
export declare const bounce: import("styled-components").Keyframes;
export {};
