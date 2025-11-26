import { TurnProps } from './turn';
import { ChatPersistence, ChatPosition } from '@voiceflow/voiceflow-types/build/cjs/version/chat';
import { RuntimeAction } from '@voiceflow/sdk-runtime';
import { BaseRequest } from '@voiceflow/dtos-interact';

export { ChatPersistence, ChatPosition };
export type { RuntimeAction };
export type SendMessage = (action: BaseRequest, message?: string) => Promise<void>;
export declare enum SessionStatus {
    IDLE = "IDLE",
    ACTIVE = "ACTIVE",
    ENDED = "ENDED"
}
export interface SessionOptions {
    userID: string;
    turns?: TurnProps[];
    startTime?: number;
    status?: SessionStatus;
}
//# sourceMappingURL=session.d.ts.map