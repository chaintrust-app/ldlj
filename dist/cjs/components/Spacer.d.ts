/// <reference types="react" />
declare type SpacingUnit = 0 | 0.25 | 0.5 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 3 | 3.75 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
interface SpacerProps {
    height?: SpacingUnit;
    width?: SpacingUnit;
}
export declare const Spacer: ({ height, width }: SpacerProps) => JSX.Element;
export {};
