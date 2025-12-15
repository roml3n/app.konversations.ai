import { CircleHelp } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  borderColor: string;
}

export function MetricCard({
  value,
  label,
  borderColor,
}: MetricCardProps) {
  return (
    <div className="relative bg-card rounded-lg border border-border overflow-hidden">
      {/* Colored bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: borderColor }}
      />

      <div className="flex flex-col gap-4 p-4">
        {/* Value */}
        <div className="text-foreground text-[36px] font-semibold font-normal">
          {value}
        </div>

        {/* Label with info icon */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-muted-foreground text-sm">
            {label}
          </span>
          <CircleHelp className="w-3 h-3 text-muted-foreground opacity-70 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
}