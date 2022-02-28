/// <reference types="react" />
import { IntlShape } from "react-intl";
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
    intl: IntlShape;
}
export declare function MultiSelect<T>(props: MultiSelectProps<T>): JSX.Element;
export {};
