import * as React from "react";
import { colors } from "../design.config";
declare type trianglePosition = {
    position: "left" | "top";
    size: 1.25 | 2.5;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
} | null;
export interface CardProps {
    children: React.ReactNode;
    width?: string;
    height?: string;
    trianglePosition?: trianglePosition;
    className?: string;
    backgroundColor?: keyof typeof colors;
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
    overridePosition?: boolean;
    radius?: number;
    padding?: string;
    onBlur?: () => void;
}
export declare const Card: React.VFC<CardProps>;
export {};
