export function TypingIndicator() {
  return (
    <div className="flex gap-2 sm:gap-3 animate-fade-in-up">
      <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-sm flex items-center justify-center font-mono text-[10px] sm:text-xs font-bold bg-primary/20 text-primary border border-primary/30">
        MC
      </div>
      <div className="bg-card border border-border rounded-lg px-3 py-2 sm:px-4 sm:py-3 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-typing-dot" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.2s]" />
        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-typing-dot [animation-delay:0.4s]" />
      </div>
    </div>
  );
}
