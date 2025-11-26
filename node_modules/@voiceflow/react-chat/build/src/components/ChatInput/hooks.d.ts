import { ChatSpeechRecognitionConfig } from '../../dtos/ChatConfig.dto';

export declare const useSpeechRecognition: ({ onSend, onValueChange, customSpeechRecognition, }: {
    onSend?: () => void;
    onValueChange: (value: string) => void;
    customSpeechRecognition?: ChatSpeechRecognitionConfig;
}) => {
    available: boolean;
    listening: boolean;
    processing: boolean;
    textareaRef: import('react').RefObject<HTMLTextAreaElement>;
    initializing: boolean;
    stopListening: () => void;
    startListening: () => void;
    microphoneAvailable: boolean;
};
//# sourceMappingURL=hooks.d.ts.map