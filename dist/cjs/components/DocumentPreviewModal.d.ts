/// <reference types="react" />
import * as Commons from "../Commons";
export interface displayPreviewParams {
    isDisplayed: boolean;
    elementToDisplay: string;
    elementName: string;
    displayInvoice?: boolean;
}
interface DocumentPreviewModalParams extends Commons.ModalComponentsProps {
    documentToDisplay: string;
    elementName: string;
    displayInvoice?: boolean;
}
export declare const DocumentPreviewModal: ({ isDisplayed, onClose, documentToDisplay, elementName, displayInvoice, }: DocumentPreviewModalParams) => JSX.Element;
export {};
