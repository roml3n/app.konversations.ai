import { motion } from 'motion/react';
import { useFilters } from '../contexts/FilterContext';
import { useMemo } from 'react';

const InfoIcon = () => (
  <svg className="block size-[12px] shrink-0" fill="none" viewBox="0 0 12 12">
    <g id="circle-info">
      <path d="M6 10.8C7.27304 10.8 8.49394 10.2943 9.39411 9.39411C10.2943 8.49394 10.8 7.27304 10.8 6C10.8 4.72696 10.2943 3.50606 9.39411 2.60589C8.49394 1.70571 7.27304 1.2 6 1.2C4.72696 1.2 3.50606 1.70571 2.60589 2.60589C1.70571 3.50606 1.2 4.72696 1.2 6C1.2 7.27304 1.70571 8.49394 2.60589 9.39411C3.50606 10.2943 4.72696 10.8 6 10.8ZM5.25 7.5H5.7V6.3H5.25C5.00062 6.3 4.8 6.09937 4.8 5.85C4.8 5.60062 5.00062 5.4 5.25 5.4H6.15C6.39937 5.4 6.6 5.60062 6.6 5.85V7.5H6.75C6.99937 7.5 7.2 7.70062 7.2 7.95C7.2 8.19937 6.99937 8.4 6.75 8.4H5.25C5.00062 8.4 4.8 8.19937 4.8 7.95C4.8 7.70062 5.00062 7.5 5.25 7.5ZM6 3.6C6.15913 3.6 6.31174 3.66321 6.42426 3.77574C6.53679 3.88826 6.6 4.04087 6.6 4.2C6.6 4.35913 6.53679 4.51174 6.42426 4.62426C6.31174 4.73679 6.15913 4.8 6 4.8C5.84087 4.8 5.68826 4.73679 5.57574 4.62426C5.46321 4.51174 5.4 4.35913 5.4 4.2C5.4 4.04087 5.46321 3.88826 5.57574 3.77574C5.68826 3.66321 5.84087 3.6 6 3.6Z" fill="var(--chart-5)" />
    </g>
  </svg>
);

const TrendIcon = () => (
  <svg className="block size-[12px] shrink-0" fill="none" viewBox="0 0 12 12">
    <g id="Icon">
      <path d="M3.705 7.705L6 5.415L8.295 7.705L9 7L6 4L3 7L3.705 7.705Z" fill="var(--chart-3)" />
    </g>
  </svg>
);

export function PredictionScores() {
  const { filteredInsights } = useFilters();

  const scores = useMemo(() => {
    const totalScore = filteredInsights.reduce((sum, i) => sum + i.score, 0);
    const avgScore = filteredInsights.length ? totalScore / filteredInsights.length : 0;
    
    // Derived metrics
    const csat = (avgScore / 100).toFixed(1);
    const nps = ((avgScore * 0.8 + 10) / 100).toFixed(1); // Mock logic
    const repeat = ((100 - avgScore) / 200).toFixed(1); // Mock logic

    return [
      {
        label: 'CSAT prediction',
        value: `${csat}/1.0`,
        percentage: `${Math.round(Math.random() * 30)}%`, // Mock trend
        color: 'bg-[var(--chart-3)]', // Green
        height: Math.max(10, parseFloat(csat) * 100),
      },
      {
        label: 'NPS likelihood',
        value: `${nps}/1.0`,
        percentage: `${Math.round(Math.random() * 30)}%`,
        color: 'bg-[var(--chart-2)]', // Blue
        height: Math.max(10, parseFloat(nps) * 100),
      },
      {
        label: 'Repeat contact prob.',
        value: `${repeat}/1.0`,
        percentage: `${Math.round(Math.random() * 30)}%`,
        color: 'bg-[var(--chart-4)]', // Orange
        height: Math.max(10, parseFloat(repeat) * 100),
      }
    ];
  }, [filteredInsights]);

  return (
    <div className="flex h-full w-full flex-col gap-6 rounded-lg border border-border bg-card p-4">
      <p className="text-sm text-muted-foreground tracking-[0.07px]">AI prediction scores</p>
      <div className="flex w-full flex-1 items-end gap-3">
        {scores.map((item, index) => (
          <div key={index} className="flex flex-1 flex-col justify-between gap-4 h-full">
             <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between w-full">
                   <span className="text-xs font-semibold text-muted-foreground tracking-[0.06px] whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                   <InfoIcon />
                </div>
                <div className="text-2xl font-semibold text-foreground tracking-[0.12px]">{item.value}</div>
                <div className="flex items-center gap-1">
                   <TrendIcon />
                   <span className="text-xs text-[var(--chart-3)] tracking-[0.06px]">{item.percentage}</span>
                </div>
             </div>
             
             <div className="relative w-full bg-muted/50 rounded flex h-[150px] items-end overflow-hidden">
                <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: item.height }} 
                    className={`w-full rounded-sm ${item.color}`}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                />
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
