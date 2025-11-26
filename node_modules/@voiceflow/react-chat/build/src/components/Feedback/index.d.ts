import { FeedbackName } from '../../contexts/RuntimeContext/useRuntimeAPI';
import { default as React } from 'react';

export interface FeedbackProps extends React.PropsWithChildren {
    /**
     * Alternative question to ask the user
     *
     * @default 'Was this helpful?'
     */
    question?: string;
    onClick: (feedback: FeedbackName) => void;
}
declare const Feedback: React.FC<FeedbackProps>;
export default Feedback;
//# sourceMappingURL=index.d.ts.map