import { default as React } from 'react';

export interface AutoScrollContext {
    scrollToBottom: () => void;
}
export declare const AutoScrollContext: React.Context<AutoScrollContext>;
export declare const AutoScrollConsumer: React.Consumer<AutoScrollContext>;
export interface AutoScrollProviderProps<T> extends React.PropsWithChildren {
    target: React.RefObject<T>;
}
export declare const AutoScrollProvider: <T extends HTMLElement>({ target, children }: AutoScrollProviderProps<T>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AutoScrollContext.d.ts.map