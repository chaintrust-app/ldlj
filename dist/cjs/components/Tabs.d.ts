import { ReactNode } from "react";
export interface TabObject {
    to: string;
    title: string;
    icon: ReactNode;
    isDisplayed: boolean;
}
export declare const Tabs: ({ tabs }: {
    tabs: TabObject[];
}) => JSX.Element;
