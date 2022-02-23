/// <reference types="react" />
export declare type UploadStatus = "start" | "confirmation" | "uploading" | "success" | "error";
export declare type DropText = "Logo" | "Fec" | "FileDrop";
interface BaseFileUploadProps {
    uploadStatus: UploadStatus;
    uploadProgress: number;
    dropText: DropText;
    height?: string;
    errorMessage?: string;
    secondErrorMessage?: string;
    allowMultiple?: boolean;
}
interface SingleFileUploadProps extends BaseFileUploadProps {
    uploadFile: (file: File) => void;
    uploadFiles?: undefined;
}
interface MultipleFilesUploadProps extends BaseFileUploadProps {
    uploadFile?: undefined;
    uploadFiles: (files: File[]) => void;
}
declare type DropFileUploadProps = SingleFileUploadProps | MultipleFilesUploadProps;
export declare const DropFileUpload: ({ uploadFile, uploadFiles, uploadStatus, uploadProgress, dropText, allowMultiple, height, errorMessage, secondErrorMessage, }: DropFileUploadProps) => JSX.Element;
export {};
