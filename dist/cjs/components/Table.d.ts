import { ReactNode } from "react";
import { colors } from "../design.config";
import { FontWeight } from "./Text";
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
    paddingHeader?: string;
    paddingBody?: string;
    paddingRows?: string;
    fontWeightTitle?: FontWeight | undefined;
}
export declare const Table: <T>({ columns, rows, rowBackgroundColors, width, height, alignItems, padding, alertMessage, rowTooltip, suffixContent, keyBuilder, intl, paddingHeader, paddingBody, paddingRows, fontWeightTitle, }: TableProps<T>) => JSX.Element;
export declare const TitleTable: ({ tid, fontWeightTitle, intl, }: {
    tid: string;
    fontWeightTitle?: FontWeight | undefined;
    intl: IntlShape;
}) => JSX.Element;
interface HeaderProps {
    paddingHeader?: string;
}
export declare const Header: import("styled-components").StyledComponent<"header", any, HeaderProps, never>;
export {};
