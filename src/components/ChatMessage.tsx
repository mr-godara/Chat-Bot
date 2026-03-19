import ReactMarkdown from "react-markdown";
import { Message } from "@/hooks/useChat";

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 animate-fade-in-up ${isUser ? "flex-row-reverse" : ""}`}>
      {/* Avatar */}
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center font-mono text-xs font-bold ${
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary/20 text-primary border border-primary/30"
        }`}
      >
        {isUser ? "YOU" : "MC"}
      </div>

      {/* Bubble */}
      <div
        className={`max-w-[80%] rounded-lg px-4 py-3 ${
          isUser
            ? "bg-secondary text-secondary-foreground"
            : "bg-card border border-border"
        }`}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose prose-sm prose-invert max-w-none text-foreground [&_p]:text-foreground [&_li]:text-foreground [&_strong]:text-primary [&_h1]:text-primary [&_h2]:text-primary [&_h3]:text-primary [&_code]:text-terminal-green [&_code]:bg-muted [&_code]:px-1 [&_code]:rounded-sm [&_a]:text-primary">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
