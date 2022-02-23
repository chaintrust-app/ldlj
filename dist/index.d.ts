/// <reference types="react" />
import * as React from 'react';
import { ReactNode, VFC, ChangeEventHandler } from 'react';
import * as styled_components from 'styled-components';
import { UseFormRegister, FieldValues, RegisterOptions } from 'react-hook-form';
import * as react_toastify from 'react-toastify';

interface AlertProps {
    children: React.ReactNode;
    alertType: alertType;
    centerIcon?: boolean;
    boxSizing?: string;
    margin?: string;
    padding?: string;
    stretch?: boolean;
}
declare type alertType = "error" | "warning" | "info" | "success";
declare const Alert: ({ children, alertType, centerIcon, boxSizing, margin, padding, stretch, }: AlertProps) => JSX.Element;

interface BackgroundProps {
    children: ReactNode;
    centeredTop?: boolean;
    padding?: number;
}
declare const Background: ({ children, centeredTop, padding, }: BackgroundProps) => JSX.Element;

declare type AlignInterface = "auto" | "center" | "start" | "end" | "flex-start" | "flex-end" | "unset";
interface BarProps {
    height?: number;
    width?: number;
    align?: AlignInterface;
}
declare const Bar: ({ height, width, align }: BarProps) => JSX.Element;

declare const colors: {
    cornflower: string;
    columbia: string;
    rock: string;
    lavender: string;
    shamrock: string;
    radicalRed: string;
    brightSun: string;
    lightSun: string;
    orange: string;
    amaranth: string;
    navy: string;
    slateGrey: string;
    lightBlueGrey: string;
    moon: string;
    mist: string;
    desertStorm: string;
    white: string;
    disabledGrey: string;
    steelBlue: string;
};

declare type ColorType = "Primary" | "Secondary" | "Tertiary" | "Quaternary";
declare type ColorScheme = {
    background: keyof typeof colors;
    color: keyof typeof colors;
    border: keyof typeof colors;
};
declare type LoadingStatus = "idle" | "loading" | "success" | "error";
interface ButtonProps {
    label: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "submit";
    colorType?: ColorType;
    width?: "auto" | number;
    height?: number;
    textTransform?: "uppercase" | "lowercase" | "capitalize" | "none";
    prefix?: ReactNode;
    suffix?: ReactNode;
    loadingStatus?: LoadingStatus;
    colorScheme?: ColorScheme;
    id?: string;
    dataCy?: string;
}
declare const Button: ({ id, dataCy, label, onClick, disabled, type, colorType, width, height, textTransform, prefix, loadingStatus, suffix, colorScheme, }: ButtonProps) => JSX.Element;

declare type trianglePosition = {
    position: "left" | "top";
    size: 1.25 | 2.5;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
} | null;
interface CardProps {
    children: React.ReactNode;
    width?: string;
    height?: number;
    trianglePosition?: trianglePosition;
    className?: string;
    backgroundColor?: keyof typeof colors;
    alignSelf?: "flex-start" | "flex-end" | "center" | "stretch";
    overridePosition?: boolean;
    radius?: number;
    padding?: number;
}
declare const Card: VFC<CardProps>;

interface CheckboxProps {
    label: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
    id?: string;
    disabled?: boolean;
}
declare const Checkbox: ({ label, name, isChecked, onChange, disabled, }: CheckboxProps) => JSX.Element;

declare type NotifierColors = "error" | "success";
interface CircleNotifierProps {
    type: NotifierColors;
}
declare const CircleNotifier: ({ type }: CircleNotifierProps) => JSX.Element;

interface selectOption {
    value: string;
    label: string;
}
interface creatableSelectProps {
    options: Array<selectOption>;
    value: selectOption | null;
    disabled: boolean;
    onChangeCallback?: (option: selectOption | null) => void;
    onCreateOption: (text: string) => void;
    placeholderText: string;
    formatCreateLabel: string;
    inputId?: string;
}
declare const CreatableSelect: (props: creatableSelectProps) => JSX.Element;

declare const Modal: ({ isDisplayed, onClose, children, ...rest }: ModalProps) => JSX.Element;
interface ModalStyleProps {
    isDisplayed: boolean;
    height?: number;
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
    backgroundDisabled?: boolean;
}
interface ModalProps extends ModalStyleProps {
    onClose: () => void;
    children?: React.ReactNode;
}
interface ModalComponentsProps {
    isDisplayed: boolean;
    onClose: () => void;
}

interface displayPreviewParams {
    isDisplayed: boolean;
    elementToDisplay: string;
    elementName: string;
    displayInvoice?: boolean;
}
interface DocumentPreviewModalParams extends ModalComponentsProps {
    documentToDisplay: string;
    elementName: string;
    displayInvoice?: boolean;
}
declare const DocumentPreviewModal: ({ isDisplayed, onClose, documentToDisplay, elementName, displayInvoice, }: DocumentPreviewModalParams) => JSX.Element;

interface FileProps$2 {
    url: string;
    text?: string;
    fileName?: string;
}
declare const FileDownloader: ({ url, text, fileName }: FileProps$2) => JSX.Element;

interface FileProps$1 {
    url: string;
}
declare const FilePreviewer: ({ url }: FileProps$1) => JSX.Element;

interface FileProps {
    disabled?: boolean;
    onClick: () => void;
}
declare const FileTrash: ({ disabled, onClick }: FileProps) => JSX.Element;

declare const SpacedBetween: styled_components.StyledComponent<"div", any, {}, never>;
declare const FlexStart: styled_components.StyledComponent<"div", any, {}, never>;
declare const FlexEnd: styled_components.StyledComponent<"div", any, {}, never>;
declare const FlexShrinkZero: styled_components.StyledComponent<"div", any, {}, never>;
declare const SpacedBetweenCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const SpacedBetweenEnd: styled_components.StyledComponent<"div", any, {}, never>;
declare const JustifyCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const Column: styled_components.StyledComponent<"div", any, {}, never>;
declare const ColumnSpacedBetween: styled_components.StyledComponent<"div", any, {}, never>;
declare const ColumnStretch: styled_components.StyledComponent<"div", any, {}, never>;
declare const ColumnCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const ColumnCenterCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const Row: styled_components.StyledComponent<"div", any, {}, never>;
declare const RowCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const AlignSelfStart: styled_components.StyledComponent<"div", any, {}, never>;
declare const AlignSelfCenter: styled_components.StyledComponent<"div", any, {}, never>;
declare const SelfAlignedColumn: styled_components.StyledComponent<"div", any, {}, never>;

declare const StyledForm: styled_components.StyledComponent<"form", any, {}, never>;

interface BaseInputProps {
    label: string;
    name?: string;
    register?: UseFormRegister<FieldValues>;
    validations?: RegisterOptions;
    type?: "password" | "text" | "checkbox" | "email" | "number";
    value: string;
    showError?: boolean;
    showWarning?: boolean;
    showSuccess?: boolean;
    autoFocus?: boolean;
    id?: string;
    isPrefilled?: boolean;
    disabled?: boolean;
    bypassDisabled?: boolean;
    maxWidth?: number | "auto";
    onChange?: ChangeEventHandler<HTMLInputElement>;
    required?: boolean;
    borderRadius?: number;
    maxLength?: number;
    max?: string;
    min?: string;
    placeholder?: string;
    shadowed?: boolean;
    noBorder?: boolean;
    readOnly?: boolean;
    dataCy?: string;
    onInput?: () => void;
}
interface InputProps extends BaseInputProps {
    suffix?: JSX.Element;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<React.RefObject<HTMLInputElement>>>;

interface InputDateProps {
    name: string;
    label: string;
    disabled: boolean;
    value: string;
    register: UseFormRegister<FieldValues>;
    minimum?: string;
    maximum?: string;
    onChangeValue: (value: string) => void;
}
declare const InputDate: (props: InputDateProps) => JSX.Element;

declare const StyledDuoInput: styled_components.StyledComponent<"div", any, {}, never>;

interface inputLabelProps {
    children: ReactNode;
    hasValue: boolean;
    disabled: boolean;
    isFocused: boolean;
}
declare const InputMovingPlaceholder: (props: inputLabelProps) => JSX.Element;

interface LinkProps {
    text: string;
    href: string;
}
declare const Link: ({ text, href }: LinkProps) => JSX.Element;

interface LockableInputProps extends BaseInputProps {
    locked: boolean;
}
declare const LockableInput: (props: LockableInputProps) => JSX.Element;

interface MenuItemProps$1 {
    label: string;
    linkTo?: string;
    selected: boolean;
    iconIdle: ReactNode;
    iconSelected: ReactNode;
}
declare const MenuItem: ({ label, selected, linkTo, iconIdle, iconSelected, }: MenuItemProps$1) => JSX.Element;

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
}
declare function MultiSelect<T>(props: MultiSelectProps<T>): JSX.Element;

interface MenuItemProps {
    label: string;
    linkTo: string;
    selected: boolean;
    blocked: boolean;
}
declare const NestedMenuItem: ({ label, selected, linkTo, blocked, }: MenuItemProps) => JSX.Element;

declare const PasswordInput: (props: BaseInputProps) => JSX.Element;

interface ProgressBarProps {
    color?: keyof typeof colors;
    progress: number;
    height?: number;
    withText?: boolean;
}
declare const ProgressBar: ({ color, progress, height, withText, }: ProgressBarProps) => JSX.Element;

interface RowCheckboxProps {
    label: string;
    name: string;
    isChecked: boolean;
    onChange: () => void;
}
declare const RowCheckbox: ({ label, name, isChecked, onChange, }: RowCheckboxProps) => JSX.Element;

declare const ScrollableOutlet: ({ id, padding, }: {
    id?: string | undefined;
    padding?: string | undefined;
}) => JSX.Element;

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
}
declare type Option<T extends string> = {
    value: T;
    label: string;
    disabled?: boolean;
};
declare type OptionList<T extends string> = Array<Option<T>>;
declare function createOptionList<T extends string>(optionList: Array<[T, string, boolean?]>): OptionList<T>;
declare function Select(props: SelectProps): JSX.Element;

declare type SeparatorSize = "half" | "full";
interface SeparatorProps {
    size: SeparatorSize;
    color?: keyof typeof colors;
}
declare const Separator: ({ size, color, }: SeparatorProps) => JSX.Element;
declare const VerticalSeparator: styled_components.StyledComponent<"div", any, {}, never>;

declare const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, }: {
    sortMethod: (option: T) => void;
    options: OptionList<T>;
    defaultOption: Option<T>;
    shadowed?: boolean | undefined;
    dataCy?: string | undefined;
}) => JSX.Element;

declare type SpacingUnit = 0 | 0.25 | 0.5 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 3 | 3.75 | 4 | 5 | 6 | 8 | 9 | 11 | 12;
interface SpacerProps {
    height?: SpacingUnit;
    width?: SpacingUnit;
}
declare const Spacer: ({ height, width }: SpacerProps) => JSX.Element;

interface CounterProps {
    value: number;
    onPlus: () => void;
    onMinus: () => void;
    min?: number;
}
declare const Counter: ({ value, onPlus, onMinus, min }: CounterProps) => JSX.Element;

declare const SpinningLoader: styled_components.StyledComponent<React.FC<React.SVGProps<SVGSVGElement>>, any, {
    spinnersize?: number | undefined;
}, never>;
declare const SpinningLoaderShadow: () => JSX.Element;
declare const StyledLoaderShadow: styled_components.StyledComponent<React.FC<React.SVGProps<SVGSVGElement>>, any, {}, never>;

interface SubtitleProps {
    text: string;
    size?: 2 | 2.25 | 1.75;
    className?: string;
}
declare const Subtitle: ({ text, size, className }: SubtitleProps) => JSX.Element;

interface SwitchProps {
    value: boolean;
    id?: string;
    onToggle: () => void;
}
declare function Switch({ id, value, onToggle }: SwitchProps): JSX.Element;

interface TableBuilder<T> {
    headerText: string;
    flexGrow?: string;
    content: (rowData: T) => JSX.Element;
}
interface TableProps<T> {
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
declare const Table: <T>({ columns, rows, rowBackgroundColors, width, height, alignItems, padding, alertMessage, rowTooltip, suffixContent, keyBuilder, }: TableProps<T>) => JSX.Element;
declare const TitleTable: ({ tid }: {
    tid: string;
}) => JSX.Element;
declare const Header: styled_components.StyledComponent<"header", any, {}, never>;

declare type FontWeight = 400 | 500 | 600 | 700;
interface TextProps {
    text: string;
    textStyle?: {
        color?: keyof typeof colors;
        fontSize?: number;
        lineHeight?: number;
        underline?: boolean;
        fontStyle?: "normal" | "italic";
        fontFamily?: "Roboto" | "Poppins";
        fontWeight?: FontWeight;
        textTransform?: "uppercase" | "lowercase" | "capitalize" | "initial";
        cursor?: "pointer" | "auto" | "default";
        textAlign?: "center";
    };
    dataCy?: string;
}
declare const Text: (props: TextProps) => JSX.Element;

declare const TableHeader: styled_components.StyledComponent<"header", any, {}, never>;
declare const TableBody: styled_components.StyledComponent<"div", any, {}, never>;
declare const WrapperRows: styled_components.StyledComponent<"div", any, {}, never>;
declare const StyledTitles: styled_components.StyledComponent<(props: TextProps) => JSX.Element, any, {}, never>;
declare const TableWrapper: styled_components.StyledComponent<"div", any, {}, never>;
declare const Cell: styled_components.StyledComponent<"div", any, {}, never>;

interface TabObject {
    to: string;
    title: string;
    icon: ReactNode;
    isDisplayed: boolean;
}
declare const Tabs: ({ tabs }: {
    tabs: TabObject[];
}) => JSX.Element;

interface TitleProps {
    text: string;
    size?: 3 | 7 | 2.25;
    className?: string;
}
declare const Title: ({ text, size, className }: TitleProps) => JSX.Element;

declare const StyledToastContainer: styled_components.StyledComponent<React.FC<react_toastify.ToastContainerProps>, any, {}, never>;

export { Alert, AlignSelfCenter, AlignSelfStart, Background, Bar, BaseInputProps, Button, Card, Cell, Checkbox, CircleNotifier, Column, ColumnCenter, ColumnCenterCenter, ColumnSpacedBetween, ColumnStretch, Counter, CreatableSelect, DocumentPreviewModal, FileDownloader, FilePreviewer, FileTrash, FlexEnd, FlexShrinkZero, FlexStart, Header, Input, InputDate, InputMovingPlaceholder, JustifyCenter, Link, LoadingStatus, LockableInput, MenuItem, Modal, ModalComponentsProps, MultiSelect, NestedMenuItem, Option, OptionList, PasswordInput, ProgressBar, Row, RowCenter, RowCheckbox, ScrollableOutlet, Select, SelfAlignedColumn, Separator, SortButton, SpacedBetween, SpacedBetweenCenter, SpacedBetweenEnd, Spacer, SpinningLoader, SpinningLoaderShadow, StyledDuoInput, StyledForm, StyledLoaderShadow, StyledTitles, StyledToastContainer, Subtitle, Switch, TabObject, Table, TableBody, TableBuilder, TableHeader, TableWrapper, Tabs, Text, Title, TitleTable, VerticalSeparator, WrapperRows, createOptionList, displayPreviewParams };
