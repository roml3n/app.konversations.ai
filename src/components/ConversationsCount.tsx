import { motion } from 'motion/react';

const data = [
  { label: 'Resolved', count: 68, percent: 32, color: 'var(--chart-3)' },
  { label: 'Partially Resolved', count: 86, percent: 41, color: 'var(--chart-2)' },
  { label: 'Unresolved', count: 57, percent: 27, color: 'var(--destructive)' },
];

const total = data.reduce((sum, item) => sum + item.count, 0);

export function ConversationsCount() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-4"
    >
      <div className="space-y-4">
        <h3 className="text-sm font-normal tracking-[0.07px] text-muted-foreground">Conversations</h3>
        
        <div className="space-y-4">
          {/* Total count */}
          <p className="font-['Instrument_Sans'] text-4xl font-semibold leading-[0.9] tracking-[0.18px] text-foreground">
            {total}
          </p>

          {/* Progress bar */}
          <div className="flex h-[13px] w-full overflow-hidden rounded-[4px] gap-1">
            {data.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ width: 0 }}
                animate={{ width: `${item.percent}%` }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="h-full first:rounded-l-[4px] last:rounded-r-[4px]"
                style={{ backgroundColor: item.color }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* List */}
      <div className="mt-4 space-y-4">
        {/* Header */}
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Status</span>
          <div className="flex gap-8 w-[120px] justify-between">
             <span>Percent</span>
             <span>Total</span>
          </div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          {data.map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-3.5 rounded-[4px]" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-semibold text-foreground/80 tracking-[0.07px]">{item.label}</span>
              </div>
              <div className="flex gap-8 w-[120px] justify-between text-sm text-foreground/80 tracking-[0.07px]">
                <span>{item.percent}%</span>
                <span>{item.count}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
