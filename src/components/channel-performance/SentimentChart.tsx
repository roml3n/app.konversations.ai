import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';

export function SentimentChart() {
  const { filteredInsights } = useFilters();

  const data = useMemo(() => {
    const stats: Record<string, { positive: number; neutral: number; negative: number }> = {};
    const channels = ['Call', 'WhatsApp', 'Email', 'Freshdesk']; // Preferred order

    channels.forEach(c => stats[c] = { positive: 0, neutral: 0, negative: 0 });

    filteredInsights.forEach(insight => {
      if (stats[insight.channel]) {
        stats[insight.channel][insight.sentiment]++;
      }
    });

    return channels.map(name => ({
      name,
      positive: stats[name].positive,
      neutral: stats[name].neutral,
      negative: stats[name].negative
    }));
  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Sentiment by channel</h3>
      
      <div className="flex gap-3 mb-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#45B273] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Positive</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#67CCE8] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Neutral</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#DA3B3B] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Negative</span>
        </div>
      </div>

      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0} barCategoryGap="20%">
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e3e4" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12, fontFamily: 'Instrument Sans' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12, fontFamily: 'Instrument Sans' }}
              width={20}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #e3e3e4' }}
              cursor={{fill: 'transparent'}}
            />
            <Bar dataKey="positive" fill="#45B273" radius={[2, 2, 0, 0]} />
            <Bar dataKey="neutral" fill="#67CCE8" radius={[2, 2, 0, 0]} />
            <Bar dataKey="negative" fill="#DA3B3B" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
