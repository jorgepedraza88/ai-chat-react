import { useState, KeyboardEvent } from 'react';
import { SendIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ChatInputProps {
  onSend: (message: string, conversationId: string) => void;
  conversationId: string;
  isLoading: boolean;
}

export function ChatInput({ onSend, conversationId, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (message.trim() && !isLoading) {
      onSend(message, conversationId);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex items-center gap-2 border-t p-4">
      <Input
        placeholder="Escribe un mensaje..."
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className="flex-1"
      />
      <Button onClick={handleSubmit} disabled={isLoading || !message.trim()} size="icon">
        <SendIcon className="size-4" />
      </Button>
    </div>
  );
}
