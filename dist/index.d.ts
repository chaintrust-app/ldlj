/// <reference types="react" />
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

export { Text };
