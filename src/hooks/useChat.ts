import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Message, ChatState } from '@/lib/types';
import { sendMessage as apiSendMessage } from '@/lib/api';

// Hook personalizado para manejar el estado del chat
export function useChat() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  // Función para enviar un mensaje
  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Crear mensaje del usuario
    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    // Actualizar estado con el mensaje del usuario
    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      // Enviar el mensaje al API
      const response = await apiSendMessage(content);

      // Crear mensaje del asistente
      const assistantMessage: Message = {
        id: uuidv4(),
        role: 'assistant',
        content: response.message.content,
        timestamp: new Date(),
        usage: response.usage,
      };

      // Actualizar estado con la respuesta
      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error in chat:', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Error al comunicarse con el asistente. Por favor, intenta de nuevo.',
      }));
    }
  };

  // Función para limpiar el chat
  const clearChat = () => {
    setState({
      messages: [],
      isLoading: false,
      error: null,
    });
  };

  return {
    messages: state.messages,
    isLoading: state.isLoading,
    error: state.error,
    sendMessage,
    clearChat,
  };
}
