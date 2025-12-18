import { motion } from 'motion/react';
import { useFilters } from '../contexts/FilterContext';
import { MOCK_TOPICS } from '../lib/mockData';
import { useMemo } from 'react';
import svgPaths from '../imports/svg-uo2y67rl2s';
import { DataTable, DataTableColumn } from './ui/DataTable';

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

interface TopicData {
  name: string;
  conversations: number;
  resolution: number;
  prediction: number;
  handleTime: number;
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
          <DataTable<TopicData>
            columns={[
              {
                header: 'Primary topic',
                width: '216px',
                sortable: true,
                sortAccessor: 'name',
                render: (row) => (
                  <p className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px] truncate">
                    {row.name}
                  </p>
                ),
              },
              {
                header: 'Total conversations',
                width: '164px',
                sortable: true,
                sortAccessor: 'conversations',
                align: 'right',
                render: (row) => (
                  <p className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]">
                    {row.conversations}
                  </p>
                ),
              },
              {
                header: 'Resolution rate',
                width: 'minmax(0px, 1fr)',
                sortable: true,
                sortAccessor: 'resolution',
                render: (row) => (
                  <div className="flex items-center gap-[4px]">
                    <p className="font-['Instrument_Sans'] text-[#404141] text-[12px] w-[24px]">
                      {row.resolution}
                    </p>
                    <div
                      className="bg-[#48bb79] h-[19px] rounded-[4px]"
                      style={{ width: `${Math.max(5, row.resolution * 100)}%` }}
                    />
                  </div>
                ),
              },
              {
                header: 'CSAT prediction',
                width: '127px',
                sortable: true,
                sortAccessor: 'prediction',
                render: (row) => (
                  <div className="bg-[#fcf6e9] flex gap-[2px] items-center justify-center px-[4px] py-[2px] rounded-[6px] w-fit">
                    <StarIcon />
                    <p className="font-['Instrument_Sans'] text-[#404141] text-[12px]">
                      {row.prediction}
                    </p>
                  </div>
                ),
              },
              {
                header: 'Avg handle time(min)',
                width: 'minmax(0px, 1fr)',
                sortable: true,
                sortAccessor: 'handleTime',
                render: (row) => (
                  <div className="flex items-center gap-[4px]">
                    <p className="font-['Instrument_Sans'] text-[#404141] text-[12px] w-[16px]">
                      {row.handleTime}
                    </p>
                    <div
                      className="bg-[#9fdbee] h-[19px] rounded-[4px]"
                      style={{ width: `${Math.min(100, row.handleTime * 2)}%` }}
                    />
                  </div>
                ),
              },
            ]}
            data={topicsData}
            emptyMessage="No topics found for the selected filters."
            animateRows={true}
            animationDelay={0.7}
            pagination={true}
            defaultItemsPerPage={5}
            itemsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </div>
    </div>
  );
}