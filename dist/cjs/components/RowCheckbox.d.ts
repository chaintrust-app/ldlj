/// <reference types="react" />
interface RowCheckboxProps {
    label: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
}
export declare const RowCheckbox: ({ label, name, isChecked, onChange, }: RowCheckboxProps) => JSX.Element;
export {};
