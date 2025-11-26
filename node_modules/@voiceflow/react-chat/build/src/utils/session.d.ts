import { SessionOptions, ChatPersistence } from '../types';

export declare const getSession: (persistence: ChatPersistence, projectID: string, userID?: string) => SessionOptions;
export declare const saveSession: (persistence: ChatPersistence, projectID: string, session: SessionOptions) => void;
//# sourceMappingURL=session.d.ts.map