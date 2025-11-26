import { ChatPersistence, ChatPosition } from '../types';
import { z } from 'zod';

export declare const DEFAULT_AVATAR = "https://cdn.voiceflow.com/assets/logo.png";
export type AssistantOptions = z.infer<typeof AssistantOptions>;
export type RawAssistantOptions = z.input<typeof AssistantOptions>;
export declare const AssistantOptions: z.ZodDefault<z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    color: z.ZodDefault<z.ZodString>;
    image: z.ZodDefault<z.ZodString>;
    avatar: z.ZodDefault<z.ZodString>;
    launcher: z.ZodOptional<z.ZodString>;
    watermark: z.ZodDefault<z.ZodBoolean>;
    feedback: z.ZodDefault<z.ZodBoolean>;
    stylesheet: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    description: z.ZodDefault<z.ZodString>;
    position: z.ZodDefault<z.ZodNativeEnum<typeof ChatPosition>>;
    persistence: z.ZodDefault<z.ZodNativeEnum<typeof ChatPersistence>>;
    audioInterface: z.ZodDefault<z.ZodBoolean>;
    defaultAudioOutput: z.ZodOptional<z.ZodBoolean>;
    spacing: z.ZodDefault<z.ZodObject<{
        side: z.ZodDefault<z.ZodNumber>;
        bottom: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        bottom: number;
        side: number;
    }, {
        side?: number | undefined;
        bottom?: number | undefined;
    }>>;
    extensions: z.ZodDefault<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => boolean, (...args: unknown[]) => unknown>;
        name: z.ZodString;
        type: z.ZodLiteral<import("./Extension.dto").ExtensionType.EFFECT>;
        effect: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => void | Promise<void>, (...args: unknown[]) => unknown>>;
    }, "strip", z.ZodTypeAny, {
        match: (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => boolean;
        name: string;
        type: import("./Extension.dto").ExtensionType.EFFECT;
        effect?: ((context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => void | Promise<void>) | undefined;
    }, {
        match: (...args: unknown[]) => unknown;
        name: string;
        type: import("./Extension.dto").ExtensionType.EFFECT;
        effect?: ((...args: unknown[]) => unknown) | undefined;
    }>, z.ZodObject<{
        match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => boolean, (...args: unknown[]) => unknown>;
        name: z.ZodString;
        type: z.ZodLiteral<import("./Extension.dto").ExtensionType.RESPONSE>;
        render: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            element: HTMLElement;
        }) => void | (() => void), (...args: unknown[]) => unknown>>;
    }, "strip", z.ZodTypeAny, {
        match: (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => boolean;
        name: string;
        type: import("./Extension.dto").ExtensionType.RESPONSE;
        render?: ((context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            element: HTMLElement;
        }) => void | (() => void)) | undefined;
    }, {
        match: (...args: unknown[]) => unknown;
        name: string;
        type: import("./Extension.dto").ExtensionType.RESPONSE;
        render?: ((...args: unknown[]) => unknown) | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    title: string;
    image: string;
    color: string;
    position: ChatPosition;
    avatar: string;
    watermark: boolean;
    feedback: boolean;
    description: string;
    persistence: ChatPersistence;
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
        type: import("./Extension.dto").ExtensionType.EFFECT;
        effect?: ((context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => void | Promise<void>) | undefined;
    } | {
        match: (context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
        }) => boolean;
        name: string;
        type: import("./Extension.dto").ExtensionType.RESPONSE;
        render?: ((context: {
            trace: import('@voiceflow/base-types/build/cjs/trace').AnyTrace;
            element: HTMLElement;
        }) => void | (() => void)) | undefined;
    })[];
    launcher?: string | undefined;
    stylesheet?: string | string[] | undefined;
    defaultAudioOutput?: boolean | undefined;
}, {
    title?: string | undefined;
    color?: string | undefined;
    image?: string | undefined;
    avatar?: string | undefined;
    launcher?: string | undefined;
    watermark?: boolean | undefined;
    feedback?: boolean | undefined;
    stylesheet?: string | string[] | undefined;
    description?: string | undefined;
    position?: ChatPosition | undefined;
    persistence?: ChatPersistence | undefined;
    audioInterface?: boolean | undefined;
    defaultAudioOutput?: boolean | undefined;
    spacing?: {
        side?: number | undefined;
        bottom?: number | undefined;
    } | undefined;
    extensions?: ({
        match: (...args: unknown[]) => unknown;
        name: string;
        type: import("./Extension.dto").ExtensionType.EFFECT;
        effect?: ((...args: unknown[]) => unknown) | undefined;
    } | {
        match: (...args: unknown[]) => unknown;
        name: string;
        type: import("./Extension.dto").ExtensionType.RESPONSE;
        render?: ((...args: unknown[]) => unknown) | undefined;
    })[] | undefined;
}>>;
//# sourceMappingURL=AssistantOptions.dto.d.ts.map