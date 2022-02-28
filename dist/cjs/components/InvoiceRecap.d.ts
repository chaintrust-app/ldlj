/// <reference types="react" />
import { IntlShape } from "react-intl";
import { InvoiceRecap } from "../utils/invoices";
interface InvoiceRecapInfoProps {
    invoiceRecap: InvoiceRecap;
    intl: IntlShape;
}
export declare const InvoiceRecapInfo: ({ invoiceRecap, intl, }: InvoiceRecapInfoProps) => JSX.Element;
export {};
