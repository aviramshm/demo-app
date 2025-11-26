import { RuntimeState, Settings } from './useRuntimeState';
import { default as React } from 'react';

export declare const RuntimeStateAPIContext: React.Context<{
    launch: () => Promise<void>;
    reply: (message: string) => Promise<void>;
    open: () => Promise<void>;
    interact: import('../../types').SendMessage;
    close: () => void;
    addTurn: (turn: import('../../types').TurnProps) => void;
    feedback: (name: import('./useRuntimeAPI').FeedbackName, lastTurnMessages: import('../../components/SystemResponse').MessageProps[], userTurn: import('../../types').UserTurnProps | null) => Promise<void>;
    setStatus: (status: import('../../types').SessionStatus) => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isStatus: (status: import('../../types').SessionStatus) => boolean;
    reset: () => void;
    getTurns: () => import('../../types').TurnProps[];
    setIndicator: React.Dispatch<React.SetStateAction<boolean>>;
    setAudioOutput: React.Dispatch<React.SetStateAction<boolean>>;
    toggleAudioOutput: () => void;
    assistant: {
        title: string;
        image: string;
        color: string;
        position: import('@voiceflow/voiceflow-types/build/cjs/version/chat').ChatPosition;
        avatar: string;
        watermark: boolean;
        feedback: boolean;
        description: string;
        persistence: import('@voiceflow/voiceflow-types/build/cjs/version/chat').ChatPersistence;
        audioInterface: boolean;
        spacing: {
            bottom: number;
            side: number;
        };
        extensions: ({
            match: (context: {
                trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            }) => boolean;
            name: string;
            type: import("../../package.entry").ExtensionType.EFFECT;
            effect?: ((context: {
                trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            }) => void | Promise<void>) | undefined;
        } | {
            match: (context: {
                trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            }) => boolean;
            name: string;
            type: import("../../package.entry").ExtensionType.RESPONSE;
            render?: ((context: {
                trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
                element: HTMLElement;
            }) => void | (() => void)) | undefined;
        })[];
        launcher?: string | undefined;
        stylesheet?: string | string[] | undefined;
        defaultAudioOutput?: boolean | undefined;
    };
    config: import('../../package.entry').ChatConfig;
}>;
export declare const RuntimeStateContext: React.Context<{
    session: Required<import('../../types').SessionOptions>;
    isOpen: boolean;
    indicator: boolean;
    audioOutput: boolean;
}>;
interface RuntimeProviderProps extends React.PropsWithChildren, Settings {
    extend?: (runtime: RuntimeState['api']) => RuntimeState['api'];
}
export declare const RuntimeProvider: ({ children, extend, ...settings }: RuntimeProviderProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map