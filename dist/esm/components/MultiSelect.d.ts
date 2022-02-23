/// <reference types="react" />
interface MultiSelectProps<T> {
    options: Array<T>;
    value: ReadonlyArray<T> | null;
    field: unknown;
    label: string;
    domain: string;
    optionType: string;
    disabled?: boolean;
    onChange?: (newValue: ReadonlyArray<T>) => void;
    autoFocus?: boolean;
}
export declare function MultiSelect<T>(props: MultiSelectProps<T>): JSX.Element;
export {};
