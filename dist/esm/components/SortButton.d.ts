/// <reference types="react" />
import { Option, OptionList } from "./Select";
export declare const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, }: {
    sortMethod: (option: T) => void;
    options: OptionList<T>;
    defaultOption: Option<T>;
    shadowed?: boolean | undefined;
    dataCy?: string | undefined;
}) => JSX.Element;
