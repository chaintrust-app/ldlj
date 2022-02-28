import { ElementType } from "react";
interface LinkProps {
    text: string;
    href: string;
    RouterLink: ElementType;
}
export declare const Link: ({ text, href, RouterLink }: LinkProps) => JSX.Element;
export {};
