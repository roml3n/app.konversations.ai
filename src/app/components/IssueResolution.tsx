import { motion } from 'motion/react';
import { useFilters } from '../contexts/FilterContext';
import { useMemo } from 'react';

const ArrowUpIcon = () => (
  <svg className="block size-[12px] shrink-0" fill="none" viewBox="0 0 12 12">
    <path d="M3.705 7.705L6 5.415L8.295 7.705L9 7L6 4L3 7L3.705 7.705Z" fill="currentColor" />
  </svg>
);

export function IssueResolution() {
  const { filteredInsights } = useFilters();

  const stats = useMemo(() => {
    const total = filteredInsights.length || 1;
    const resolved = filteredInsights.filter(i => i.resolutionStatus === 'resolved').length;
    const totalHandleTime = filteredInsights.reduce((acc, i) => acc + i.handleTime, 0);
    
    // Mock first contact resolution: resolved and handle time < 15 min
    const fcr = filteredInsights.filter(i => i.resolutionStatus === 'resolved' && i.handleTime < 15).length;

    return {
      resolutionRate: Math.round((resolved / total) * 100),
      avgHandleTime: Math.round(totalHandleTime / total),
      fcrRate: Math.round((fcr / total) * 100)
    };
  }, [filteredInsights]);

  const items = [
    {
      value: `${stats.resolutionRate}%`,
      label: 'Resolution rate',
      trend: '22%',
      trendLabel: 'vs last week'
    },
    {
      value: `${stats.avgHandleTime}min`,
      label: 'Average handle time',
      trend: '12%',
      trendLabel: 'vs last week'
    },
    {
      value: `${stats.fcrRate}%`,
      label: '% of calls resolved on first contact',
      trend: '5%',
      trendLabel: 'vs last week'
    }
  ];

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
