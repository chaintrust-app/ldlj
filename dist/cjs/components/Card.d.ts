import { colors } from "../design.config";
import { VFC } from "react";
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
    height?: number;
    trianglePosition?: trianglePosition;
    className?: string;
    backgroundColor?: keyof typeof colors;
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
    overridePosition?: boolean;
    radius?: number;
    padding?: number;
}
export declare const Card: VFC<CardProps>;
export {};
