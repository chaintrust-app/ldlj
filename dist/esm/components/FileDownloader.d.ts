/// <reference types="react" />
interface FileProps {
    url: string;
    text?: string;
    fileName?: string;
}
export declare const FileDownloader: ({ url, text, fileName }: FileProps) => JSX.Element;
export {};
