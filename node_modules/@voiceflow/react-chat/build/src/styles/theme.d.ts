import { StringKeyOf } from 'type-fest';
import { PropertiesHyphen as CSSPropertiesHyphen } from 'csstype';
import { CSS as BaseCSS } from '@voiceflow/stitches-react';

import * as Font from './font';
export declare const createTransition: (properties: Array<keyof CSSPropertiesHyphen>, duration?: number) => string;
export type CSS = BaseCSS<(typeof stitches)['config']>;
type Token<T extends Record<string, any>> = `$${StringKeyOf<T>}`;
export interface FontOptions {
    size?: BaseCSS['fontSize'] | Token<(typeof Font)['SIZES']>;
    weight?: BaseCSS['fontWeight'] | Token<(typeof Font)['WEIGHTS']>;
    height?: BaseCSS['lineHeight'] | Token<(typeof Font)['LINE_HEIGHTS']>;
}
export declare const getDefaultTheme: () => {
    theme: {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    };
    media: {
        mobile: string;
    };
    utils: {
        anim: (animations: Array<() => string>) => {
            animation: string;
        };
        trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
            transition: string;
        };
        typo: ({ size, weight, height }: FontOptions) => {
            fontFamily: string;
            fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
            lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
        };
    };
    root?: ShadowRoot | undefined;
};
export declare const stitches: import('@voiceflow/stitches-react/types/stitches').default<"", {
    mobile: string;
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
    anim: (animations: Array<() => string>) => {
        animation: string;
    };
    trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
        transition: string;
    };
    typo: ({ size, weight, height }: FontOptions) => {
        fontFamily: string;
        fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
        lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
    };
}>;
export declare const styled: {
    withConfig: (config: {
        componentId?: string | undefined;
        displayName?: string | undefined;
        shouldForwardStitchesProp?: ((prop: (string & {}) | "css") => boolean | void) | undefined;
    }) => import('@voiceflow/stitches-react/types/stitches').StyledFunctionType<{
        mobile: string;
    }, {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    }, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
        anim: (animations: Array<() => string>) => {
            animation: string;
        };
        trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
            transition: string;
        };
        typo: ({ size, weight, height }: FontOptions) => {
            fontFamily: string;
            fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
            lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
        };
    }>;
} & import('@voiceflow/stitches-react/types/stitches').StyledFunctionType<{
    mobile: string;
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        surfaceZ1Light: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
    anim: (animations: Array<() => string>) => {
        animation: string;
    };
    trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
        transition: string;
    };
    typo: ({ size, weight, height }: FontOptions) => {
        fontFamily: string;
        fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
        lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
    };
}>, keyframes: (style: {
    [offset: string]: import('@voiceflow/stitches-react/types/css-util').CSS<{
        mobile: string;
    }, {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            surfaceZ1Light: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    }, import('@voiceflow/stitches-react/types/config').DefaultThemeMap, {
        anim: (animations: Array<() => string>) => {
            animation: string;
        };
        trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
            transition: string;
        };
        typo: ({ size, weight, height }: FontOptions) => {
            fontFamily: string;
            fontSize: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | import("@voiceflow/stitches-react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | import("@voiceflow/stitches-react/types/css").Property.FontWeight;
            lineHeight: import('@voiceflow/stitches-react/types/css').Globals | import('@voiceflow/stitches-react/types/theme').ScaleValue | import('@voiceflow/stitches-react/types/util').Index | "$1" | "$2" | "$3" | import("@voiceflow/stitches-react/types/css").Property.LineHeight;
        };
    }>;
}) => {
    (): string;
    name: string;
}, theme: string & {
    className: string;
    selector: string;
} & {
    colors: {
        shadow1: import('@voiceflow/stitches-react/types/theme').Token<"shadow1", string, "colors", "">;
        shadow2: import('@voiceflow/stitches-react/types/theme').Token<"shadow2", string, "colors", "">;
        shadow3: import('@voiceflow/stitches-react/types/theme').Token<"shadow3", string, "colors", "">;
        shadow4: import('@voiceflow/stitches-react/types/theme').Token<"shadow4", string, "colors", "">;
        shadow6: import('@voiceflow/stitches-react/types/theme').Token<"shadow6", string, "colors", "">;
        shadow8: import('@voiceflow/stitches-react/types/theme').Token<"shadow8", string, "colors", "">;
        shadow12: import('@voiceflow/stitches-react/types/theme').Token<"shadow12", string, "colors", "">;
        shadow16: import('@voiceflow/stitches-react/types/theme').Token<"shadow16", string, "colors", "">;
        surfaceZ1Light: import('@voiceflow/stitches-react/types/theme').Token<"surfaceZ1Light", string, "colors", "">;
        primary: import('@voiceflow/stitches-react/types/theme').Token<"primary", string, "colors", "">;
        darkPrimary: import('@voiceflow/stitches-react/types/theme').Token<"darkPrimary", string, "colors", "">;
        fadedPrimary: import('@voiceflow/stitches-react/types/theme').Token<"fadedPrimary", string, "colors", "">;
        black: import('@voiceflow/stitches-react/types/theme').Token<"black", string, "colors", "">;
        white: import('@voiceflow/stitches-react/types/theme').Token<"white", string, "colors", "">;
        lightGrey: import('@voiceflow/stitches-react/types/theme').Token<"lightGrey", string, "colors", "">;
        medGrey: import('@voiceflow/stitches-react/types/theme').Token<"medGrey", string, "colors", "">;
        darkGrey: import('@voiceflow/stitches-react/types/theme').Token<"darkGrey", string, "colors", "">;
        blue: import('@voiceflow/stitches-react/types/theme').Token<"blue", string, "colors", "">;
        warn: import('@voiceflow/stitches-react/types/theme').Token<"warn", string, "colors", "">;
        darkWarn: import('@voiceflow/stitches-react/types/theme').Token<"darkWarn", string, "colors", "">;
    };
    shadows: {
        shadow1: import('@voiceflow/stitches-react/types/theme').Token<"shadow1", string, "shadows", "">;
        shadow2: import('@voiceflow/stitches-react/types/theme').Token<"shadow2", string, "shadows", "">;
        shadow3: import('@voiceflow/stitches-react/types/theme').Token<"shadow3", string, "shadows", "">;
        shadow4: import('@voiceflow/stitches-react/types/theme').Token<"shadow4", string, "shadows", "">;
        shadow6: import('@voiceflow/stitches-react/types/theme').Token<"shadow6", string, "shadows", "">;
        shadow8: import('@voiceflow/stitches-react/types/theme').Token<"shadow8", string, "shadows", "">;
        shadow12: import('@voiceflow/stitches-react/types/theme').Token<"shadow12", string, "shadows", "">;
        shadow16: import('@voiceflow/stitches-react/types/theme').Token<"shadow16", string, "shadows", "">;
        surfaceZ1Light: import('@voiceflow/stitches-react/types/theme').Token<"surfaceZ1Light", string, "shadows", "">;
    };
    space: {
        1: import('@voiceflow/stitches-react/types/theme').Token<"1", string, "space", "">;
        2: import('@voiceflow/stitches-react/types/theme').Token<"2", string, "space", "">;
        3: import('@voiceflow/stitches-react/types/theme').Token<"3", string, "space", "">;
        4: import('@voiceflow/stitches-react/types/theme').Token<"4", string, "space", "">;
        5: import('@voiceflow/stitches-react/types/theme').Token<"5", string, "space", "">;
        6: import('@voiceflow/stitches-react/types/theme').Token<"6", string, "space", "">;
    };
    sizes: {
        xxs: import('@voiceflow/stitches-react/types/theme').Token<"xxs", string, "sizes", "">;
        xs: import('@voiceflow/stitches-react/types/theme').Token<"xs", string, "sizes", "">;
        sm: import('@voiceflow/stitches-react/types/theme').Token<"sm", string, "sizes", "">;
        md: import('@voiceflow/stitches-react/types/theme').Token<"md", string, "sizes", "">;
        lg: import('@voiceflow/stitches-react/types/theme').Token<"lg", string, "sizes", "">;
        xl: import('@voiceflow/stitches-react/types/theme').Token<"xl", string, "sizes", "">;
        xxl: import('@voiceflow/stitches-react/types/theme').Token<"xxl", string, "sizes", "">;
    };
    fonts: {
        default: import('@voiceflow/stitches-react/types/theme').Token<"default", string, "fonts", "">;
    };
    fontSizes: {
        1: import('@voiceflow/stitches-react/types/theme').Token<"1", string, "fontSizes", "">;
        2: import('@voiceflow/stitches-react/types/theme').Token<"2", string, "fontSizes", "">;
        3: import('@voiceflow/stitches-react/types/theme').Token<"3", string, "fontSizes", "">;
    };
    fontWeights: {
        1: import('@voiceflow/stitches-react/types/theme').Token<"1", string, "fontWeights", "">;
        2: import('@voiceflow/stitches-react/types/theme').Token<"2", string, "fontWeights", "">;
    };
    lineHeights: {
        1: import('@voiceflow/stitches-react/types/theme').Token<"1", string, "lineHeights", "">;
        2: import('@voiceflow/stitches-react/types/theme').Token<"2", string, "lineHeights", "">;
        3: import('@voiceflow/stitches-react/types/theme').Token<"3", string, "lineHeights", "">;
    };
    radii: {
        1: import('@voiceflow/stitches-react/types/theme').Token<"1", string, "radii", "">;
        2: import('@voiceflow/stitches-react/types/theme').Token<"2", string, "radii", "">;
        round: import('@voiceflow/stitches-react/types/theme').Token<"round", string, "radii", "">;
    };
}, createTheme: <Argument0 extends string | ({
    colors?: {
        shadow1?: string | number | boolean | undefined;
        shadow2?: string | number | boolean | undefined;
        shadow3?: string | number | boolean | undefined;
        shadow4?: string | number | boolean | undefined;
        shadow6?: string | number | boolean | undefined;
        shadow8?: string | number | boolean | undefined;
        shadow12?: string | number | boolean | undefined;
        shadow16?: string | number | boolean | undefined;
        surfaceZ1Light?: string | number | boolean | undefined;
        primary?: string | number | boolean | undefined;
        darkPrimary?: string | number | boolean | undefined;
        fadedPrimary?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        lightGrey?: string | number | boolean | undefined;
        medGrey?: string | number | boolean | undefined;
        darkGrey?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        warn?: string | number | boolean | undefined;
        darkWarn?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        shadow1?: string | number | boolean | undefined;
        shadow2?: string | number | boolean | undefined;
        shadow3?: string | number | boolean | undefined;
        shadow4?: string | number | boolean | undefined;
        shadow6?: string | number | boolean | undefined;
        shadow8?: string | number | boolean | undefined;
        shadow12?: string | number | boolean | undefined;
        shadow16?: string | number | boolean | undefined;
        surfaceZ1Light?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        xxs?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        default?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        shadow1?: string | number | boolean | undefined;
        shadow2?: string | number | boolean | undefined;
        shadow3?: string | number | boolean | undefined;
        shadow4?: string | number | boolean | undefined;
        shadow6?: string | number | boolean | undefined;
        shadow8?: string | number | boolean | undefined;
        shadow12?: string | number | boolean | undefined;
        shadow16?: string | number | boolean | undefined;
        surfaceZ1Light?: string | number | boolean | undefined;
        primary?: string | number | boolean | undefined;
        darkPrimary?: string | number | boolean | undefined;
        fadedPrimary?: string | number | boolean | undefined;
        black?: string | number | boolean | undefined;
        white?: string | number | boolean | undefined;
        lightGrey?: string | number | boolean | undefined;
        medGrey?: string | number | boolean | undefined;
        darkGrey?: string | number | boolean | undefined;
        blue?: string | number | boolean | undefined;
        warn?: string | number | boolean | undefined;
        darkWarn?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        shadow1?: string | number | boolean | undefined;
        shadow2?: string | number | boolean | undefined;
        shadow3?: string | number | boolean | undefined;
        shadow4?: string | number | boolean | undefined;
        shadow6?: string | number | boolean | undefined;
        shadow8?: string | number | boolean | undefined;
        shadow12?: string | number | boolean | undefined;
        shadow16?: string | number | boolean | undefined;
        surfaceZ1Light?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
        4?: string | number | boolean | undefined;
        5?: string | number | boolean | undefined;
        6?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        xxs?: string | number | boolean | undefined;
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
        xl?: string | number | boolean | undefined;
        xxl?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        default?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
    } | undefined;
    lineHeights?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        3?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        1?: string | number | boolean | undefined;
        2?: string | number | boolean | undefined;
        round?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import('@voiceflow/stitches-react/types/stitches').ThemeTokens<Argument1, ""> : import('@voiceflow/stitches-react/types/stitches').ThemeTokens<Argument0, "">);
interface ThemeOverrides {
    color?: string;
}
export declare const createCustomTheme: ({ color }: ThemeOverrides) => string & {
    className: string;
    selector: string;
} & import('@voiceflow/stitches-react/types/stitches').ThemeTokens<{
    colors: {};
}, "">;
export {};
//# sourceMappingURL=theme.d.ts.map