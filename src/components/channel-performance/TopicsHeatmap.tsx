import svgPaths from '../../imports/svg-451sirnluu';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';
import { MOCK_TOPICS } from '../../lib/mockData';

function ChevronsUpDown() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p17a0fc80} stroke="#A0A3A4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3042540} stroke="#A0A3A4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function Pagination() {
    return (
      <div className="flex items-center gap-1 bg-[#f2f3f3] rounded-[8px] p-1">
        <button className="w-4 h-4 flex items-center justify-center opacity-20">
           <svg className="size-full" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p4d7d300} fill="#7A7D7D"/></svg>
        </button>
        <span className="text-[13px] text-[#7a7d7d] px-1 font-['Instrument_Sans']">1 - 5 of 10</span>
        <button className="w-4 h-4 flex items-center justify-center">
           <svg className="size-full" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p4376000} fill="#7A7D7D"/></svg>
        </button>
      </div>
    );
}

function getCellColor(value: number, max: number) {
    // Simple heatmap logic based on relative max
    const ratio = max > 0 ? value / max : 0;
    
    if (ratio >= 0.8) return '#58aec6';
    if (ratio >= 0.6) return '#9fdbee'; 
    if (ratio >= 0.3) return '#d5eef7';
    if (ratio > 0) return '#eef8fc';
    return '#ffffff';
}

function getTextColor(value: number, max: number) {
    const ratio = max > 0 ? value / max : 0;
    if (ratio >= 0.6) return '#fefefe';
    return '#7a7d7d';
}

export function TopicsHeatmap() {
  const { filteredInsights } = useFilters();

  const data = useMemo(() => {
    const topicStats: Record<string, { 
        topicName: string; 
        Freshdesk: number; 
        Call: number; 
        WhatsApp: number; 
        Email: number; 
        total: number 
    }> = {};

    // Initialize all known topics
    MOCK_TOPICS.forEach(t => {
        topicStats[t.id] = { 
            topicName: t.name, 
            Freshdesk: 0, 
            Call: 0, 
            WhatsApp: 0, 
            Email: 0, 
            total: 0 
        };
    });

    filteredInsights.forEach(insight => {
        insight.topicIds.forEach(topicId => {
            if (topicStats[topicId]) {
                const s = topicStats[topicId];
                const ch = insight.channel as keyof typeof s;
                if (s[ch] !== undefined) {
                     // @ts-ignore
                    s[ch]++;
                } else {
                    // If channel not in our specific columns, maybe ignore or add to total
                }
                s.total++;
            }
        });
    });

    // Sort by total descending and take top 5
    return Object.values(topicStats)
        .sort((a, b) => b.total - a.total)
        .slice(0, 5);

  }, [filteredInsights]);

  // Calculate max value for heatmap scaling
  const maxValue = useMemo(() => {
      let max = 0;
      data.forEach(row => {
          max = Math.max(max, row.Freshdesk, row.Call, row.WhatsApp, row.Email);
      });
      return max;
  }, [data]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Top 10 conversations topics (heatmap)</h3>
      
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-[140px_1fr_1fr_1fr_1fr_100px] gap-x-px mb-0 bg-white">
           {['Topic', 'Freshdesk', 'Call', 'WhatsApp', 'Email', 'Total'].map((h, i) => (
             <div key={i} className={`bg-[#f4f4f6] h-[42px] flex items-center px-2 ${i===0?'rounded-l-[12px]':''} ${i===5?'rounded-r-[12px]':''}`}>
               <div className="flex items-center justify-between w-full">
                 <span className="text-[13px] font-semibold text-[#7a7d7d] font-['Instrument_Sans'] leading-[18px]">{h}</span>
                 <ChevronsUpDown />
               </div>
             </div>
           ))}
        </div>
        
        <div className="flex flex-col gap-px bg-white">
            {data.map((row, idx) => (
                <div key={idx} className="grid grid-cols-[140px_1fr_1fr_1fr_1fr_100px] gap-x-px h-[51px]">
                    {/* Topic */}
                    <div className="bg-white flex items-center px-2">
                        <span className="text-[12px] text-[#404141] font-['Instrument_Sans'] opacity-70">{row.topicName}</span>
                    </div>
                    
                    {/* Freshdesk */}
                    <div className="flex items-center justify-center" style={{ backgroundColor: getCellColor(row.Freshdesk, maxValue) }}>
                        <span className="text-[12px] font-['Instrument_Sans']" style={{ color: getTextColor(row.Freshdesk, maxValue) }}>{row.Freshdesk}</span>
                    </div>

                    {/* Call */}
                    <div className="flex items-center justify-center" style={{ backgroundColor: getCellColor(row.Call, maxValue) }}>
                        <span className="text-[12px] font-['Instrument_Sans']" style={{ color: getTextColor(row.Call, maxValue) }}>{row.Call}</span>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center justify-center" style={{ backgroundColor: getCellColor(row.WhatsApp, maxValue) }}>
                        <span className="text-[12px] font-['Instrument_Sans']" style={{ color: getTextColor(row.WhatsApp, maxValue) }}>{row.WhatsApp}</span>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-center" style={{ backgroundColor: getCellColor(row.Email, maxValue) }}>
                         <span className="text-[12px] font-['Instrument_Sans']" style={{ color: getTextColor(row.Email, maxValue) }}>{row.Email}</span>
                    </div>

                    {/* Total */}
                    <div className="bg-white flex items-center justify-center">
                        <span className="text-[12px] font-semibold text-[#7a7d7d] font-['Instrument_Sans']">{row.total}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Pagination />
      </div>
    </div>
  );
}
