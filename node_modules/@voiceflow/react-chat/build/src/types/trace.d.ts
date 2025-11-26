import { RuntimeMessage } from '../contexts/RuntimeContext/messages';
import { TraceDeclaration } from '@voiceflow/sdk-runtime';
import { Trace } from '@voiceflow/base-types';

export type TraceHandler<T extends Trace.AnyTrace = Trace.AnyTrace> = TraceDeclaration<RuntimeMessage, T>;
//# sourceMappingURL=trace.d.ts.map