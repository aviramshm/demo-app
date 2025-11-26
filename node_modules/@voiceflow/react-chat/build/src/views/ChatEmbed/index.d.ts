interface ChatEmbedProps extends React.PropsWithChildren {
    shadowRoot: ShadowRoot;
    chatAPI: VoiceflowChat | undefined;
    ready?: () => void;
}
declare const ChatEmbed: React.FC<ChatEmbedProps>;
export default ChatEmbed;
//# sourceMappingURL=index.d.ts.map