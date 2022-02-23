/// <reference types="react" />
import { colors } from "../design.config";
interface ProgressBarProps {
    color?: keyof typeof colors;
    progress: number;
    height?: number;
    withText?: boolean;
}
export declare const ProgressBar: ({ color, progress, height, withText, }: ProgressBarProps) => JSX.Element;
export {};
