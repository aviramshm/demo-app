import { RenderMode } from './RenderOptions.dto';
import { RawAssistantOptions } from './AssistantOptions.dto';
import { z } from 'zod';
import { PrototypeVerify, PublicVerify, RuntimeOptions as SDKRuntimeOptions } from '@voiceflow/sdk-runtime';

export declare const RUNTIME_URL = "https://general-runtime.voiceflow.com";
export type VerifyOptions = z.infer<typeof VerifyOptions>;
export type UserOptions = z.infer<typeof UserOptions>;
export type LaunchOptions = z.infer<typeof LaunchOptions>;
export declare const VerifyOptions: z.ZodUnion<[z.ZodObject<{
    projectID: z.ZodString;
}, "strip", z.ZodTypeAny, {
    projectID: string;
}, {
    projectID: string;
}>, z.ZodObject<{
    projectID: z.ZodString;
    versionID: z.ZodString;
    prototype: z.ZodLiteral<true>;
}, "strip", z.ZodTypeAny, {
    projectID: string;
    versionID: string;
    prototype: true;
}, {
    projectID: string;
    versionID: string;
    prototype: true;
}>]>;
export declare const LaunchOptions: z.ZodObject<{
    event: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        type: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, {
        type: string;
        payload?: any;
        diagramID?: string | undefined;
    }, z.objectInputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>>;
}, "strip", z.ZodTypeAny, {
    event?: {
        type: string;
        payload?: any;
        diagramID?: string | undefined;
    } | undefined;
}, {
    event?: z.objectInputType<{
        type: z.ZodString;
    }, z.ZodTypeAny, "passthrough"> | undefined;
}>;
export declare const UserOptions: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    image?: string | undefined;
}, {
    name?: string | undefined;
    image?: string | undefined;
}>;
type Config<T extends SDKRuntimeOptions<PublicVerify | PrototypeVerify>> = T;
export interface ChatConfig extends Config<z.infer<typeof ChatConfig>> {
}
export interface LoadConfig extends Omit<ChatConfig, 'url'> {
    url?: ChatConfig['url'];
    assistant?: RawAssistantOptions;
}
export declare const ChatSpeechRecognitionState: z.ZodObject<{
    listening: z.ZodBoolean;
    transcript: z.ZodString;
    processing: z.ZodBoolean;
    initializing: z.ZodBoolean;
    microphoneAvailable: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    listening: boolean;
    transcript: string;
    processing: boolean;
    initializing: boolean;
    microphoneAvailable: boolean;
}, {
    listening: boolean;
    transcript: string;
    processing: boolean;
    initializing: boolean;
    microphoneAvailable: boolean;
}>;
export type ChatSpeechRecognitionState = z.infer<typeof ChatSpeechRecognitionState>;
export declare const ChatSpeechRecognitionConfig: z.ZodObject<{
    overrideNative: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    initialState: z.ZodObject<{
        listening: z.ZodBoolean;
        transcript: z.ZodString;
        processing: z.ZodBoolean;
        initializing: z.ZodBoolean;
        microphoneAvailable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }, {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }>;
    onStateChange: z.ZodFunction<z.ZodTuple<[z.ZodFunction<z.ZodTuple<[z.ZodObject<{
        listening: z.ZodBoolean;
        transcript: z.ZodString;
        processing: z.ZodBoolean;
        initializing: z.ZodBoolean;
        microphoneAvailable: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }, {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }>], z.ZodUnknown>, z.ZodVoid>], z.ZodUnknown>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
    stopListening: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
    startListening: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
    resetTranscript: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
}, "strip", z.ZodTypeAny, {
    overrideNative: boolean;
    initialState: {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    };
    onStateChange: (args_0: (args_0: {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
    stopListening: (...args: unknown[]) => void;
    startListening: (...args: unknown[]) => void;
    resetTranscript: (...args: unknown[]) => void;
}, {
    initialState: {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    };
    onStateChange: (args_0: (args_0: {
        listening: boolean;
        transcript: string;
        processing: boolean;
        initializing: boolean;
        microphoneAvailable: boolean;
    }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
    stopListening: (...args: unknown[]) => void;
    startListening: (...args: unknown[]) => void;
    resetTranscript: (...args: unknown[]) => void;
    overrideNative?: boolean | undefined;
}>;
export type ChatSpeechRecognitionConfig = z.infer<typeof ChatSpeechRecognitionConfig>;
export declare const ChatConfig: z.ZodEffects<z.ZodObject<{
    autostart: z.ZodOptional<z.ZodBoolean>;
    allowDangerousHTML: z.ZodDefault<z.ZodBoolean>;
    url: z.ZodDefault<z.ZodString>;
    userID: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, string, string | number>>;
    versionID: z.ZodOptional<z.ZodString>;
    verify: z.ZodUnion<[z.ZodObject<{
        projectID: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        projectID: string;
    }, {
        projectID: string;
    }>, z.ZodObject<{
        projectID: z.ZodString;
        versionID: z.ZodString;
        prototype: z.ZodLiteral<true>;
    }, "strip", z.ZodTypeAny, {
        projectID: string;
        versionID: string;
        prototype: true;
    }, {
        projectID: string;
        versionID: string;
        prototype: true;
    }>]>;
    user: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        image?: string | undefined;
    }, {
        name?: string | undefined;
        image?: string | undefined;
    }>>;
    render: z.ZodEffects<z.ZodOptional<z.ZodObject<{
        mode: z.ZodDefault<z.ZodNativeEnum<typeof RenderMode>>;
        target: z.ZodEffects<z.ZodOptional<z.ZodType<HTMLElement, z.ZodTypeDef, HTMLElement>>, HTMLElement | undefined, HTMLElement | undefined>;
    }, "strip", z.ZodTypeAny, {
        mode: RenderMode;
        target?: HTMLElement | undefined;
    }, {
        mode?: RenderMode | undefined;
        target?: HTMLElement | undefined;
    }>>, {
        mode: RenderMode.EMBEDDED;
        target: HTMLElement;
    } | {
        mode: RenderMode.OVERLAY;
        target?: undefined;
    }, {
        mode?: RenderMode | undefined;
        target?: HTMLElement | undefined;
    } | undefined>;
    launch: z.ZodOptional<z.ZodObject<{
        event: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>, {
            type: string;
            payload?: any;
            diagramID?: string | undefined;
        }, z.objectInputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
    }, "strip", z.ZodTypeAny, {
        event?: {
            type: string;
            payload?: any;
            diagramID?: string | undefined;
        } | undefined;
    }, {
        event?: z.objectInputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough"> | undefined;
    }>>;
    speechRecognition: z.ZodOptional<z.ZodObject<{
        overrideNative: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        initialState: z.ZodObject<{
            listening: z.ZodBoolean;
            transcript: z.ZodString;
            processing: z.ZodBoolean;
            initializing: z.ZodBoolean;
            microphoneAvailable: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }>;
        onStateChange: z.ZodFunction<z.ZodTuple<[z.ZodFunction<z.ZodTuple<[z.ZodObject<{
            listening: z.ZodBoolean;
            transcript: z.ZodString;
            processing: z.ZodBoolean;
            initializing: z.ZodBoolean;
            microphoneAvailable: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }>], z.ZodUnknown>, z.ZodVoid>], z.ZodUnknown>, z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>>;
        stopListening: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
        startListening: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
        resetTranscript: z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodVoid>;
    }, "strip", z.ZodTypeAny, {
        overrideNative: boolean;
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
    }, {
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
        overrideNative?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    url: string;
    render: {
        mode: RenderMode.EMBEDDED;
        target: HTMLElement;
    } | {
        mode: RenderMode.OVERLAY;
        target?: undefined;
    };
    allowDangerousHTML: boolean;
    verify: ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    }) & ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    } | undefined);
    autostart?: boolean | undefined;
    userID?: string | undefined;
    versionID?: string | undefined;
    user?: {
        name?: string | undefined;
        image?: string | undefined;
    } | undefined;
    launch?: {
        event?: {
            type: string;
            payload?: any;
            diagramID?: string | undefined;
        } | undefined;
    } | undefined;
    speechRecognition?: {
        overrideNative: boolean;
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
    } | undefined;
}, {
    verify: ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    }) & ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    } | undefined);
    autostart?: boolean | undefined;
    allowDangerousHTML?: boolean | undefined;
    url?: string | undefined;
    userID?: string | number | undefined;
    versionID?: string | undefined;
    user?: {
        name?: string | undefined;
        image?: string | undefined;
    } | undefined;
    render?: {
        mode?: RenderMode | undefined;
        target?: HTMLElement | undefined;
    } | undefined;
    launch?: {
        event?: z.objectInputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    speechRecognition?: {
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
        overrideNative?: boolean | undefined;
    } | undefined;
}>, {
    autostart: boolean;
    url: string;
    render: {
        mode: RenderMode.EMBEDDED;
        target: HTMLElement;
    } | {
        mode: RenderMode.OVERLAY;
        target?: undefined;
    };
    allowDangerousHTML: boolean;
    verify: ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    }) & ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    } | undefined);
    userID?: string | undefined;
    versionID?: string | undefined;
    user?: {
        name?: string | undefined;
        image?: string | undefined;
    } | undefined;
    launch?: {
        event?: {
            type: string;
            payload?: any;
            diagramID?: string | undefined;
        } | undefined;
    } | undefined;
    speechRecognition?: {
        overrideNative: boolean;
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
    } | undefined;
}, {
    verify: ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    }) & ({
        projectID: string;
    } | {
        projectID: string;
        versionID: string;
        prototype: true;
    } | undefined);
    autostart?: boolean | undefined;
    allowDangerousHTML?: boolean | undefined;
    url?: string | undefined;
    userID?: string | number | undefined;
    versionID?: string | undefined;
    user?: {
        name?: string | undefined;
        image?: string | undefined;
    } | undefined;
    render?: {
        mode?: RenderMode | undefined;
        target?: HTMLElement | undefined;
    } | undefined;
    launch?: {
        event?: z.objectInputType<{
            type: z.ZodString;
        }, z.ZodTypeAny, "passthrough"> | undefined;
    } | undefined;
    speechRecognition?: {
        initialState: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        };
        onStateChange: (args_0: (args_0: {
            listening: boolean;
            transcript: string;
            processing: boolean;
            initializing: boolean;
            microphoneAvailable: boolean;
        }, ...args_1: unknown[]) => void, ...args_1: unknown[]) => (...args: unknown[]) => void;
        stopListening: (...args: unknown[]) => void;
        startListening: (...args: unknown[]) => void;
        resetTranscript: (...args: unknown[]) => void;
        overrideNative?: boolean | undefined;
    } | undefined;
}>;
export {};
//# sourceMappingURL=ChatConfig.dto.d.ts.map