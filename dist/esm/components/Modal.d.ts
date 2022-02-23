import * as React from "react";
export declare const Modal: ({ isDisplayed, onClose, children, ...rest }: ModalProps) => JSX.Element;
interface ModalStyleProps {
    isDisplayed: boolean;
    height?: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    backgroundDisabled?: boolean;
}
interface ModalProps extends ModalStyleProps {
    onClose: () => void;
    children?: React.ReactNode;
}
export interface ModalComponentsProps {
    isDisplayed: boolean;
    onClose: () => void;
}
export {};
