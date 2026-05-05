import { QualityRadarChart } from './channel-performance/QualityRadarChart';
import { ChannelKPIs } from './channel-performance/ChannelKPIs';
import { ResolutionStatusChart } from './channel-performance/ResolutionStatusChart';
import { ResolutionTrendsChart } from './channel-performance/ResolutionTrendsChart';
import { ResolutionComplexityChart } from './channel-performance/ResolutionComplexityChart';
import { SentimentChart } from './channel-performance/SentimentChart';
import { TopicsHeatmap } from './channel-performance/TopicsHeatmap';

export function ChannelPerformance() {
  return (
    <div className="flex flex-col gap-4 pb-8">
      {/* Top Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-4">
        <QualityRadarChart />
        <ChannelKPIs />
      </div>

      {/* Issue Resolution Section */}
      <div className="bg-[#f2f3f3] rounded-[12px] p-4">
        <h3 className="font-['Instrument_Sans'] font-semibold text-[#5e6060] text-[13px] mb-4">Issue resolution</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <ResolutionStatusChart />
          <ResolutionTrendsChart />
          <ResolutionComplexityChart />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-4">
        <SentimentChart />
        <TopicsHeatmap />
      </div>
    </div>
  );
}
