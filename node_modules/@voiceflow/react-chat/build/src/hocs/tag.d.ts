export declare const tagFactory: (prefix: string) => {
    <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, suffix?: string): (props: React.ComponentProps<Tag>) => React.ReactElement;
    <Props>(component: React.ComponentType<Props>, suffix?: string): (props: Props) => React.ReactElement;
};
//# sourceMappingURL=tag.d.ts.map