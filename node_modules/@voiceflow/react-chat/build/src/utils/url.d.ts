export declare const LINK_ABOUT_ONLY_REGEX: RegExp;
export declare const LINK_BITCOIN_ONLY_REGEX: RegExp;
export declare const LINK_CALLTO_ONLY_REGEX: RegExp;
export declare const LINK_TEL_ONLY_REGEX: RegExp;
export declare const LINK_SMS_ONLY_REGEX: RegExp;
export declare const LINK_MAILTO_ONLY_REGEX: RegExp;
export declare const LINK_IM_ONLY_REGEX: RegExp;
export declare const LINK_FACETIME_ONLY_REGEX: RegExp;
export declare const LINK_SKYPE_ONLY_REGEX: RegExp;
export declare const LINK_WEBCALL_ONLY_REGEX: RegExp;
export declare const STRICT_LINKS_REGEXS: RegExp[];
export declare const isAnyStrictLink: (str: string) => boolean;
export declare const getValidHref: (href: string) => string;
/**
 * opens url in  anew tab, noopener and noreferrer is set to true by default
 */
export declare const openURLInANewTab: (url: string, features?: string) => void;
//# sourceMappingURL=url.d.ts.map