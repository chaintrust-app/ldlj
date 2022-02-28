import { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
export interface MenuItemProps {
    label: string;
    linkTo?: string;
    selected: boolean;
    iconIdle: ReactNode;
    iconSelected: ReactNode;
    useNavigate: () => NavigateFunction;
}
export declare const MenuItem: ({ label, selected, linkTo, iconIdle, iconSelected, useNavigate }: MenuItemProps) => JSX.Element;
