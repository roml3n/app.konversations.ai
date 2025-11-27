import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useFilters } from '../contexts/FilterContext';
import { useMemo } from 'react';

const CHART_COLORS = {
  WhatsApp: '#7B7BD7',
  Call: '#6AC18F',
  WebChat: '#FDC463', // Mapping to Messenger or similar if needed
  Freshdesk: '#85D6EC',
  Email: '#EA4335',
  Jira: '#394EF2',
  Other: '#cccccc'
};

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      <div 
        className="h-[7.682px] w-[16.747px] shrink-0 rounded-[2px] opacity-80" 
        style={{ backgroundColor: color }} 
      />
      <p className="shrink-0 whitespace-pre text-xs font-normal leading-[1.2] tracking-[0.06px] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

export function ConversationSources() {
  const { filteredInsights } = useFilters();

  const data = useMemo(() => {
    const stats: Record<string, number> = {};
    
    filteredInsights.forEach(insight => {
      const ch = insight.channel;
      stats[ch] = (stats[ch] || 0) + 1;
    });

    const total = filteredInsights.length || 1;
    
    return Object.entries(stats).map(([name, value]) => ({
      name,
      value: Math.round((value / total) * 100),
      // @ts-ignore
      color: CHART_COLORS[name] || CHART_COLORS.Other
    })).sort((a, b) => b.value - a.value);

  }, [filteredInsights]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-full w-full flex-col gap-6 rounded-lg border border-border bg-card p-4"
    >
      <p className="text-sm font-normal tracking-[0.07px] text-muted-foreground">
        Conversation sources
      </p>
      
      <div className="flex flex-1 flex-col items-center justify-center gap-6">
        <div className="relative h-[191px] w-full max-w-[191px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={5}
                cornerRadius={8}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                cursor={false}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border border-border bg-popover p-2 shadow-md">
                        <p className="text-xs font-medium text-popover-foreground">
                          {payload[0].name}: {payload[0].value}%
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex w-full flex-wrap items-center justify-center gap-3">
            {data.map((item) => (
                 <LegendItem key={item.name} color={item.color} label={item.name} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}
