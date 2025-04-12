import { Message } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn('flex w-full items-start gap-4 p-4', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/ai-avatar.png" alt="AI" />
          <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-2',
          isUser ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
        )}
      >
        <p className="text-sm">{message.content}</p>
        <p className="mt-1 text-xs opacity-60">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
        {!isUser && message.usage && (
          <p className="mt-1 text-xs opacity-60">
            Input: {message.usage.prompt_tokens} tkns | Output: {message.usage.completion_tokens}{' '}
            tkns | Total: {message.usage.total_tokens} tkns
          </p>
        )}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src="/user-avatar.png" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground">U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
