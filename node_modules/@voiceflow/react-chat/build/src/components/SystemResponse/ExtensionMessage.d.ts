import { ResponseExtension } from '../../dtos/Extension.dto';
import { Trace } from '@voiceflow/base-types';

export interface ExtensionMessageProps {
    extension: ResponseExtension;
    trace: Trace.AnyTrace;
}
export declare const ExtensionMessage: React.FC<ExtensionMessageProps>;
//# sourceMappingURL=ExtensionMessage.d.ts.map