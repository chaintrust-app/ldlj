/// <reference types="react" />
import { IntlShape } from "react-intl";
export interface MultiSelectProps<T> {
    options: Array<{
        value: T;
        label: string;
    }>;
    value: ReadonlyArray<{
        value: T | "all";
        label: string;
    }> | null;
    field: unknown;
    label: string;
    domain: string;
    optionType: string;
    disabled?: boolean;
    onChange?: (newValue: ReadonlyArray<{
        value: T | "all";
        label: string;
    }>) => void;
    autoFocus?: boolean;
    intl: IntlShape;
    canToggleAllOptions?: boolean;
}
export declare function MultiSelect<T>(props: MultiSelectProps<T>): JSX.Element;
