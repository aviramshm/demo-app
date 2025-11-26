import { SystemTurnProps, TurnProps } from '../../types';
import { BaseRequest } from '@voiceflow/dtos-interact';

export declare const getLastSystemTurn: (turns: TurnProps[]) => SystemTurnProps | null;
export declare const resolveAction: (action: BaseRequest, turns: TurnProps[]) => BaseRequest;
//# sourceMappingURL=runtime.utils.d.ts.map