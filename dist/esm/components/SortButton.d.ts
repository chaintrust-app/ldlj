/// <reference types="react" />

export declare const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, }: {
    sortMethod: (option: T) => void;
    options: Commons.OptionList<T>;
    defaultOption: Commons.Option<T>;
    shadowed?: boolean | undefined;
    dataCy?: string | undefined;
}) => JSX.Element;
