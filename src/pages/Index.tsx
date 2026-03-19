import { useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { TypingIndicator } from "@/components/TypingIndicator";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { MissionSidebar } from "@/components/MissionSidebar";
import { ErrorBanner } from "@/components/ErrorBanner";
import { Rocket, Trash2 } from "lucide-react";

const Index = () => {
  const { messages, isStreaming, error, send, stop, clear } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isStreaming]);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Scanline overlay */}
      <div className="fixed inset-0 scanline pointer-events-none z-50" />

      <MissionSidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-3 sm:px-4 h-14 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center lg:hidden flex-shrink-0">
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-xs sm:text-sm font-bold tracking-tight text-foreground">
                MARS CTRL
              </h1>
              <p className="font-mono text-[8px] sm:text-[10px] text-muted-foreground tracking-wider hidden sm:block whitespace-nowrap">
                MISSION CONTROL INTELLIGENCE v2.4
              </p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={clear}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-md text-[10px] sm:text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors flex-shrink-0"
            >
              <Trash2 className="w-3 h-3" />
              <span className="hidden sm:inline">NEW SESSION</span>
            </button>
          )}
        </header>

        {/* Messages area */}
        {messages.length === 0 && !isStreaming ? (
          <WelcomeScreen onSuggestionClick={send} />
        ) : (
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isStreaming && messages[messages.length - 1]?.role !== "assistant" && (
                <TypingIndicator />
              )}
            </div>
          </div>
        )}

        {error && <ErrorBanner message={error} />}
        <ChatInput onSend={send} onStop={stop} isStreaming={isStreaming} />
      </div>
    </div>
  );
};

export default Index;
