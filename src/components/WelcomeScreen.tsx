import { Rocket } from "lucide-react";

const suggestions = [
  "What did Perseverance discover in Jezero Crater?",
  "How would a human Mars mission work?",
  "Tell me about the Mars helicopter Ingenuity",
  "What's the plan for Mars Sample Return?",
];

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Logo */}
      <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 glow-primary">
        <Rocket className="w-8 h-8 text-primary" />
      </div>

      <h1 className="font-display text-3xl font-bold tracking-tight mb-2 glow-text text-foreground">
        MARS CTRL
      </h1>
      <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-2">
        Mission Control Intelligence
      </p>
      <p className="text-sm text-muted-foreground max-w-md mb-10 leading-relaxed">
        Your AI guide to Mars exploration. Ask about missions, rovers, 
        discoveries, and the future of humanity on the Red Planet.
      </p>

      {/* Suggestion chips */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg w-full">
        {suggestions.map((s) => (
          <button
            key={s}
            onClick={() => onSuggestionClick(s)}
            className="text-left px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all text-sm text-foreground group"
          >
            <span className="text-primary font-mono text-xs mr-2 group-hover:glow-text">▸</span>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
