import { MouseEventHandler, default as React } from 'react';

export interface LauncherProps {
    /**
     * An image URL to be rendered as the icon.
     * Defaults to the "launch" SVG if not provided.
     */
    image?: string | undefined;
    /**
     * A callback that will be executed when the button is clicked.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
}
declare const Launcher: React.FC<LauncherProps>;
/**
 * A floating action button used to launch the chat widget.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/story/components-launcher--default}
 */
export default Launcher;
//# sourceMappingURL=index.d.ts.map