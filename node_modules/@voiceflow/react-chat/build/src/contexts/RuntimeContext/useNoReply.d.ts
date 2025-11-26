import { RuntimeState } from './useRuntimeState';

export declare const useNoReply: (api: () => Pick<RuntimeState['api'], 'interact' | 'isStatus'>) => {
    setNoReplyTimeout: (timeout: number) => void;
    clearNoReplyTimeout: () => void;
};
//# sourceMappingURL=useNoReply.d.ts.map