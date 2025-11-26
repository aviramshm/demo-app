import { RuntimeMessage } from './messages';
import { SendMessage, SessionOptions, TurnProps, SessionStatus } from '../../types';
import { ChatConfig } from '../../dtos/ChatConfig.dto';
import { AssistantOptions } from '../../dtos/AssistantOptions.dto';
import { TraceDeclaration } from '@voiceflow/sdk-runtime';

export interface Settings {
    assistant: AssistantOptions;
    config: ChatConfig;
    traceHandlers?: TraceDeclaration<RuntimeMessage, any>[];
}
export declare const useRuntimeState: ({ assistant, config, traceHandlers }: Settings) => {
    state: {
        session: Required<SessionOptions>;
        isOpen: boolean;
        indicator: boolean;
        audioOutput: boolean;
    };
    api: {
        launch: () => Promise<void>;
        reply: (message: string) => Promise<void>;
        open: () => Promise<void>;
        interact: SendMessage;
        close: () => void;
        addTurn: (turn: TurnProps) => void;
        feedback: (name: import('./useRuntimeAPI').FeedbackName, lastTurnMessages: import('../../components/SystemResponse').MessageProps[], userTurn: import('../../types').UserTurnProps | null) => Promise<void>;
        setStatus: (status: SessionStatus) => void;
        setOpen: import('react').Dispatch<import('react').SetStateAction<boolean>>;
        isStatus: (status: SessionStatus) => boolean;
        reset: () => void;
        getTurns: () => TurnProps[];
        setIndicator: import('react').Dispatch<import('react').SetStateAction<boolean>>;
        setAudioOutput: import('react').Dispatch<import('react').SetStateAction<boolean>>;
        toggleAudioOutput: () => void;
        assistant: {
            title: string;
            image: string;
            color: string;
            position: import('../../types').ChatPosition;
            avatar: string;
            watermark: boolean;
            feedback: boolean;
            description: string;
            persistence: import('../../types').ChatPersistence;
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
        config: ChatConfig;
    };
};
export type RuntimeState = ReturnType<typeof useRuntimeState>;
//# sourceMappingURL=useRuntimeState.d.ts.map