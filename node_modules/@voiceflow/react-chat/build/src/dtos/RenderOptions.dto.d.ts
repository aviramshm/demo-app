import { z } from 'zod';

export declare const EMBEDDED_TARGET = "voiceflow-chat-frame";
export declare enum RenderMode {
    EMBEDDED = "embedded",
    OVERLAY = "overlay"
}
export type RenderOptions = z.infer<typeof RenderOptions>;
export declare const RenderOptions: z.ZodEffects<z.ZodOptional<z.ZodObject<{
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
//# sourceMappingURL=RenderOptions.dto.d.ts.map