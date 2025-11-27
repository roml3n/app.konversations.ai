import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Aug 21', resolved: 8, partial: 10, unresolved: 4 },
  { date: 'Aug 22', resolved: 6, partial: 8, unresolved: 6 },
  { date: 'Aug 23', resolved: 12, partial: 6, unresolved: 3 },
  { date: 'Aug 24', resolved: 9, partial: 9, unresolved: 4 },
  { date: 'Aug 25', resolved: 13, partial: 5, unresolved: 2 },
  { date: 'Aug 26', resolved: 10, partial: 7, unresolved: 5 },
  { date: 'Aug 27', resolved: 14, partial: 6, unresolved: 3 },
  { date: 'Aug 28', resolved: 8, partial: 9, unresolved: 6 },
  { date: 'Aug 29', resolved: 7, partial: 8, unresolved: 8 },
];

const legendItems = [
  { label: 'Resolved', color: 'var(--chart-3)' },
  { label: 'Partially resolved', color: 'var(--chart-2)' },
  { label: 'Unresolved', color: 'var(--destructive)' },
];

export function ConversationsChart() {
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
            />
            <YAxis
              stroke="var(--muted-foreground)"
              tick={{ fill: 'var(--muted-foreground)', fontSize: 12, opacity: 0.5 }}
              tickLine={false}
              axisLine={false}
              domain={[0, 15]}
              ticks={[0, 5, 10, 15]}
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
