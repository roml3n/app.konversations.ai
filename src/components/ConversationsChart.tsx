import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFilters } from '../contexts/FilterContext';
import { useMemo } from 'react';
import { format, eachDayOfInterval, startOfDay, endOfDay } from 'date-fns';

const legendItems = [
  { label: 'Resolved', color: 'var(--chart-3)' },
  { label: 'Partially resolved', color: 'var(--chart-2)' },
  { label: 'Unresolved', color: 'var(--destructive)' },
];

export function ConversationsChart() {
  const { filteredInsights, dateRange } = useFilters();

  const data = useMemo(() => {
    if (!dateRange.from || !dateRange.to) return [];

    const days = eachDayOfInterval({ start: dateRange.from, end: dateRange.to });

    return days.map(day => {
      const dayStart = startOfDay(day);
      const dayEnd = endOfDay(day);
      
      const dayInsights = filteredInsights.filter(i => {
        const d = new Date(i.date);
        return d >= dayStart && d <= dayEnd;
      });

      return {
        date: format(day, 'MMM d'),
        resolved: dayInsights.filter(i => i.sentiment === 'positive').length,
        partial: dayInsights.filter(i => i.sentiment === 'neutral').length,
        unresolved: dayInsights.filter(i => i.sentiment === 'negative').length,
      };
    });
  }, [filteredInsights, dateRange]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex h-full w-full flex-col gap-6 rounded-lg border border-border bg-card p-4"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-normal tracking-[0.07px] text-muted-foreground">
          Conversation volume over time
        </h3>

        <div className="flex flex-wrap items-center gap-4">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="h-[8px] w-[16px] rounded-[2px] opacity-80" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-muted-foreground tracking-[0.06px]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} opacity={0.4} />
            <XAxis
              dataKey="date"
              stroke="var(--muted-foreground)"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
              tickLine={false}
              axisLine={{ stroke: 'var(--border)', opacity: 0.5 }}
              dy={10}
              interval="preserveStartEnd"
              minTickGap={30}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
              tickLine={false}
              axisLine={false}
              allowDecimals={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-card)',
                fontSize: '12px',
              }}
              cursor={{ stroke: 'var(--muted-foreground)', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Line
              type="linear"
              dataKey="resolved"
              stroke="var(--chart-3)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              type="linear"
              dataKey="partial"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
            <Line
              type="linear"
              dataKey="unresolved"
              stroke="var(--destructive)"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
