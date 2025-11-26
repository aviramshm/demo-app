import { CSS } from './theme';

export declare const pulse: {
    (): string;
    name: string;
};
export declare const fadeIn: {
    (): string;
    name: string;
};
export declare const rotate: {
    (): string;
    name: string;
};
export declare const shift: (distance: number) => {
    (): string;
    name: string;
};
export declare const animationStyles: ({ distance, duration, delay, }: {
    distance?: number;
    duration: number;
    delay: number;
}) => CSS;
//# sourceMappingURL=animation.d.ts.map