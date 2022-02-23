import * as React from "react";
export interface AlertProps {
    children: React.ReactNode;
    alertType: alertType;
    centerIcon?: boolean;
    boxSizing?: string;
    margin?: string;
    padding?: string;
    stretch?: boolean;
}
declare type alertType = "error" | "warning" | "info" | "success";
export declare const Alert: ({ children, alertType, centerIcon, boxSizing, margin, padding, stretch, }: AlertProps) => JSX.Element;
export {};
