import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFilter,
  faFileExport,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Mock data for area chart
const usageData = [
  { date: "Dec 7", value: 5 },
  { date: "Dec 9", value: 8 },
  { date: "Dec 11", value: 12 },
  { date: "Dec 14", value: 18 },
  { date: "Dec 16", value: 22 },
  { date: "Dec 18", value: 24 },
  { date: "Dec 21", value: 23 },
  { date: "Dec 23", value: 20 },
  { date: "Dec 25", value: 18 },
  { date: "Dec 27", value: 12 },
  { date: "Dec 29", value: 9 },
  { date: "Jan 1", value: 7 },
  { date: "Jan 3", value: 6 },
];

// Mock data for bar chart
const servicesData = [
  { name: "Transcription", value: 25, color: "#afd9ed" },
  { name: "Transcription", value: 15, color: "#b1b1c2" },
  { name: "Transcription", value: 18, color: "#7e84d2" },
  { name: "Transcription", value: 12, color: "#92d0a8" },
  { name: "Transcription", value: 12, color: "#92d0a8" },
  { name: "Translation", value: 12, color: "#92d0a8" },
  { name: "Diarization", value: 12, color: "#92d0a8" },
  { name: "Insights", value: 12, color: "#92d0a8" },
];

export function BillingUsage() {
  const [dateRange, setDateRange] = useState("1 - 10 of 273");

  return (
    <div className="flex flex-col gap-6 w-full pt-8 pb-16 px-[30px]">
      {/* Filter Bar */}
      

      {/* Credits Usage Card */}
      <div className="rounded-lg border border-[#e3e8f0] px-[15px] py-4">
        <div className="flex flex-col gap-6">
          <h3
            className="text-[#121212]"
            style={{
              fontSize: "var(--text-base)",
              fontWeight: "var(--font-weight-semibold)",
              lineHeight: "1",
            }}
          >
            Credits Usage
          </h3>

          {/* Usage Stats */}
          <div className="flex flex-col gap-2 w-full">
            <p
              className="text-[#121212]"
              style={{
                fontSize: "18px",
                fontWeight: "var(--font-weight-medium)",
                lineHeight: "1.2",
              }}
            >
              345
            </p>

            {/* Progress Bar */}
            <div className="bg-[#e2f5fc] h-2 rounded-full overflow-hidden w-full">
              <div
                className="bg-[#219ac3] h-full rounded-full"
                style={{ width: "28.75%" }}
              />
            </div>

            {/* Credits Remaining Text */}
            <p
              className="text-[#121212] opacity-50"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-normal)",
                lineHeight: "1.2",
              }}
            >
              855 of 1200 credits remaining
            </p>
          </div>
        </div>
      </div>

      {/* Cost Summary with Chart */}
      <div className="bg-[#f2f3f3] rounded-md border border-[#fefefe] p-4 flex flex-col gap-6">
        {/* Cost Header */}
        <div className="flex flex-col gap-1">
          <p
            className="text-[#7a7d7d]"
            style={{
              fontSize: "var(--text-sm)",
              fontWeight: "var(--font-weight-normal)",
              lineHeight: "1.2",
            }}
          >
            Your total cost (Jan 1 - 6, 2025)
          </p>
          <div className="flex items-center gap-2">
            <span
              className="text-[#121212]"
              style={{
                fontSize: "24px",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "1",
              }}
            >
              $53.89
            </span>
            <div className="flex items-center gap-1 bg-[#d7f6de] px-2 py-1 rounded-md">
              <FontAwesomeIcon
                icon={faArrowDown}
                className="w-2.5 h-2.5 text-[#29a65b]"
              />
              <span
                className="text-[#29a65b]"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-medium)",
                }}
              >
                22%
              </span>
              <span
                className="text-[#29a65b] opacity-50"
                style={{
                  fontSize: "var(--text-xs)",
                  fontWeight: "var(--font-weight-normal)",
                }}
              >
                vs last 7 days
              </span>
            </div>
          </div>
        </div>

        {/* Area Chart */}
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={usageData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#afd9ed" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#afd9ed" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="5 5"
                stroke="#e3e8f0"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#121212",
                  opacity: 0.5,
                  fontSize: 12,
                  fontWeight: 500,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#121212",
                  opacity: 0.5,
                  fontSize: 12,
                  fontWeight: 500,
                }}
                ticks={[0, 5, 10, 15, 20, 25]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e3e8f0",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#5fb4d9"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Services Bar Chart */}
      <div className="flex flex-col gap-4">
        <h3
          className="text-[#121212]"
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: "var(--font-weight-medium)",
            lineHeight: "1.2",
          }}
        >
          Top services
        </h3>

        <div className="w-full h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={servicesData}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="5 5"
                stroke="#e3e8f0"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#121212",
                  opacity: 0.5,
                  fontSize: 12,
                  fontWeight: 400,
                }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fill: "#121212",
                  opacity: 0.5,
                  fontSize: 12,
                  fontWeight: 500,
                }}
                ticks={[0, 10, 25]}
                domain={[0, 25]}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e3e8f0",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                formatter={(value) => [`$${value}`, "Cost"]}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={65}>
                {servicesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}