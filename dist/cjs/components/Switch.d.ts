/// <reference types="react" />
export default Switch;
export type { SwitchProps };
interface SwitchProps {
    value: boolean;
    id?: string;
    onToggle: () => void;
}
declare function Switch({ id, value, onToggle }: SwitchProps): JSX.Element;
