import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';

export function ResolutionStatusChart() {
  const { filteredInsights } = useFilters();

  const data = useMemo(() => {
    const stats: Record<string, { resolved: number; partially: number; unresolved: number; total: number }> = {};
    const channels = ['WhatsApp', 'Freshdesk', 'Call', 'Email']; // Focus on these for the chart

    channels.forEach(c => stats[c] = { resolved: 0, partially: 0, unresolved: 0, total: 0 });

    filteredInsights.forEach(insight => {
      if (stats[insight.channel]) {
        const s = stats[insight.channel];
        s.total++;
        if (insight.resolutionStatus === 'resolved') s.resolved++;
        else if (insight.resolutionStatus === 'partially_resolved') s.partially++;
        else s.unresolved++;
      }
    });

    return Object.entries(stats).map(([name, s]) => {
      const total = s.total || 1; // Avoid division by zero
      return {
        name,
        resolved: Math.round((s.resolved / total) * 100),
        partially: Math.round((s.partially / total) * 100),
        unresolved: Math.round((s.unresolved / total) * 100),
      };
    });
  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Resolution status by channel</h3>
      
      <div className="flex gap-3 mb-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#67CCE8] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Resolved</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#FAE098] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Partially resolved</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 rounded-[2px] bg-[#5A5ACD] opacity-80" />
          <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">Unresolved</span>
        </div>
      </div>

      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart layout="vertical" data={data} barSize={30}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e3e3e4" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              tick={{ fill: 'rgba(0,0,0,0.7)', fontSize: 12, fontFamily: 'Instrument Sans' }} 
              axisLine={false} 
              tickLine={false}
              width={80}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: '1px solid #e3e3e4' }}
              cursor={{fill: 'transparent'}}
            />
            <Bar dataKey="resolved" stackId="a" fill="#67CCE8" radius={[4, 0, 0, 4]} />
            <Bar dataKey="partially" stackId="a" fill="#FAE098" />
            <Bar dataKey="unresolved" stackId="a" fill="#5A5ACD" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Custom X Axis Labels */}
      <div className="flex justify-between pl-[80px] text-[12px] text-[#7a7d7d] font-['Instrument_Sans'] mt-[-10px]">
        <span>0%</span>
        <span>20%</span>
        <span>40%</span>
        <span>60%</span>
        <span>80%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
