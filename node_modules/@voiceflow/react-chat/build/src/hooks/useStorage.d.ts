export declare const useLocalStorage: <T>(name: string, defaultValue: T) => {
    get: () => T;
    set: (value: T) => void;
    clear: () => void;
};
export declare const useSessionStorage: <T>(name: string, defaultValue: T) => {
    get: () => T;
    set: (value: T) => void;
    clear: () => void;
};
export declare const useLocalStorageState: <T>(name: string, initialState: T) => readonly [T, import('react').Dispatch<import('react').SetStateAction<T>>, import('react').MutableRefObject<T>];
export declare const useSessionStorageState: <T>(name: string, initialState: T) => readonly [T, import('react').Dispatch<import('react').SetStateAction<T>>, import('react').MutableRefObject<T>];
//# sourceMappingURL=useStorage.d.ts.map