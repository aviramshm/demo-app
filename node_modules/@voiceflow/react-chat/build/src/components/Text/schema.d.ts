export declare const schema: {
    attributes: {
        video: string[];
        audio: string[];
        '*': import('hast-util-sanitize/lib').PropertyDefinition[];
    };
    protocols: {
        href: string[];
        poster: string[];
    };
    tagNames: string[];
    allowComments?: boolean | null | undefined;
    allowDoctypes?: boolean | null | undefined;
    ancestors?: Record<string, string[]> | null | undefined;
    clobber?: string[] | null | undefined;
    clobberPrefix?: string | null | undefined;
    required?: Record<string, Record<string, string | number | boolean | (string | number)[] | null | undefined>> | null | undefined;
    strip?: string[] | null | undefined;
};
export declare function transformURL(value: string): string;
//# sourceMappingURL=schema.d.ts.map