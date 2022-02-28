/// <reference types="react" />
import { IntlShape } from "react-intl";
import { Option, OptionList } from "./Select";
export declare const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, intl, }: {
    sortMethod: (option: T) => void;
    options: OptionList<T>;
    defaultOption: Option<T>;
    shadowed?: boolean | undefined;
    dataCy?: string | undefined;
    intl: IntlShape;
}) => JSX.Element;
