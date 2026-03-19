import { AlertTriangle, RefreshCw } from "lucide-react";

interface ErrorBannerProps {
  message: string;
  onRetry?: () => void;
}

export function ErrorBanner({ message, onRetry }: ErrorBannerProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 animate-fade-in-up">
      <div className="flex items-center gap-3 p-3 rounded-lg border border-destructive/30 bg-destructive/10 text-sm">
        <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
        <span className="flex-1 text-foreground font-mono text-xs">{message}</span>
        {onRetry && (
          <button
            onClick={onRetry}
            className="flex-shrink-0 text-primary hover:text-primary/80 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
