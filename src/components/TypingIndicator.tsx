export function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-in-up">
      <div className="flex-shrink-0 w-8 h-8 rounded-sm flex items-center justify-center font-mono text-xs font-bold bg-primary/20 text-primary border border-primary/30">
        MC
      </div>
      <div className="bg-card border border-border rounded-lg px-4 py-3 flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-primary animate-typing-dot" />
        <span className="w-2 h-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.2s]" />
        <span className="w-2 h-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.4s]" />
      </div>
    </div>
  );
}
