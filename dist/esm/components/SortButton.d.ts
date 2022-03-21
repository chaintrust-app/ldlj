/// <reference types="react" />
import { IntlShape } from "react-intl";
import { Option, OptionList } from "./Select";
export declare const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, intl, asc, height, }: {
    sortMethod: (option: T) => void;
    options: OptionList<T>;
    defaultOption: Option<T>;
    shadowed?: boolean | undefined;
    dataCy?: string | undefined;
    intl: IntlShape;
    asc?: boolean | undefined;
    height?: string | undefined;
}) => JSX.Element;
