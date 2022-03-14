/// <reference types="react" />
import { IntlShape } from "react-intl";
interface SelectProps {
    options: Array<Option<string>>;
    value: Option<string> | null;
    label?: string;
    domain?: string;
    optionType?: string;
    defaultValue?: Option<string> | null;
    field?: unknown;
    disabled?: boolean;
    selectType?: string;
    onChangeCallback?: (value: Option<string>) => void;
    shadowed?: boolean;
    isClearable?: boolean;
    dataCy?: string;
    customWidth?: string;
    intl: IntlShape;
    asc?: boolean;
}
export declare type Option<T extends string> = {
    value: T;
    label: string;
    disabled?: boolean;
    sortType?: "string" | "number" | "date";
};
export declare type OptionList<T extends string> = Array<Option<T>>;
export declare function createOptionList<T extends string>(optionList: Array<[T, string, boolean?]>): OptionList<T>;
export declare function Select(props: SelectProps): JSX.Element;
export interface Selector {
    value: string | null;
    disabled: boolean;
    isFocused: boolean;
    selectType: string;
    shadowed: boolean;
    myDefaultValue: string | null;
    customWidth: string | undefined;
}
export declare const StyledSelect: import("styled-components").StyledComponent<"div", any, Selector, never>;
export {};
