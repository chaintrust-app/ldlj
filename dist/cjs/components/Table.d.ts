import { ReactNode } from "react";
import { colors } from "../../styles/design.config";
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
}
export declare const Table: <T>({ columns, rows, rowBackgroundColors, width, height, alignItems, padding, alertMessage, rowTooltip, suffixContent, keyBuilder, }: TableProps<T>) => JSX.Element;
export declare const TitleTable: ({ tid }: {
    tid: string;
}) => JSX.Element;
export declare const Header: import("styled-components").StyledComponent<"header", any, {}, never>;
