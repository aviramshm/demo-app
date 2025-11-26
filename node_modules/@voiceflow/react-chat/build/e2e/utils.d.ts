export declare const slateMessage: (text: string) => {
    type: string;
    payload: {
        slate: {
            id: string;
            content: {
                children: {
                    text: string;
                }[];
            }[];
            messageDelayMilliseconds: number;
        };
        message: string;
        delay: number;
    };
};
//# sourceMappingURL=utils.d.ts.map