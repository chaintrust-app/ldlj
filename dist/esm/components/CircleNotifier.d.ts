/// <reference types="react" />
declare type NotifierColors = "error" | "success";
interface CircleNotifierProps {
    type: NotifierColors;
}
export declare const CircleNotifier: ({ type }: CircleNotifierProps) => JSX.Element;
export {};
