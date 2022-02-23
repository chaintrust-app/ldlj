import { ReactNode } from "react";
export interface MenuItemProps {
    label: string;
    linkTo?: string;
    selected: boolean;
    iconIdle: ReactNode;
    iconSelected: ReactNode;
}
export declare const MenuItem: ({ label, selected, linkTo, iconIdle, iconSelected, }: MenuItemProps) => JSX.Element;
