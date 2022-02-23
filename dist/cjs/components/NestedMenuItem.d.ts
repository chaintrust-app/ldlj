/// <reference types="react" />
export interface MenuItemProps {
    label: string;
    linkTo: string;
    selected: boolean;
    blocked: boolean;
}
export declare const NestedMenuItem: ({ label, selected, linkTo, blocked, }: MenuItemProps) => JSX.Element;
