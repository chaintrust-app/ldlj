/// <reference types="react" />
export interface selectOption {
    value: string;
    label: string;
}
export interface creatableSelectProps {
    options: Array<selectOption>;
    value: selectOption | null;
    disabled: boolean;
    onChangeCallback?: (option: selectOption | null) => void;
    onCreateOption: (text: string) => void;
    placeholderText: string;
    formatCreateLabel: string;
    inputId?: string;
}
export declare const CreatableSelect: (props: creatableSelectProps) => JSX.Element;
