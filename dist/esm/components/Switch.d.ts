/// <reference types="react" />
export type { SwitchProps };
interface SwitchProps {
    value: boolean;
    id?: string;
    onToggle: () => void;
}
export declare function Switch({ id, value, onToggle }: SwitchProps): JSX.Element;
