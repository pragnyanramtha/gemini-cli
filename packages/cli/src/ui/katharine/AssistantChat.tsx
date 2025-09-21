import React from 'react';
import { AssistantMessage } from './types';

export interface AssistantChatProps {
  messages: AssistantMessage[];
  onSendMessage?: (message: string) => void;
}

export const AssistantChat: React.FC<AssistantChatProps> = ({
  messages,
  onSendMessage
}) => {
  return (
    <div className="assistant-chat">
      {/* Placeholder for chat interface implementation */}
      <div>Assistant Chat Interface</div>
    </div>
  );
};