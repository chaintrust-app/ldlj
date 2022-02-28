/// <reference types="react" />
import { colors } from "../design.config";
export declare type FontWeight = 400 | 500 | 600 | 700;
export interface TextProps {
    text: string;
    textStyle?: {
        color?: keyof typeof colors;
        fontSize?: number;
        lineHeight?: number;
        underline?: boolean;
        fontStyle?: "normal" | "italic";
        fontFamily?: "Roboto" | "Poppins";
        fontWeight?: FontWeight;
        textTransform?: "uppercase" | "lowercase" | "capitalize" | "initial";
        cursor?: "pointer" | "auto" | "default";
        textAlign?: "center";
    };
    dataCy?: string;
    onClick?: () => void;
}
export declare const Text: (props: TextProps) => JSX.Element;
