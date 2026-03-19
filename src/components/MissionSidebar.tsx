import { Rocket, Satellite, Thermometer, Wind, Radio, MapPin } from "lucide-react";

const stats = [
  { icon: Radio, label: "SIGNAL", value: "ONLINE", color: "text-terminal-green" },
  { icon: Satellite, label: "ORBITER", value: "MRO-3", color: "text-primary" },
  { icon: MapPin, label: "SITE", value: "JEZERO", color: "text-primary" },
  { icon: Thermometer, label: "TEMP", value: "-63°C", color: "text-primary" },
  { icon: Wind, label: "WIND", value: "7.2 m/s", color: "text-primary" },
  { icon: Rocket, label: "SOL", value: "1247", color: "text-primary" },
];

export function MissionSidebar() {
  return (
    <aside className="hidden lg:flex w-64 flex-col border-r border-border bg-card/30">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <h2 className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
          Mission Telemetry
        </h2>
      </div>

      {/* Stats */}
      <div className="flex-1 p-4 space-y-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 p-2 rounded-md bg-secondary/50">
            <stat.icon className={`w-4 h-4 ${stat.color}`} />
            <div className="flex-1 min-w-0">
              <p className="font-mono text-[10px] text-muted-foreground tracking-wider">
                {stat.label}
              </p>
              <p className={`font-mono text-xs font-semibold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse-glow" />
          <span className="font-mono text-[10px] text-muted-foreground tracking-wider">
            UPLINK ACTIVE — 14 MIN DELAY
          </span>
        </div>
      </div>
    </aside>
  );
}
