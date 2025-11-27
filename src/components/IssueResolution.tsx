import { motion } from 'motion/react';

const ArrowUpIcon = () => (
  <svg className="block size-[12px] shrink-0" fill="none" viewBox="0 0 12 12">
    <path d="M3.705 7.705L6 5.415L8.295 7.705L9 7L6 4L3 7L3.705 7.705Z" fill="currentColor" />
  </svg>
);

const items = [
  {
    value: '90%',
    label: 'Resolution rate',
    trend: '22%',
    trendLabel: 'vs last week'
  },
  {
    value: '3min',
    label: 'Average handle time',
    trend: '22%',
    trendLabel: 'vs last week'
  },
  {
    value: '34%',
    label: '% of calls resolved on first contact',
    trend: '22%',
    trendLabel: 'vs last week'
  }
];

export function IssueResolution() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex h-full w-full flex-col gap-6 rounded-lg border border-border bg-card p-4"
    >
      <p className="text-sm font-normal tracking-[0.07px] text-muted-foreground">
        Issue resolution
      </p>

      <div className="flex flex-col gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <p className="font-semibold leading-[0.9] tracking-[0.18px] text-foreground" style={{ fontSize: 'var(--text-2xl)' }}>
              {item.value}
            </p>
            <p className="text-sm font-normal tracking-[0.07px] text-muted-foreground">
              {item.label}
            </p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5 text-[var(--chart-3)]">
                <ArrowUpIcon />
                <span className="text-xs font-normal tracking-[0.06px]">
                  {item.trend}
                </span>
              </div>
              <span className="text-xs font-normal text-muted-foreground/40 tracking-[0.06px]">
                {item.trendLabel}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
