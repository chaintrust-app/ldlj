/// <reference types="react" />
import { IntlShape } from "react-intl";
import { ProducsWithPrice } from "../utils/invoices";
interface AmountTotalsProps {
    productsWithPrice: ProducsWithPrice[];
    intl: IntlShape;
}
export declare const AmountTotals: ({ productsWithPrice, intl, }: AmountTotalsProps) => JSX.Element;
export {};
