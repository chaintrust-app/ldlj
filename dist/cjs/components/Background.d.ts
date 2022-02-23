import { ReactNode } from "react";
export interface BackgroundProps {
    children: ReactNode;
    centeredTop?: boolean;
    padding?: number;
}
export declare const Background: ({ children, centeredTop, padding, }: BackgroundProps) => JSX.Element;
