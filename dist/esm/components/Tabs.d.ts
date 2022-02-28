import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ReactNode } from "react";
export interface TabObject {
    to: string;
    title: string;
    icon: ReactNode;
    isDisplayed: boolean;
}
interface TabsProps {
    useMatch: typeof useMatch;
    useResolvedPath: typeof useResolvedPath;
    Link: typeof Link;
    tabs: TabObject[];
}
export declare const Tabs: ({ useMatch, useResolvedPath, tabs, Link }: TabsProps) => JSX.Element;
export {};
