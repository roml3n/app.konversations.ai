import svgPaths from '../../imports/svg-451sirnluu';
import { useFilters } from '../../contexts/FilterContext';
import { useMemo } from 'react';
import { MOCK_TOPICS } from '../../lib/mockData';
import { DataTable, DataTableColumn } from '../ui/DataTable';

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

interface TopicHeatmapData {
  topicName: string;
  Freshdesk: number;
  Call: number;
  WhatsApp: number;
  Email: number;
  total: number;
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
        <DataTable<TopicHeatmapData>
          columns={[
            {
              header: 'Topic',
              width: '1fr',
              sortable: true,
              sortAccessor: 'topicName',
              render: (row) => (
                <span className="text-[12px] text-[#404141] font-['Instrument_Sans'] opacity-70">
                  {row.topicName}
                </span>
              ),
            },
            {
              header: 'Freshdesk',
              width: '1fr',
              sortable: true,
              sortAccessor: 'Freshdesk',
              align: 'center',
              render: (row) => (
                <div 
                  className="flex items-center justify-center -mx-[8px] -my-[8px] h-[51px]" 
                  style={{ backgroundColor: getCellColor(row.Freshdesk, maxValue) }}
                >
                  <span 
                    className="text-[12px] font-['Instrument_Sans']" 
                    style={{ color: getTextColor(row.Freshdesk, maxValue) }}
                  >
                    {row.Freshdesk}
                  </span>
                </div>
              ),
            },
            {
              header: 'Call',
              width: '1fr',
              sortable: true,
              sortAccessor: 'Call',
              align: 'center',
              render: (row) => (
                <div 
                  className="flex items-center justify-center -mx-[8px] -my-[8px] h-[51px]" 
                  style={{ backgroundColor: getCellColor(row.Call, maxValue) }}
                >
                  <span 
                    className="text-[12px] font-['Instrument_Sans']" 
                    style={{ color: getTextColor(row.Call, maxValue) }}
                  >
                    {row.Call}
                  </span>
                </div>
              ),
            },
            {
              header: 'WhatsApp',
              width: '1fr',
              sortable: true,
              sortAccessor: 'WhatsApp',
              align: 'center',
              render: (row) => (
                <div 
                  className="flex items-center justify-center -mx-[8px] -my-[8px] h-[51px]" 
                  style={{ backgroundColor: getCellColor(row.WhatsApp, maxValue) }}
                >
                  <span 
                    className="text-[12px] font-['Instrument_Sans']" 
                    style={{ color: getTextColor(row.WhatsApp, maxValue) }}
                  >
                    {row.WhatsApp}
                  </span>
                </div>
              ),
            },
            {
              header: 'Email',
              width: '1fr',
              sortable: true,
              sortAccessor: 'Email',
              align: 'center',
              render: (row) => (
                <div 
                  className="flex items-center justify-center -mx-[8px] -my-[8px] h-[51px]" 
                  style={{ backgroundColor: getCellColor(row.Email, maxValue) }}
                >
                  <span 
                    className="text-[12px] font-['Instrument_Sans']" 
                    style={{ color: getTextColor(row.Email, maxValue) }}
                  >
                    {row.Email}
                  </span>
                </div>
              ),
            },
            {
              header: 'Total',
              width: '1fr',
              sortable: true,
              sortAccessor: 'total',
              align: 'center',
              render: (row) => (
                <span className="text-[12px] font-semibold text-[#7a7d7d] font-['Instrument_Sans']">
                  {row.total}
                </span>
              ),
            },
          ]}
          data={data}
          animateRows={false}
          noBorders={true}
          pagination={true}
          defaultItemsPerPage={5}
        />
      </div>
    </div>
  );
}