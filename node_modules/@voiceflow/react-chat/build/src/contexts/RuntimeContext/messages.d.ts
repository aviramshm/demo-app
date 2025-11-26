import { SystemResponseProps } from '../../components/SystemResponse';
import { TraceDeclaration } from '@voiceflow/sdk-runtime';

export interface RuntimeMessage extends Pick<SystemResponseProps, 'messages' | 'actions'> {
}
export declare const MESSAGE_TRACES: TraceDeclaration<RuntimeMessage, any>[];
//# sourceMappingURL=messages.d.ts.map