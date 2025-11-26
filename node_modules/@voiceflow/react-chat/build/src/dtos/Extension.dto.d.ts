import { z } from 'zod';
import { Trace } from '@voiceflow/base-types';

export declare enum ExtensionType {
    EFFECT = "effect",
    RESPONSE = "response"
}
export type EffectExtension = z.infer<typeof EffectExtension>;
export type ResponseExtension = z.infer<typeof ResponseExtension>;
export type AnyExtension = z.infer<typeof AnyExtension>;
export declare const EffectExtension: z.ZodObject<{
    match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => boolean, (...args: unknown[]) => unknown>;
    name: z.ZodString;
    type: z.ZodLiteral<ExtensionType.EFFECT>;
    effect: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => Promise<void> | void, (...args: unknown[]) => unknown>>;
}, "strip", z.ZodTypeAny, {
    match: (context: {
        trace: Trace.AnyTrace;
    }) => boolean;
    name: string;
    type: ExtensionType.EFFECT;
    effect?: ((context: {
        trace: Trace.AnyTrace;
    }) => Promise<void> | void) | undefined;
}, {
    match: (...args: unknown[]) => unknown;
    name: string;
    type: ExtensionType.EFFECT;
    effect?: ((...args: unknown[]) => unknown) | undefined;
}>;
export declare const ResponseExtension: z.ZodObject<{
    match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => boolean, (...args: unknown[]) => unknown>;
    name: z.ZodString;
    type: z.ZodLiteral<ExtensionType.RESPONSE>;
    render: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
        element: HTMLElement;
    }) => (() => void) | void, (...args: unknown[]) => unknown>>;
}, "strip", z.ZodTypeAny, {
    match: (context: {
        trace: Trace.AnyTrace;
    }) => boolean;
    name: string;
    type: ExtensionType.RESPONSE;
    render?: ((context: {
        trace: Trace.AnyTrace;
        element: HTMLElement;
    }) => (() => void) | void) | undefined;
}, {
    match: (...args: unknown[]) => unknown;
    name: string;
    type: ExtensionType.RESPONSE;
    render?: ((...args: unknown[]) => unknown) | undefined;
}>;
export declare const AnyExtension: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => boolean, (...args: unknown[]) => unknown>;
    name: z.ZodString;
    type: z.ZodLiteral<ExtensionType.EFFECT>;
    effect: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => Promise<void> | void, (...args: unknown[]) => unknown>>;
}, "strip", z.ZodTypeAny, {
    match: (context: {
        trace: Trace.AnyTrace;
    }) => boolean;
    name: string;
    type: ExtensionType.EFFECT;
    effect?: ((context: {
        trace: Trace.AnyTrace;
    }) => Promise<void> | void) | undefined;
}, {
    match: (...args: unknown[]) => unknown;
    name: string;
    type: ExtensionType.EFFECT;
    effect?: ((...args: unknown[]) => unknown) | undefined;
}>, z.ZodObject<{
    match: z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
    }) => boolean, (...args: unknown[]) => unknown>;
    name: z.ZodString;
    type: z.ZodLiteral<ExtensionType.RESPONSE>;
    render: z.ZodOptional<z.ZodEffects<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodUnknown>, (context: {
        trace: Trace.AnyTrace;
        element: HTMLElement;
    }) => (() => void) | void, (...args: unknown[]) => unknown>>;
}, "strip", z.ZodTypeAny, {
    match: (context: {
        trace: Trace.AnyTrace;
    }) => boolean;
    name: string;
    type: ExtensionType.RESPONSE;
    render?: ((context: {
        trace: Trace.AnyTrace;
        element: HTMLElement;
    }) => (() => void) | void) | undefined;
}, {
    match: (...args: unknown[]) => unknown;
    name: string;
    type: ExtensionType.RESPONSE;
    render?: ((...args: unknown[]) => unknown) | undefined;
}>]>;
//# sourceMappingURL=Extension.dto.d.ts.map