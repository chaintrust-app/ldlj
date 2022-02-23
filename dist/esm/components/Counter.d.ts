/// <reference types="react" />
interface CounterProps {
    value: number;
    onPlus: () => void;
    onMinus: () => void;
    min?: number;
}
export declare const Counter: ({ value, onPlus, onMinus, min }: CounterProps) => JSX.Element;
export {};
