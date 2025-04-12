import { ChatContainer } from '@/components/chat/chat-container';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b">
        <div className="container py-4">
          <h1 className="text-2xl font-bold">AI Chat App</h1>
        </div>
      </header>

      <main className="container flex-1 py-6">
        <div className="mx-auto h-[600px] max-w-4xl">
          <ChatContainer />
        </div>
      </main>

      <footer className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AI Chat App
        </div>
      </footer>
    </div>
  );
}

export default App;
