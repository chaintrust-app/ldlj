import { ReactNode } from "react";
import { colors } from "../design.config";
import { IntlShape } from "react-intl";
export interface TableBuilder<T> {
    headerText: string;
    flexGrow?: string;
    content: (rowData: T) => JSX.Element;
}
export interface TableProps<T> {
    columns: TableBuilder<T>[];
    rows: Array<T>;
    rowBackgroundColors?: Array<keyof typeof colors>;
    width?: string;
    height?: string;
    alignItems?: string;
    padding?: string;
    alertMessage?: string;
    rowTooltip?: (rowData: T) => {
        "data-tip": string;
    } | {};
    suffixContent?: ReactNode;
    keyBuilder?: (rowData: T, index: number) => string;
    intl: IntlShape;
}
export declare const Table: <T>({ columns, rows, rowBackgroundColors, width, height, alignItems, padding, alertMessage, rowTooltip, suffixContent, keyBuilder, intl, }: TableProps<T>) => JSX.Element;
export declare const TitleTable: ({ tid, intl }: {
    tid: string;
    intl: IntlShape;
}) => JSX.Element;
export declare const Header: import("styled-components").StyledComponent<"header", any, {}, never>;
