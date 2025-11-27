import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';
import { format, eachDayOfInterval, subDays, startOfDay, isSameDay } from 'date-fns';

const channels = [
  { name: 'WhatsApp', color: '#45B273' },
  { name: 'Jira', color: '#67CCE8' },
  { name: 'Freshdesk', color: '#DA3B3B' },
  { name: 'Call', color: '#C07AED' },
];

export function ResolutionTrendsChart() {
  const { filteredInsights, dateRange } = useFilters();

  const chartData = useMemo(() => {
    // Determine date range to display
    let start = dateRange.from || subDays(new Date(), 7);
    let end = dateRange.to || new Date();
    
    // Ensure we have at least a few days
    if (start.getTime() === end.getTime()) {
        start = subDays(end, 6);
    }

    const days = eachDayOfInterval({ start, end });
    
    // If too many days, just show last 7 or sample
    const displayDays = days.length > 14 ? days.slice(-7) : days;

    return displayDays.map(day => {
      const row: any = { day: format(day, 'EEE') }; // M, T, W...
      
      channels.forEach(channel => {
        const dailyInsights = filteredInsights.filter(i => 
            isSameDay(new Date(i.date), day) && i.channel === channel.name
        );

        if (dailyInsights.length === 0) {
            row[channel.name] = 0;
        } else {
            // Calculate Net Sentiment Score (Avg Sentiment - 3) -> Range -2 to +2
            const totalSentiment = dailyInsights.reduce((acc, curr) => acc + curr.clientSentiment, 0);
            const avgSentiment = totalSentiment / dailyInsights.length;
            row[channel.name] = Number((avgSentiment - 3).toFixed(1));
        }
      });
      return row;
    });
  }, [filteredInsights, dateRange]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Resolution rate over time by channel</h3>
      
      <div className="flex gap-3 mb-4">
        {channels.map(c => (
          <div key={c.name} className="flex items-center gap-1">
            <div className="w-4 h-2 rounded-[2px] opacity-80" style={{ backgroundColor: c.color }} />
            <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">{c.name}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e3e4" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(0,0,0,0.5)', fontSize: 12, fontFamily: 'Instrument Sans' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(0,0,0,0.5)', fontSize: 12, fontFamily: 'Instrument Sans' }}
              domain={[-2, 2]}
              ticks={[-2, 0, 2]}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #e3e3e4' }}
            />
            {channels.map(c => (
              <Line 
                key={c.name} 
                type="monotone" 
                dataKey={c.name} 
                stroke={c.color} 
                strokeWidth={2} 
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
