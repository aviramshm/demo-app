import { SetRequired } from 'type-fest';
import { default as React } from 'react';

export interface ControlProps<T = any> {
    /**
     * The value being controlled by the component.
     */
    value: T;
    /**
     * A callback that will be called with new values when the control is updated.
     */
    onValueChange: (value: T) => void;
}
export type ControlValue<Props> = Props extends ControlProps<infer R> ? R : never;
export type ControlledProps<Props extends ControlProps<any>> = Omit<Props, keyof ControlProps> & {
    initialValue?: ControlValue<Props>;
};
export interface ControlledOptions<Props extends ControlProps> {
    defaultValue?: ControlValue<Props>;
    enrichProps?: <T extends Omit<Props, keyof ControlProps>>(props: T, state: [ControlValue<Props>, (value: ControlValue<Props>) => void]) => T;
}
export declare const createControlled: {
    <Props extends ControlProps>(Component: React.FC<Props>, options: SetRequired<ControlledOptions<Props>, 'defaultValue'>): React.FC<ControlledProps<Props>>;
    <Props extends ControlProps>(Component: React.FC<Props>, options?: ControlledOptions<Props>): React.FC<SetRequired<ControlledProps<Props>, 'initialValue'>>;
};
//# sourceMappingURL=controls.d.ts.map