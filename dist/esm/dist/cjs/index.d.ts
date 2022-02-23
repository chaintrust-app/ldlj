declare module "ldlj" {
    export const colors: {
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
    export const opacityColors: {
        shamrock: string;
        amaranth: string;
        mistSemiTransparant: string;
    };
    export const spacings: {
        defaultPadding: string;
        alertPadding: string;
    };
    export const gradients: {
        blue: string;
        background: string;
    };
    export const sizes: {
        screen: {
            breakpoint: string;
        };
        button: {
            standard: number;
        };
    };
    export const boxShadow = " 0 0.5rem 1.75rem rgba(2, 76, 248, 0.1)";
    export const appearing: import("styled-components").Keyframes;
    export const rotate: import("styled-components").Keyframes;
    export const bump: import("styled-components").Keyframes;
}

declare module "ldlj" {
    import * as React from "react";
    export interface AlertProps {
        children: React.ReactNode;
        alertType: alertType;
        centerIcon?: boolean;
        boxSizing?: string;
        margin?: string;
        padding?: string;
        stretch?: boolean;
    }
    type alertType = "error" | "warning" | "info" | "success";
    export const Alert: ({ children, alertType, centerIcon, boxSizing, margin, padding, stretch, }: AlertProps) => JSX.Element;
}

declare module "ldlj" {
    import { ReactNode } from "react";
    export interface BackgroundProps {
        children: ReactNode;
        centeredTop?: boolean;
        padding?: number;
    }
    export const Background: ({ children, centeredTop, padding, }: BackgroundProps) => JSX.Element;
}

declare module "ldlj" {
    type AlignInterface = "auto" | "center" | "start" | "end" | "flex-start" | "flex-end" | "unset";
    interface BarProps {
        height?: number;
        width?: number;
        align?: AlignInterface;
    }
    export const Bar: ({ height, width, align }: BarProps) => JSX.Element;
}

declare module "ldlj" {
    type SpacingUnit = 0 | 0.25 | 0.5 | 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 3 | 3.75 | 4 | 5 | 6 | 8 | 9 | 11 | 12;
    interface SpacerProps {
        height?: SpacingUnit;
        width?: SpacingUnit;
    }
    export const Spacer: ({ height, width }: SpacerProps) => JSX.Element;
}

declare module "ldlj" {
    import { ReactNode } from "react";
    type ColorType = "Primary" | "Secondary" | "Tertiary" | "Quaternary";
    type ColorScheme = {
        background: keyof typeof colors;
        color: keyof typeof colors;
        border: keyof typeof colors;
    };
    export type LoadingStatus = "idle" | "loading" | "success" | "error";
    export interface ButtonProps {
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
    export const Button: ({ id, dataCy, label, onClick, disabled, type, colorType, width, height, textTransform, prefix, loadingStatus, suffix, colorScheme, }: ButtonProps) => JSX.Element;
    export const bounce: import("styled-components").Keyframes;
}

declare module "ldlj" {
    import * as React from "react";
    import { VFC } from "react";
    type trianglePosition = {
        position: "left" | "top";
        size: 1.25 | 2.5;
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    } | null;
    export interface CardProps {
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
    export const Card: VFC<CardProps>;
}

declare module "ldlj" {
    interface CheckboxProps {
        label: string;
        name: string;
        isChecked: boolean;
        onChange: () => void;
        id?: string;
        disabled?: boolean;
    }
    export const Checkbox: ({ label, name, isChecked, onChange, disabled, }: CheckboxProps) => JSX.Element;
}

declare module "ldlj" {
    type NotifierColors = "error" | "success";
    interface CircleNotifierProps {
        type: NotifierColors;
    }
    export const CircleNotifier: ({ type }: CircleNotifierProps) => JSX.Element;
}

declare module "ldlj" {
    import { ReactNode } from "react";
    export interface inputLabelProps {
        children: ReactNode;
        hasValue: boolean;
        disabled: boolean;
        isFocused: boolean;
    }
    export const InputMovingPlaceholder: (props: inputLabelProps) => JSX.Element;
}

declare module "ldlj" {
    export interface selectOption {
        value: string;
        label: string;
    }
    export interface creatableSelectProps {
        options: Array<selectOption>;
        value: selectOption | null;
        disabled: boolean;
        onChangeCallback?: (option: selectOption | null) => void;
        onCreateOption: (text: string) => void;
        placeholderText: string;
        formatCreateLabel: string;
        inputId?: string;
    }
    export const CreatableSelect: (props: creatableSelectProps) => JSX.Element;
}

declare module "ldlj" {
    import * as React from "react";
    export const Modal: ({ isDisplayed, onClose, children, ...rest }: ModalProps) => JSX.Element;
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
    export interface ModalComponentsProps {
        isDisplayed: boolean;
        onClose: () => void;
    }
}

declare module "ldlj" {
    interface TitleProps {
        text: string;
        size?: 3 | 7 | 2.25;
        className?: string;
    }
    export const Title: ({ text, size, className }: TitleProps) => JSX.Element;
}

declare module "ldlj" {
    export const truncateString: (value: string, maxLength: number) => string;
    export const fileExtensionOfString: (fileName: string) => string | null;
    export const truncateFileName: (value: string, maxLength: number) => string;
    export const Uppercase: (str: string) => string;
}

declare module "ldlj" {
    export interface displayPreviewParams {
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
    export const DocumentPreviewModal: ({ isDisplayed, onClose, documentToDisplay, elementName, displayInvoice, }: DocumentPreviewModalParams) => JSX.Element;
}

declare module "ldlj" {
    type FontWeight = 400 | 500 | 600 | 700;
    export interface TextProps {
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
    export const Text: (props: TextProps) => JSX.Element;
}

declare module "ldlj" {
    interface FileProps {
        url: string;
        text?: string;
        fileName?: string;
    }
    export const FileDownloader: ({ url, text, fileName }: FileProps) => JSX.Element;
}

declare module "ldlj" {
    interface FileProps {
        url: string;
    }
    export const FilePreviewer: ({ url }: FileProps) => JSX.Element;
}

declare module "ldlj" {
    interface FileProps {
        disabled?: boolean;
        onClick: () => void;
    }
    export const FileTrash: ({ disabled, onClick }: FileProps) => JSX.Element;
}

declare module "ldlj" {
    export const SpacedBetween: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const FlexStart: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const FlexEnd: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const FlexShrinkZero: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const SpacedBetweenCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const SpacedBetweenEnd: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const JustifyCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const Column: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const ColumnSpacedBetween: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const ColumnStretch: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const ColumnCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const ColumnCenterCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const Row: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const RowCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const AlignSelfStart: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const AlignSelfCenter: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const SelfAlignedColumn: import("styled-components").StyledComponent<"div", any, {}, never>;
}

declare module "ldlj" {
    export const StyledForm: import("styled-components").StyledComponent<"form", any, {}, never>;
}

declare module "ldlj" {
    import * as React from "react";
    import { ChangeEventHandler } from "react";
    import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
    export interface BaseInputProps {
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
    export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<React.RefObject<HTMLInputElement>>>;
}

declare module "ldlj" {
    import { FieldValues, UseFormRegister } from "react-hook-form";
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
    export const InputDate: (props: InputDateProps) => JSX.Element;
}

declare module "ldlj" {
    export const StyledDuoInput: import("styled-components").StyledComponent<"div", any, {}, never>;
}

declare module "ldlj" {
    interface LinkProps {
        text: string;
        href: string;
    }
    export const Link: ({ text, href }: LinkProps) => JSX.Element;
}

declare module "ldlj" {
    interface LockableInputProps extends BaseInputProps {
        locked: boolean;
    }
    export const LockableInput: (props: LockableInputProps) => JSX.Element;
}

declare module "ldlj" {
    import { ReactNode } from "react";
    export interface MenuItemProps {
        label: string;
        linkTo?: string;
        selected: boolean;
        iconIdle: ReactNode;
        iconSelected: ReactNode;
    }
    export const MenuItem: ({ label, selected, linkTo, iconIdle, iconSelected, }: MenuItemProps) => JSX.Element;
}

declare module "ldlj" {
    interface RowCheckboxProps {
        label: string;
        name: string;
        isChecked: boolean;
        onChange: () => void;
    }
    export const RowCheckbox: ({ label, name, isChecked, onChange, }: RowCheckboxProps) => JSX.Element;
}

declare module "ldlj" {
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
    export function MultiSelect<T>(props: MultiSelectProps<T>): JSX.Element;
}

declare module "ldlj" {
    export interface MenuItemProps {
        label: string;
        linkTo: string;
        selected: boolean;
        blocked: boolean;
    }
    export const NestedMenuItem: ({ label, selected, linkTo, blocked, }: MenuItemProps) => JSX.Element;
}

declare module "ldlj" {
    export const PasswordInput: (props: BaseInputProps) => JSX.Element;
}

declare module "ldlj" {
    interface ProgressBarProps {
        color?: keyof typeof colors;
        progress: number;
        height?: number;
        withText?: boolean;
    }
    export const ProgressBar: ({ color, progress, height, withText, }: ProgressBarProps) => JSX.Element;
}

declare module "ldlj" {
    export const ScrollableOutlet: ({ id, padding, }: {
        id?: string | undefined;
        padding?: string | undefined;
    }) => JSX.Element;
}

declare module "ldlj" {
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
    export type Option<T extends string> = {
        value: T;
        label: string;
        disabled?: boolean;
    };
    export type OptionList<T extends string> = Array<Option<T>>;
    export function createOptionList<T extends string>(optionList: Array<[
        T,
        string,
        boolean?
    ]>): OptionList<T>;
    export function Select(props: SelectProps): JSX.Element;
    export interface Selector {
        value: string | null;
        disabled: boolean;
        isFocused: boolean;
        selectType: string;
        shadowed: boolean;
        myDefaultValue: string | null;
        customWidth: string | undefined;
    }
    export const StyledSelect: import("styled-components").StyledComponent<"div", any, Selector, never>;
}

declare module "ldlj" {
    type SeparatorSize = "half" | "full";
    interface SeparatorProps {
        size: SeparatorSize;
        color?: keyof typeof colors;
    }
    export const Separator: ({ size, color, }: SeparatorProps) => JSX.Element;
    export const VerticalSeparator: import("styled-components").StyledComponent<"div", any, {}, never>;
}

declare module "ldlj" {
    export const SortButton: <T extends string>({ sortMethod, options, defaultOption, shadowed, dataCy, }: {
        sortMethod: (option: T) => void;
        options: OptionList<T>;
        defaultOption: Option<T>;
        shadowed?: boolean | undefined;
        dataCy?: string | undefined;
    }) => JSX.Element;
}

declare module "ldlj" {
    interface CounterProps {
        value: number;
        onPlus: () => void;
        onMinus: () => void;
        min?: number;
    }
    export const Counter: ({ value, onPlus, onMinus, min }: CounterProps) => JSX.Element;
}

declare module "ldlj" {
    import * as React from "react";
    export const SpinningLoader: import("styled-components").StyledComponent<React.FC<React.SVGProps<SVGSVGElement>>, any, {
        spinnersize?: number | undefined;
    }, never>;
    export const SpinningLoaderShadow: () => JSX.Element;
    export const StyledLoaderShadow: import("styled-components").StyledComponent<React.FC<React.SVGProps<SVGSVGElement>>, any, {}, never>;
}

declare module "ldlj" {
    interface SubtitleProps {
        text: string;
        size?: 2 | 2.25 | 1.75;
        className?: string;
    }
    export const Subtitle: ({ text, size, className }: SubtitleProps) => JSX.Element;
}

declare module "ldlj" {
    export type { SwitchProps };
    interface SwitchProps {
        value: boolean;
        id?: string;
        onToggle: () => void;
    }
    export function Switch({ id, value, onToggle }: SwitchProps): JSX.Element;
}

declare module "ldlj" {
    import { ReactNode } from "react";
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
    export const Table: <T>({ columns, rows, rowBackgroundColors, width, height, alignItems, padding, alertMessage, rowTooltip, suffixContent, keyBuilder, }: TableProps<T>) => JSX.Element;
    export const TitleTable: ({ tid }: {
        tid: string;
    }) => JSX.Element;
    export const Header: import("styled-components").StyledComponent<"header", any, {}, never>;
}

declare module "ldlj" {
    export const TableHeader: import("styled-components").StyledComponent<"header", any, {}, never>;
    export const TableBody: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const WrapperRows: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const StyledTitles: import("styled-components").StyledComponent<(props: import("components/Text").TextProps) => JSX.Element, any, {}, never>;
    export const TableWrapper: import("styled-components").StyledComponent<"div", any, {}, never>;
    export const Cell: import("styled-components").StyledComponent<"div", any, {}, never>;
}

declare module "ldlj" {
    import { ReactNode } from "react";
    export interface TabObject {
        to: string;
        title: string;
        icon: ReactNode;
        isDisplayed: boolean;
    }
    export const Tabs: ({ tabs }: {
        tabs: TabObject[];
    }) => JSX.Element;
}

declare module "ldlj" {
    export const StyledToastContainer: import("styled-components").StyledComponent<import("react").FC<import("react-toastify").ToastContainerProps>, any, {}, never>;
}

declare module "ldlj" {
    export { Alert, Background, Bar, Button, Card, Checkbox, CircleNotifier, CreatableSelect, DocumentPreviewModal, FileDownloader, FilePreviewer, FileTrash, SpacedBetween, SpacedBetweenCenter, SpacedBetweenEnd, FlexStart, FlexEnd, FlexShrinkZero, JustifyCenter, Column, ColumnStretch, ColumnSpacedBetween, ColumnCenter, ColumnCenterCenter, Row, RowCenter, AlignSelfStart, AlignSelfCenter, SelfAlignedColumn, StyledForm, Input, InputDate, StyledDuoInput, InputMovingPlaceholder, Link, LockableInput, MenuItem, Modal, MultiSelect, NestedMenuItem, PasswordInput, ProgressBar, RowCheckbox, ScrollableOutlet, Select, createOptionList, Separator, VerticalSeparator, SortButton, Spacer, SpinningLoader, SpinningLoaderShadow, StyledLoaderShadow, Subtitle, Switch, Table, Header, TitleTable, Tabs, Text, Title, StyledToastContainer, TableHeader, TableBody, StyledTitles, TableWrapper, WrapperRows, Cell, Counter, };
}
