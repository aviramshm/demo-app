import { MessageProps } from './types';

export * from './types';
export declare const useAnimatedMessages: ({ messages, isLast, }: {
    messages: MessageProps[];
    isLast: boolean | undefined;
}) => {
    complete: boolean;
    showIndicator: boolean | undefined;
    visibleMessages: MessageProps[];
};
//# sourceMappingURL=hooks.d.ts.map