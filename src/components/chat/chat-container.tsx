import { useEffect, useRef, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './chat-message';
import { ChatInput } from './chat-input';
import { useChat } from '@/hooks/useChat';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { nanoid } from 'nanoid';

export function ChatContainer() {
  const [conversationId, setConversationId] = useState(nanoid());
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al recibir nuevos mensajes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border">
      <div className="flex items-center justify-between bg-neutral-900 p-3">
        <h2 className="text-lg font-semibold text-primary-foreground">Chat con IA</h2>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            clearChat();
            setConversationId(nanoid());
          }}
        >
          Nueva conversación
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center p-8 text-center">
              <p className="text-muted-foreground">
                Envía un mensaje para comenzar una conversación con la IA.
              </p>
            </div>
          ) : (
            <>
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex justify-center p-4">
                  <Loader2 className="size-6 animate-spin text-primary" />
                </div>
              )}
              {error && (
                <div className="rounded-lg bg-destructive/10 p-4 text-destructive">{error}</div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
      </ScrollArea>

      <ChatInput onSend={sendMessage} conversationId={conversationId} isLoading={isLoading} />
    </div>
  );
}
