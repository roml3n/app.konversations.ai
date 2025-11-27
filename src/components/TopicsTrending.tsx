import { motion } from 'motion/react';
import { useFilters } from '../contexts/FilterContext';
import { MOCK_TOPICS } from '../lib/mockData';
import { useMemo } from 'react';
import svgPaths from '../imports/svg-uo2y67rl2s';

function ChevronsUpDown() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-left" opacity="0.2">
          <path d={svgPaths.p4d7d300} fill="#7A7D7D" />
        </g>
      </svg>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-right">
          <path d={svgPaths.p4376000} fill="#7A7D7D" />
        </g>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <path d={svgPaths.p2024300} fill="#E2C148" />
      </svg>
    </div>
  );
}

export function TopicsTrending() {
  const { filteredInsights } = useFilters();

  const topicsData = useMemo(() => {
    // Map to store aggregates
    const topicStats = new Map<string, {
      conversations: number;
      positive: number;
      totalScore: number;
    }>();

    filteredInsights.forEach(insight => {
      insight.topicIds.forEach(topicId => {
        if (!topicStats.has(topicId)) {
          topicStats.set(topicId, { conversations: 0, positive: 0, totalScore: 0 });
        }
        const stats = topicStats.get(topicId)!;
        stats.conversations += 1;
        if (insight.sentiment === 'positive') stats.positive += 1;
        stats.totalScore += insight.score;
      });
    });

    // Convert to array and sort by conversations
    const result = Array.from(topicStats.entries()).map(([id, stats]) => {
      const topicName = MOCK_TOPICS.find(t => t.id === id)?.name || 'Unknown';
      const handleTime = 5 + (id.length % 10) * 5; 

      return {
        name: topicName,
        conversations: stats.conversations,
        resolution: parseFloat((stats.positive / stats.conversations).toFixed(2)),
        prediction: parseFloat((stats.totalScore / stats.conversations / 100).toFixed(2)),
        handleTime: handleTime
      };
    });

    return result.sort((a, b) => b.conversations - a.conversations).slice(0, 5);
  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] relative rounded-[8px] w-full border border-[#e3e3e4]">
      <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full">
          Top trending topics
        </p>
        
        <div className="w-full flex flex-col gap-1">
          {/* Header */}
          <div className="grid grid-cols-[216px_164px_minmax(0px,_1fr)_127px_minmax(0px,_1fr)] w-full">
             {['Primary topic', 'Total conversations', 'Resolution rate', 'CSAT prediction', 'Avg handle time(min)'].map((header, idx) => (
               <div key={header} className={`bg-[#f4f4f6] h-[34px] flex items-center px-[8px] ${idx === 0 ? 'rounded-l-[12px]' : ''} ${idx === 4 ? 'rounded-r-[12px]' : ''}`}>
                 <div className="flex items-center justify-between w-full">
                   <p className="font-['Instrument_Sans'] font-semibold text-[#7a7d7d] text-[13px] leading-[18px]">{header}</p>
                   <ChevronsUpDown />
                 </div>
               </div>
             ))}
          </div>

          {/* Rows */}
          <div className="w-full">
            {topicsData.length === 0 ? (
               <div className="py-8 text-center text-muted-foreground text-sm">No topics found for the selected filters.</div>
            ) : (
              topicsData.map((topic, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.05 }}
                  className="grid grid-cols-[216px_164px_minmax(0px,_1fr)_127px_minmax(0px,_1fr)] h-[51px] items-center border-b border-transparent hover:bg-muted/30 transition-colors"
                >
                  {/* Primary Topic */}
                  <div className="px-[8px]">
                    <p className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px] truncate">{topic.name}</p>
                  </div>

                  {/* Total Conversations */}
                  <div className="px-[8px] flex justify-end">
                     <p className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]">{topic.conversations}</p>
                  </div>

                  {/* Resolution Rate */}
                  <div className="px-[8px] flex items-center gap-[4px]">
                    <p className="font-['Instrument_Sans'] text-[#404141] text-[12px] w-[24px]">{topic.resolution}</p>
                    <div className="bg-[#48bb79] h-[19px] rounded-[4px]" style={{ width: `${Math.max(5, topic.resolution * 100)}%` }} />
                  </div>

                  {/* CSAT Prediction */}
                  <div className="px-[8px] flex items-center gap-[14px]">
                    <div className="bg-[#fcf6e9] flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px]">
                       <StarIcon />
                       <p className="font-['Instrument_Sans'] text-[#404141] text-[12px]">{topic.prediction}</p>
                    </div>
                  </div>

                  {/* Avg Handle Time */}
                  <div className="px-[8px] flex items-center gap-[4px]">
                    <p className="font-['Instrument_Sans'] text-[#404141] text-[12px] w-[16px]">{topic.handleTime}</p>
                    <div className="bg-[#9fdbee] h-[19px] rounded-[4px]" style={{ width: `${Math.min(100, topic.handleTime * 2)}%` }} />
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-4">
             <div className="bg-[#f2f3f3] flex gap-[4px] items-center p-[4px] rounded-[8px]">
               <button className="p-1 hover:bg-white rounded transition-colors"><CaretLeft /></button>
               <p className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]">
                 1 - {topicsData.length} of {MOCK_TOPICS.length}
               </p>
               <button className="p-1 hover:bg-white rounded transition-colors"><CaretRight /></button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}