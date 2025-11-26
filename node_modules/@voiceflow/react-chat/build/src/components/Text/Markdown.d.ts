import { Options } from 'react-markdown';
import { PureComponent } from 'react';

declare class Markdown extends PureComponent<Options> {
    state: {
        hasError: boolean;
    };
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    componentDidUpdate(prevProps: Readonly<Options>): void;
    componentDidCatch(error: unknown, errorInfo: unknown): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export default Markdown;
//# sourceMappingURL=Markdown.d.ts.map