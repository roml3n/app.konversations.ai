import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';

const channelsConfig = [
  { name: 'WhatsApp', color: '#45B273' },
  { name: 'Jira', color: '#67CCE8' },
  { name: 'Freshdesk', color: '#DA3B3B' },
  { name: 'Call', color: '#C07AED' },
];

export function ResolutionComplexityChart() {
  const { filteredInsights } = useFilters();

  const chartData = useMemo(() => {
    const stats: Record<string, { totalComplexity: number; count: number; resolvedCount: number }> = {};
    
    // Init
    channelsConfig.forEach(c => {
        stats[c.name] = { totalComplexity: 0, count: 0, resolvedCount: 0 };
    });

    filteredInsights.forEach(insight => {
        if (stats[insight.channel]) {
            const s = stats[insight.channel];
            s.totalComplexity += insight.complexity;
            s.count += 1;
            if (insight.resolutionStatus === 'resolved') {
                s.resolvedCount += 1;
            }
        }
    });

    return channelsConfig.map(c => {
        const s = stats[c.name];
        const count = s.count || 1;
        return {
            name: c.name,
            x: Number((s.totalComplexity / count).toFixed(1)), // Avg Complexity
            y: Number((s.resolvedCount / count).toFixed(2)), // Resolution Rate
            z: s.count, // Volume (bubble size)
            color: c.color
        };
    });
  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Resolution rate vs interaction complexity</h3>
      
      <div className="flex gap-3 mb-4">
        {channelsConfig.map(c => (
          <div key={c.name} className="flex items-center gap-1">
            <div className="w-4 h-2 rounded-[2px] opacity-80" style={{ backgroundColor: c.color }} />
            <span className="text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">{c.name}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e3e3e4" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="complexity" 
              axisLine={true}
              tickLine={false}
              tick={{ fill: 'rgba(0,0,0,0.5)', fontSize: 12, fontFamily: 'Instrument Sans' }}
              domain={[0, 10]} 
              ticks={[0, 2.5, 5, 7.5, 10]}
              stroke="#B7B7BC"
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="resolution" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'rgba(0,0,0,0.5)', fontSize: 12, fontFamily: 'Instrument Sans' }}
              domain={[0, 1]}
              ticks={[0, 0.25, 0.5, 0.75, 1]}
            />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ payload }) => {
              if (payload && payload.length) {
                const { name, x, y, z } = payload[0].payload;
                return (
                  <div className="bg-white p-2 border border-[#e3e3e4] rounded shadow-sm">
                    <p className="text-sm font-semibold">{name}</p>
                    <p className="text-xs text-gray-500">Avg Complexity: {x}</p>
                    <p className="text-xs text-gray-500">Resolution Rate: {(y * 100).toFixed(0)}%</p>
                    <p className="text-xs text-gray-500">Volume: {z}</p>
                  </div>
                );
              }
              return null;
            }}/>
            <Scatter name="Channels" data={chartData} fill="#8884d8">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
