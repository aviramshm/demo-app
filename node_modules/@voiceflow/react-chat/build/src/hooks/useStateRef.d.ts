import { Dispatch, SetStateAction } from 'react';

interface ReadOnlyRefObject<T> {
    readonly current: T;
}
interface UseStateRef {
    <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>, ReadOnlyRefObject<S>];
    <S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>, ReadOnlyRefObject<S | undefined>];
}
export declare const useStateRef: UseStateRef;
export {};
//# sourceMappingURL=useStateRef.d.ts.map