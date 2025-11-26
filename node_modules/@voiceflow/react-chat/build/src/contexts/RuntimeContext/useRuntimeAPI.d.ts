import { RuntimeMessage, MESSAGE_TRACES } from './messages';
import { SessionOptions, UserTurnProps } from '../../types';
import { ChatConfig } from '../../dtos/ChatConfig.dto';
import { MessageProps } from '../../components/SystemResponse';
import { RuntimeAction } from '@voiceflow/sdk-runtime';

export declare enum FeedbackName {
    POSITIVE = "Thumbs up",
    NEGATIVE = "Thumbs down"
}
export declare const createContext: () => RuntimeMessage;
export declare const useRuntimeAPI: ({ url, user, userID, verify, versionID, traceHandlers, }: ChatConfig & Pick<SessionOptions, 'userID'> & {
    traceHandlers?: typeof MESSAGE_TRACES;
}) => {
    interact: (action: RuntimeAction, config?: any) => Promise<RuntimeMessage>;
    saveFeedback: (name: FeedbackName, lastTurnMessages: MessageProps[], userTurn: UserTurnProps | null) => Promise<void>;
    saveTranscript: () => Promise<void>;
};
//# sourceMappingURL=useRuntimeAPI.d.ts.map