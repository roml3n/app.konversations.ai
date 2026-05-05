import { CircleHelp, MonitorUp } from "lucide-react";
import { useState, useEffect } from "react";
import { MetricCard } from "./MetricCard";
import { HourlyCallVolumeChart } from "./HourlyCallVolumeChart";
import { QualityScoreTrendChart } from "./QualityScoreTrendChart";
import { QueueStatusTable } from "./QueueStatusTable";

export function LiveMonitoring() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentDate = currentTime.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    },
  );

  return (
    <div className="flex flex-col gap-6 pb-6">
      {/* Header with date/time and view fullscreen button */}
      <div className="flex items-center justify-between">
        <p
          className="basis-0 grow min-w-0 text-[#404141] font-semibold text-lg tracking-[0.09px]"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          Live monitoring
        </p>
        <div className="basis-0 flex gap-3 grow items-center justify-center min-w-0">
          <p
            className="text-[#99a1af] text-lg tracking-[0.09px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {currentDate}
          </p>
          <p
            className="text-[#101828] text-lg tracking-[0.09px]"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {formattedTime}
          </p>
        </div>
        <div className="basis-0 flex grow items-end justify-end min-w-0">
          <button className="relative bg-gradient-to-b from-[#ffffff] to-[#f1f1f1] flex items-center gap-1 px-[10px] py-2 rounded-lg border border-[#d1d5dc] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)] hover:opacity-90 transition-opacity">
            <MonitorUp className="w-3.5 h-3.5 text-[#6A7282]" />
            <span
              className="text-[#364153] text-xs tracking-[0.06px]"
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              View Fullscreen
            </span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <MetricCard
          value="127"
          label="Calls today"
          borderColor="#00a63e"
        />
        <MetricCard
          value="11"
          label="Active calls"
          borderColor="#5a5acd"
        />
        <MetricCard
          value="4"
          label="Calls waiting"
          borderColor="#e2c148"
        />
        <MetricCard
          value="82.2"
          label="Average quality score"
          borderColor="#f54a00"
        />
        <MetricCard
          value="12"
          label="Agents online"
          borderColor="#00a63e"
        />
        <MetricCard
          value="78%"
          label="Occupancy (target 75-85%)"
          borderColor="#5a5acd"
        />
        <MetricCard
          value="2"
          label="Active alerts"
          borderColor="#e2c148"
        />
        <MetricCard
          value="0.78/1.0"
          label="Average sentiment"
          borderColor="#f54a00"
        />
      </div>

      {/* Charts Row */}
      <div className="bg-[#f2f3f3] rounded-[12px] p-[16px] flex flex-col gap-[16px]">
        <div className="grid grid-cols-2 h-[300px] gap-[16px]">
          <HourlyCallVolumeChart />
          <QualityScoreTrendChart />
        </div>

        {/* Queue Status Table */}
        <QueueStatusTable />
      </div>
    </div>
  );
}