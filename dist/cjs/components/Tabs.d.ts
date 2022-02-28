import { ReactNode } from "react";
export interface TabObject {
    to: string;
    title: string;
    iconIdle: ReactNode;
    iconSelected?: ReactNode;
    isDisplayed: boolean;
    isSelected?: boolean;
}
export declare const Tabs: ({ tabs }: {
    tabs: TabObject[];
}) => JSX.Element;
