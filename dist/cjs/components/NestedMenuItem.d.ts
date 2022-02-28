/// <reference types="react" />
import { NavigateFunction } from "react-router-dom";
export interface MenuItemProps {
    label: string;
    linkTo: string;
    selected: boolean;
    blocked: boolean;
    useNavigate: () => NavigateFunction;
}
export declare const NestedMenuItem: ({ label, selected, linkTo, blocked, useNavigate }: MenuItemProps) => JSX.Element;
