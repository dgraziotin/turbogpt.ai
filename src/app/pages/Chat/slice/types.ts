import { Message } from 'utils/types/injector-typings';

/* --- STATE --- */
export interface ChatOptionsState {
  selectedCharacter: string;
  chatMood: number;
  openAiApiKey: string;
  openAiKeyStatus: boolean;
  generateName: boolean;
  verifyingApiKey: boolean;
  apiPrevKey: string;
  messages: Message[];
  conversations: Message[][];
  selectedConversation: number;
  model: ApiModel;
}

export type ApiModel = 'gpt-3.5-turbo' | 'gpt-4';
