import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faClock,
  faCircleNotch,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

// Mock data for the chart
const chartData = [
  { day: "Mon", value: 35, id: "mon" },
  { day: "Tue", value: 30, id: "tue" },
  { day: "Wed", value: 38, id: "wed" },
  { day: "Thu", value: 25, id: "thu" },
  { day: "Fri", value: 40, id: "fri" },
  { day: "Sat", value: 20, id: "sat" },
  { day: "Sun", value: 15, id: "sun" },
];

interface Job {
  id: string;
  jobNumber: string;
  files: number;
  time: string;
  status: "processing" | "processed";
}

const queueJobs: Job[] = [
  { id: "1", jobNumber: "101-72336599", files: 12, time: "3m ago", status: "processing" },
  { id: "2", jobNumber: "101-72336599", files: 12, time: "12m ago", status: "processing" },
  { id: "3", jobNumber: "101-72336599", files: 12, time: "1h ago", status: "processing" },
];

const processedJobs: Job[] = [
  { id: "4", jobNumber: "101-72336599", files: 12, time: "3d ago", status: "processed" },
  { id: "5", jobNumber: "101-72336599", files: 12, time: "12d ago", status: "processed" },
  { id: "6", jobNumber: "101-72336599", files: 12, time: "1mo ago", status: "processed" },
  { id: "7", jobNumber: "101-72336599", files: 12, time: "1mo ago", status: "processed" },
  { id: "8", jobNumber: "101-72336599", files: 12, time: "1mo ago", status: "processed" },
];

type TimeFilter = "Day" | "Week" | "Month";

export function SystemStatus() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("Day");

  return (
    <div className="flex flex-col gap-6 w-full pt-8 pb-16 px-[30px]">
      {/* Chart Container */}
      <div className="bg-[#fefefe] rounded-lg border border-[#e3e3e4]">
        <div className="flex flex-col gap-6 p-3">
          {/* Chart Header */}
          <div className="flex items-center justify-between w-full">
            <p
              className="text-[#7a7d7d]"
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: "var(--font-weight-semibold)",
                lineHeight: "1.2",
              }}
            >
              System activity
            </p>

            {/* Time Filter Buttons */}
            <div className="flex gap-0.5 items-center p-1 bg-[#ededf0] rounded">
              {(["Day", "Week", "Month"] as TimeFilter[]).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`px-2 py-1 rounded-sm transition-colors ${
                    timeFilter === filter
                      ? "bg-white text-[#575979]"
                      : "bg-transparent text-[#575979]"
                  }`}
                  style={{
                    fontSize: "13px",
                    fontWeight: timeFilter === filter ? "var(--font-weight-semibold)" : "var(--font-weight-normal)",
                    lineHeight: "18px",
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Body */}
          <div className="bg-[#fefefe] h-[158px] w-full overflow-hidden">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#BCE5F3" stopOpacity={1} />
                    <stop offset="100%" stopColor="#F4FAFD" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="0"
                  stroke="#f0f0f0"
                  vertical={false}
                />
                <XAxis
                  dataKey="day"
                  axisLine={{ stroke: "#71717A", strokeOpacity: 0.5 }}
                  tickLine={false}
                  tick={{
                    fill: "#030712",
                    opacity: 0.5,
                    fontSize: 12,
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  ticks={[0, 20, 40]}
                  tick={{
                    fill: "#030712",
                    opacity: 0.5,
                    fontSize: 12,
                  }}
                  dx={-5}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#62C3DD"
                  strokeWidth={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div className="flex gap-6 w-full">
        {/* Jobs In Queue */}
        <div className="flex-1 bg-[#fefefe] rounded-lg border border-[#e3e3e4]">
          <div className="flex flex-col gap-4 p-3">
            {/* Queue Header */}
            <div className="flex gap-1 h-6 items-center w-full">
              <p
                className="text-[#7a7d7d]"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  lineHeight: "1.2",
                }}
              >
                Jobs In Queue
              </p>
              <div className="bg-[#f2f3f3] flex items-center justify-center px-2 py-1 rounded-[9px] border border-[rgba(0,0,0,0.05)] h-6 min-w-6">
                <p
                  className="text-[#575979]"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-normal)",
                    lineHeight: "1.2",
                  }}
                >
                  {queueJobs.length}
                </p>
              </div>
            </div>

            {/* Queue Items */}
            <div className="flex flex-col gap-3 w-full">
              {queueJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between w-full"
                >
                  {/* Job Info */}
                  <div className="flex flex-col gap-0.5 items-start justify-center">
                    <p
                      className="text-[#404141] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        lineHeight: "1.2",
                      }}
                    >
                      {job.jobNumber}
                    </p>
                    <div className="flex gap-3 items-center">
                      {/* Files */}
                      <div className="flex gap-0.5 items-center">
                        <FontAwesomeIcon
                          icon={faFile}
                          className="w-3 h-3 text-[#CDCECF]"
                        />
                        <p
                          className="text-[#a0a3a4]"
                          style={{
                            fontSize: "var(--text-xs)",
                            fontWeight: "var(--font-weight-normal)",
                            lineHeight: "1.2",
                          }}
                        >
                          {job.files} files
                        </p>
                      </div>
                      {/* Time */}
                      <div className="flex gap-0.5 items-center">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-3 h-3 text-[#CDCECF]"
                        />
                        <p
                          className="text-[#a0a3a4] italic"
                          style={{
                            fontSize: "var(--text-xs)",
                            fontWeight: "var(--font-weight-normal)",
                            lineHeight: "1.2",
                          }}
                        >
                          {job.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="bg-[#ebf7fb] flex gap-0.5 items-center px-1 py-0.5 rounded-md">
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="w-3 h-3 text-[#58aec6] animate-spin"
                    />
                    <p
                      className="text-[#58aec6]"
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-weight-normal)",
                        lineHeight: "1.2",
                      }}
                    >
                      Processing...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Processed Jobs */}
        <div className="flex-1 bg-[#fefefe] rounded-lg border border-[#e3e3e4]">
          <div className="flex flex-col gap-4 p-3">
            {/* Processed Header */}
            <div className="flex gap-1 h-6 items-center w-full">
              <p
                className="text-[#7a7d7d]"
                style={{
                  fontSize: "var(--text-sm)",
                  fontWeight: "var(--font-weight-semibold)",
                  lineHeight: "1.2",
                }}
              >
                Processed Jobs
              </p>
              <div className="bg-[#f2f3f3] flex items-center justify-center px-2 py-1 rounded-[9px] border border-[rgba(0,0,0,0.05)] h-6 min-w-6">
                <p
                  className="text-[#575979]"
                  style={{
                    fontSize: "var(--text-sm)",
                    fontWeight: "var(--font-weight-normal)",
                    lineHeight: "1.2",
                  }}
                >
                  {processedJobs.length}
                </p>
              </div>
            </div>

            {/* Processed Items */}
            <div className="flex flex-col gap-3 w-full">
              {processedJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex items-center justify-between w-full"
                >
                  {/* Job Info */}
                  <div className="flex flex-col gap-0.5 items-start justify-center">
                    <p
                      className="text-[#404141] overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{
                        fontSize: "var(--text-sm)",
                        fontWeight: "var(--font-weight-normal)",
                        lineHeight: "1.2",
                      }}
                    >
                      {job.jobNumber}
                    </p>
                    <div className="flex gap-3 items-center">
                      {/* Files */}
                      <div className="flex gap-0.5 items-center">
                        <FontAwesomeIcon
                          icon={faFile}
                          className="w-3 h-3 text-[#CDCECF]"
                        />
                        <p
                          className="text-[#a0a3a4]"
                          style={{
                            fontSize: "var(--text-xs)",
                            fontWeight: "var(--font-weight-normal)",
                            lineHeight: "1.2",
                          }}
                        >
                          {job.files} files
                        </p>
                      </div>
                      {/* Time */}
                      <div className="flex gap-0.5 items-center">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="w-3 h-3 text-[#CDCECF]"
                        />
                        <p
                          className="text-[#a0a3a4] italic"
                          style={{
                            fontSize: "var(--text-xs)",
                            fontWeight: "var(--font-weight-normal)",
                            lineHeight: "1.2",
                          }}
                        >
                          {job.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="bg-[#e9f4ec] flex gap-0.5 items-center px-1 py-0.5 rounded-md">
                    <p
                      className="text-[#3da067]"
                      style={{
                        fontSize: "var(--text-xs)",
                        fontWeight: "var(--font-weight-normal)",
                        lineHeight: "1.2",
                      }}
                    >
                      Processed
                    </p>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="w-3 h-3 text-[#3da067]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}