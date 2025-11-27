import svgPaths from '../../imports/svg-451sirnluu';
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { useFilters } from '../../contexts/FilterContext';
import { Insight } from '../../lib/mockData';

const channelConfig = [
    { id: 'Instagram', name: 'Instagram', iconPath: svgPaths.p38dd2e80, iconColor: '#F239CA' },
    { id: 'Call', name: 'Call', iconPath: svgPaths.p160ae880, iconColor: '#5A5ACD' },
    { id: 'WhatsApp', name: 'WhatsApp', iconPath: svgPaths.p2a885700, iconColor: '#48BB79' },
    { id: 'Messenger', name: 'Messenger', iconPath: svgPaths.p2b8590c0, iconColor: '#3989F2' },
    { id: 'Jira', name: 'Jira', iconPath: svgPaths.p19805d80, iconColor: '#394EF2', isMultiPath: true },
    { id: 'Email', name: 'Email', iconPath: null, iconColor: '#EA4335' }, // Fallback
    { id: 'Freshdesk', name: 'Freshdesk', iconPath: null, iconColor: '#0F9D58' } // Fallback
];

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

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" viewBox="0 0 12 12">
        <path d={svgPaths.p2024300} fill="#E2C148" />
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
      <span className="text-[13px] text-[#7a7d7d] px-1 font-['Instrument_Sans']">1 - 5 of 12</span>
      <button className="w-4 h-4 flex items-center justify-center">
         <svg className="size-full" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p4376000} fill="#7A7D7D"/></svg>
      </button>
    </div>
  );
}

export function ChannelKPIs() {
  const { filteredInsights } = useFilters();

  const kpiData = useMemo(() => {
    const stats: Record<string, {
      count: number,
      resolved: number,
      csatSum: number,
      handleTimeSum: number
    }> = {};

    // Initialize from config to ensure consistent order or just valid channels
    channelConfig.forEach(c => {
       stats[c.id] = { count: 0, resolved: 0, csatSum: 0, handleTimeSum: 0 };
    });

    filteredInsights.forEach(insight => {
      if (!stats[insight.channel]) {
         // Initialize if not in config (e.g. dynamic channels)
         stats[insight.channel] = { count: 0, resolved: 0, csatSum: 0, handleTimeSum: 0 };
      }
      
      const s = stats[insight.channel];
      s.count++;
      if (insight.resolutionStatus === 'resolved') s.resolved++;
      s.csatSum += insight.clientSentiment;
      s.handleTimeSum += insight.handleTime;
    });

    return Object.entries(stats)
      .filter(([_, s]) => s.count > 0)
      .map(([channelId, s]) => {
        const config = channelConfig.find(c => c.id === channelId) || { 
          name: channelId, 
          iconPath: svgPaths.p160ae880, // Default icon
          iconColor: '#7A7D7D', 
          id: channelId 
        };

        return {
          id: config.id,
          name: config.name,
          iconPath: config.iconPath,
          iconColor: config.iconColor,
          isMultiPath: config.isMultiPath,
          response: Math.floor(s.count / 2), // Mock: assuming 50% had a good first response
          resolution: parseFloat((s.resolved / s.count).toFixed(2)),
          csat: parseFloat((s.csatSum / s.count).toFixed(2)),
          handleTime1: Math.floor(s.handleTimeSum / s.count),
          handleTime2: Math.floor(s.handleTimeSum / s.count), // Just duplicating for now as per design
        };
      }).slice(0, 5); // Limit to 5 for display

  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px] mb-4">Key performance indicators by channel</h3>
      
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-[140px_100px_1fr_100px_1fr_1fr] gap-x-1 mb-2">
          {/* Headers */}
          {[
            'Source', 'First response effectiveness', 'Resolution rate', 'CSAT prediction', 'Avg handle time(min)', 'Avg handle time(min)'
          ].map((h, i) => (
            <div key={i} className={`bg-[#f4f4f6] h-[42px] flex items-center px-2 ${i===0?'rounded-l-[12px]':''} ${i===5?'rounded-r-[12px]':''}`}>
              <div className="flex items-center justify-between w-full">
                <span className="text-[12px] font-semibold text-[#7a7d7d] font-['Instrument_Sans'] leading-[1.2]">{h}</span>
                <ChevronsUpDown />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          {kpiData.map((row, idx) => (
            <motion.div 
              key={row.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-[140px_100px_1fr_100px_1fr_1fr] h-[52px] items-center border-b border-transparent hover:bg-muted/20 transition-colors"
            >
              {/* Source */}
              <div className="px-2 flex items-center gap-2">
                <div className="w-[24px] h-[24px] bg-[#f2f3f3] rounded-md flex items-center justify-center">
                   <div className="w-[12px] h-[12px]">
                     <svg className="w-full h-full" viewBox="0 0 12 12" fill="none">
                       {row.id === 'Jira' ? (
                         <g>
                           <path d={svgPaths.p19805d80} fill={row.iconColor} />
                           <path d={svgPaths.p1f810300} fill={row.iconColor} />
                           <path d={svgPaths.p2bfe18d0} fill={row.iconColor} />
                         </g>
                       ) : (
                         <path d={row.iconPath || svgPaths.p160ae880} fill={row.iconColor} />
                       )}
                     </svg>
                   </div>
                </div>
                <span className="text-[12px] font-medium text-[#404141] font-['Instrument_Sans']">{row.name}</span>
              </div>

              {/* Response */}
              <div className="px-2 text-right text-[12px] text-[#7a7d7d] font-['Instrument_Sans']">
                {row.response}
              </div>

              {/* Resolution */}
              <div className="px-2 flex items-center gap-2">
                <span className="text-[12px] text-[#404141] font-['Instrument_Sans'] w-6">{row.resolution}</span>
                <div className="h-[19px] rounded-[4px] bg-[#48bb79]" style={{ width: `${row.resolution * 200}px`, maxWidth: '100%' }} />
              </div>

              {/* CSAT */}
              <div className="px-2">
                <div className="bg-[#fcf6e9] rounded-[6px] px-1 py-0.5 flex items-center gap-1 w-fit">
                  <StarIcon />
                  <span className="text-[12px] text-[#404141] font-['Instrument_Sans']">{row.csat}</span>
                </div>
              </div>

              {/* Handle Time 1 */}
              <div className="px-2 flex items-center gap-2">
                <span className="text-[12px] text-[#404141] font-['Instrument_Sans'] w-4">{row.handleTime1}</span>
                <div className="h-[19px] rounded-[4px] bg-[#9fdbee]" style={{ width: `${Math.min(100, row.handleTime1 * 2)}px` }} />
              </div>

              {/* Handle Time 2 */}
              <div className="px-2 flex items-center gap-2">
                <span className="text-[12px] text-[#404141] font-['Instrument_Sans'] w-4">{row.handleTime2}</span>
                <div className="h-[19px] rounded-[4px] bg-[#b059e9]" style={{ width: `${Math.min(100, row.handleTime2 * 2)}px` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <Pagination />
      </div>
    </div>
  );
}
