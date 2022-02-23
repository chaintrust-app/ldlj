/// <reference types="react" />
interface CheckboxProps {
    label: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
    id?: string;
    disabled?: boolean;
}
export declare const Checkbox: ({ label, name, isChecked, onChange, disabled, }: CheckboxProps) => JSX.Element;
export {};
