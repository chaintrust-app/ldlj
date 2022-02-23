/// <reference types="react" />
import { colors } from "../../styles/design.config";
declare type SeparatorSize = "half" | "full";
interface SeparatorProps {
    size: SeparatorSize;
    color?: keyof typeof colors;
}
export declare const Separator: ({ size, color, }: SeparatorProps) => JSX.Element;
export declare const VerticalSeparator: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
