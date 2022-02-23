/// <reference types="react" />
declare type AlignInterface = "auto" | "center" | "start" | "end" | "flex-start" | "flex-end" | "unset";
interface BarProps {
    height?: number;
    width?: number;
    align?: AlignInterface;
}
export declare const Bar: ({ height, width, align }: BarProps) => JSX.Element;
export {};
