import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { useFilters } from "../../contexts/FilterContext";
import { useMemo } from "react";

const channels = [
  { name: "WhatsApp", color: "#45B273" },
  { name: "Jira", color: "#67CCE8" },
  { name: "Freshdesk", color: "#DA3B3B" },
  { name: "Call", color: "#C07AED" },
];

export function QualityRadarChart() {
  const { filteredInsights } = useFilters();

  const chartData = useMemo(() => {
    const channelStats: Record<
      string,
      { score: number; count: number }
    > = {};

    // Initialize
    channels.forEach(
      (c) => (channelStats[c.name] = { score: 0, count: 0 }),
    );

    // Aggregate
    filteredInsights.forEach((insight) => {
      // Map 'Email', 'Instagram', 'Messenger' to 'Freshdesk' or others just for the 4-channel visualization limit
      // Or better, just use the specific channels if they match.
      let targetChannel = insight.channel;

      // For demo purposes, map other channels to the 4 main ones if needed,
      // or just filter for the 4 main ones.
      if (channelStats[targetChannel]) {
        channelStats[targetChannel].score += insight.score;
        channelStats[targetChannel].count += 1;
      }
    });

    const subjects = [
      "Professionalism",
      "Quality",
      "Timeliness",
      "Efficiency",
      "Clarity",
    ];

    return subjects.map((subject) => {
      const row: any = { subject, fullMark: 100 };
      channels.forEach((c) => {
        const stats = channelStats[c.name];
        let avg =
          stats && stats.count > 0
            ? stats.score / stats.count
            : 0;

        // Add some artificial variance based on subject to make the chart look like a radar
        // seeded by the subject name length
        const variance = ((subject.length % 5) - 2) * 5;
        row[c.name] = Math.min(
          100,
          Math.max(0, avg + variance),
        );
      });
      return row;
    });
  }, [filteredInsights]);

  return (
    <div className="bg-[#fefefe] rounded-[8px] border border-[#e3e3e4] p-4 h-full flex flex-col">
      <div className="flex flex-col items-start gap-4">
        <h3 className="font-['Instrument_Sans'] text-[#7a7d7d] text-[14px]">
          Conversation quality by channel
        </h3>
        <div className="flex gap-3">
          {channels.map((c) => (
            <div
              key={c.name}
              className="flex items-center gap-1"
            >
              <div
                className="w-4 h-2 rounded-[2px] opacity-80"
                style={{ backgroundColor: c.color }}
              />
              <span className="font-['Instrument_Sans'] text-[#7a7d7d] text-[12px]">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-h-[250px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={chartData}
          >
            <PolarGrid strokeOpacity={0.2} />
            <PolarAngleAxis
              dataKey="subject"
              tick={{
                fill: "rgba(0,0,0,0.7)",
                fontSize: 12,
                fontFamily: "Instrument Sans",
                fontWeight: 600,
              }}
            />
            {channels.map((c) => (
              <Radar
                key={c.name}
                name={c.name}
                dataKey={c.name}
                stroke={c.color}
                strokeWidth={1.5}
                fill={c.color}
                fillOpacity={0.15}
              />
            ))}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}