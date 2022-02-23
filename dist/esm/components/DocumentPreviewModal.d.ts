/// <reference types="react" />
import { ModalComponentsProps } from "./Modal";
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
export declare const DocumentPreviewModal: ({ isDisplayed, onClose, documentToDisplay, elementName, displayInvoice, }: DocumentPreviewModalParams) => JSX.Element;
export {};
