import { useState } from "react";
import svgPaths from "../../imports/svg-supflitzk2";
import svgPathsChart from "../../imports/svg-4oo7h7hils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { ComposedChart, Line, Area } from "recharts";
import { BaseChart, ChartContent } from "../charts/BaseChart";

const queues = [
  "Billing",
  "Technical Support",
  "Sales",
  "Customer Service",
  "Returns",
];

// Mock forecast data
const forecastData = [
  {
    time: "12am",
    calls: 45,
    agents: 5,
    confidenceLower: 38,
    confidenceUpper: 52,
  },
  {
    time: "1am",
    calls: 32,
    agents: 4,
    confidenceLower: 28,
    confidenceUpper: 36,
  },
  {
    time: "2am",
    calls: 28,
    agents: 3,
    confidenceLower: 24,
    confidenceUpper: 32,
  },
  {
    time: "3am",
    calls: 25,
    agents: 3,
    confidenceLower: 21,
    confidenceUpper: 29,
  },
  {
    time: "4am",
    calls: 30,
    agents: 4,
    confidenceLower: 26,
    confidenceUpper: 34,
  },
  {
    time: "5am",
    calls: 42,
    agents: 5,
    confidenceLower: 38,
    confidenceUpper: 46,
  },
  {
    time: "6am",
    calls: 68,
    agents: 8,
    confidenceLower: 62,
    confidenceUpper: 74,
  },
  {
    time: "7am",
    calls: 95,
    agents: 11,
    confidenceLower: 88,
    confidenceUpper: 102,
  },
  {
    time: "8am",
    calls: 125,
    agents: 15,
    confidenceLower: 118,
    confidenceUpper: 132,
  },
  {
    time: "9am",
    calls: 148,
    agents: 18,
    confidenceLower: 140,
    confidenceUpper: 156,
  },
  {
    time: "10am",
    calls: 110,
    agents: 13,
    confidenceLower: 103,
    confidenceUpper: 117,
  },
  {
    time: "11am",
    calls: 95,
    agents: 11,
    confidenceLower: 88,
    confidenceUpper: 102,
  },
  {
    time: "12pm",
    calls: 70,
    agents: 8,
    confidenceLower: 63,
    confidenceUpper: 77,
  },
  {
    time: "1pm",
    calls: 85,
    agents: 10,
    confidenceLower: 78,
    confidenceUpper: 92,
  },
  {
    time: "2pm",
    calls: 75,
    agents: 9,
    confidenceLower: 68,
    confidenceUpper: 82,
  },
  {
    time: "3pm",
    calls: 65,
    agents: 8,
    confidenceLower: 58,
    confidenceUpper: 72,
  },
  {
    time: "4pm",
    calls: 55,
    agents: 7,
    confidenceLower: 48,
    confidenceUpper: 62,
  },
  {
    time: "5pm",
    calls: 40,
    agents: 5,
    confidenceLower: 33,
    confidenceUpper: 47,
  },
  {
    time: "6pm",
    calls: 30,
    agents: 4,
    confidenceLower: 23,
    confidenceUpper: 37,
  },
  {
    time: "7pm",
    calls: 35,
    agents: 4,
    confidenceLower: 28,
    confidenceUpper: 42,
  },
  {
    time: "8pm",
    calls: 45,
    agents: 5,
    confidenceLower: 38,
    confidenceUpper: 52,
  },
  {
    time: "9pm",
    calls: 38,
    agents: 5,
    confidenceLower: 31,
    confidenceUpper: 45,
  },
  {
    time: "10pm",
    calls: 32,
    agents: 4,
    confidenceLower: 25,
    confidenceUpper: 39,
  },
  {
    time: "11pm",
    calls: 28,
    agents: 3,
    confidenceLower: 21,
    confidenceUpper: 35,
  },
];

export function Forecasting() {
  const [selectedQueue, setSelectedQueue] = useState("Billing");
  const [selectedDate, setSelectedDate] = useState<Date>(
    new Date(2024, 1, 18),
  );
  const [showForecast, setShowForecast] = useState(false);
  const [queueDropdownOpen, setQueueDropdownOpen] =
    useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleGenerateForecast = () => {
    setShowForecast(true);
  };

  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
            <p
              className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]"
              style={{
                fontVariationSettings: "'wdth' 100",
                fontWeight: 600,
              }}
            >
              Forecasting
            </p>

            {showForecast && (
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                {/* Queue Dropdown */}
                <Popover
                  open={queueDropdownOpen}
                  onOpenChange={setQueueDropdownOpen}
                >
                  <PopoverTrigger asChild>
                    <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                      <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 16 16"
                          >
                            <g>
                              <path
                                d={svgPathsChart.p3b41c400}
                                fill="#7A7D7D"
                              />
                            </g>
                          </svg>
                        </div>
                        <p
                          className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                            fontWeight: 400,
                          }}
                        >
                          Queue
                        </p>
                      </div>
                      <p
                        className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                          fontWeight: 400,
                        }}
                      >
                        {selectedQueue}
                      </p>
                      <div className="relative shrink-0 size-[16px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <path
                              d={svgPathsChart.p3faa2700}
                              fill="#B1B3B4"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <div className="flex flex-col">
                      {queues.map((queue) => (
                        <button
                          key={queue}
                          onClick={() => {
                            setSelectedQueue(queue);
                            setQueueDropdownOpen(false);
                          }}
                          className="px-3 py-2 text-sm text-left hover:bg-muted transition-colors"
                          style={{
                            backgroundColor:
                              selectedQueue === queue
                                ? "var(--muted)"
                                : "transparent",
                            fontFamily: "Instrument Sans",
                            fontWeight: 400,
                          }}
                        >
                          {queue}
                        </button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Date Picker */}
                <Popover
                  open={datePickerOpen}
                  onOpenChange={setDatePickerOpen}
                >
                  <PopoverTrigger asChild>
                    <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 cursor-pointer">
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                      <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 16 16"
                          >
                            <g>
                              <path
                                d={svgPathsChart.p10e710c0}
                                fill="#6A7282"
                              />
                            </g>
                          </svg>
                        </div>
                        <p
                          className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]"
                          style={{
                            fontVariationSettings: "'wdth' 100",
                            fontWeight: 400,
                          }}
                        >
                          Date
                        </p>
                      </div>
                      <p
                        className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]"
                        style={{
                          fontVariationSettings: "'wdth' 100",
                          fontWeight: 400,
                        }}
                      >
                        {format(selectedDate, "dd/M/yyyy")}
                      </p>
                      <div className="relative shrink-0 size-[16px]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <path
                              d={svgPathsChart.p3faa2700}
                              fill="#99A1AF"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        if (date) {
                          setSelectedDate(date);
                          setDatePickerOpen(false);
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                {/* Regenerate Button */}
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <button
                    onClick={handleGenerateForecast}
                    className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0"
                  >
                    <div className="relative shrink-0 size-[16px]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <g>
                          <path
                            d={svgPathsChart.p17628000}
                            fill="#FAFAFA"
                          />
                        </g>
                      </svg>
                    </div>
                    <div
                      className="flex flex-col font-['Instrument_Sans'] justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]"
                      style={{
                        fontVariationSettings: "'wdth' 100",
                        fontWeight: 600,
                      }}
                    >
                      <p className="leading-[1.2]">
                        Regenerate
                      </p>
                    </div>
                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {showForecast ? (
            <>
              {/* Metric Cards Row */}
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                {/* Total forecasted calls */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <p
                              className="font-['Instrument_Sans'] leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 600,
                              }}
                            >
                              2,145
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                            <p
                              className="basis-0 font-['Instrument_Sans'] grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 400,
                              }}
                            >
                              Total forecasted calls
                            </p>
                            <div className="relative shrink-0 size-[12px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12 12"
                              >
                                <g>
                                  <path
                                    d={svgPathsChart.p37669d00}
                                    fill="#B1B3B4"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[#5a5acd] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>

                {/* Model accuracy */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <p
                              className="font-['Instrument_Sans'] leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 600,
                              }}
                            >
                              7.2%
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                            <p
                              className="basis-0 font-['Instrument_Sans'] grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 400,
                              }}
                            >
                              Model accuracy (MAPE)
                            </p>
                            <div className="relative shrink-0 size-[12px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12 12"
                              >
                                <g>
                                  <path
                                    d={svgPathsChart.p37669d00}
                                    fill="#B1B3B4"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[#e2c148] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>

                {/* Peak hour */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <p
                              className="font-['Instrument_Sans'] leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 600,
                              }}
                            >
                              09:00 AM
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                            <p
                              className="basis-0 font-['Instrument_Sans'] grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 400,
                              }}
                            >
                              Peak hour
                            </p>
                            <div className="relative shrink-0 size-[12px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12 12"
                              >
                                <g>
                                  <path
                                    d={svgPathsChart.p37669d00}
                                    fill="#B1B3B4"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[#d4661f] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>

                {/* Average agents required */}
                <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
                      <div className="overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
                          <div className="content-stretch flex items-center relative shrink-0 w-full">
                            <p
                              className="font-['Instrument_Sans'] leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 600,
                              }}
                            >
                              12
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
                            <p
                              className="basis-0 font-['Instrument_Sans'] grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 400,
                              }}
                            >
                              Average agents required
                            </p>
                            <div className="relative shrink-0 size-[12px]">
                              <svg
                                className="block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12 12"
                              >
                                <g>
                                  <path
                                    d={svgPathsChart.p37669d00}
                                    fill="#B1B3B4"
                                  />
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        aria-hidden="true"
                        className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]"
                      />
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border-[#45b273] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]"
                  />
                </div>
              </div>

              {/* Chart */}
              <div className="content-stretch flex items-start relative shrink-1 w-full">
                <div
                  className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
                  style={{ height: "400px" }}
                >
                  <BaseChart
                    title={`Call forecast – ${selectedQueue}`}
                    yAxisLabel=""
                    rightYAxisLabel=""
                    data={forecastData}
                    xAxisKey="time"
                    customLegend={
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="bg-[#3d8aff] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" />
                          <p
                            className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]"
                            style={{
                              fontVariationSettings:
                                "'wdth' 100",
                              fontWeight: 400,
                            }}
                          >
                            Forecasted calls
                          </p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="bg-[#45b273] h-[7.682px] opacity-80 relative rounded-[2px] shrink-0 w-[16.747px]">
                            <div
                              aria-hidden="true"
                              className="absolute border border-[#45b273] border-solid inset-0 pointer-events-none rounded-[2px]"
                            />
                          </div>
                          <p
                            className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]"
                            style={{
                              fontVariationSettings:
                                "'wdth' 100",
                              fontWeight: 400,
                            }}
                          >
                            Recommended agents
                          </p>
                        </div>
                        <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                          <div className="bg-[#a6d0ff] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" />
                          <p
                            className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]"
                            style={{
                              fontVariationSettings:
                                "'wdth' 100",
                              fontWeight: 400,
                            }}
                          >
                            Confidence interval
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <ComposedChart
                      data={forecastData}
                      margin={{
                        top: 0,
                        right: 30,
                        left: 15,
                        bottom: 0,
                      }}
                      className="w-full"
                    >
                      <defs>
                        <linearGradient
                          id="confidenceGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#A6D0FF"
                            stopOpacity={0.5}
                          />
                          <stop
                            offset="95%"
                            stopColor="#A6D0FF"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <ChartContent
                        data={forecastData}
                        xAxisKey="time"
                        yAxisLabel="Forecasted calls"
                        rightYAxisLabel="Agents required"
                        yAxisDomain={[0, 180]}
                        yAxisTicks={[
                          0, 25, 50, 75, 100, 125, 150, 175,
                        ]}
                        rightYAxisDomain={[0, 20]}
                        rightYAxisTicks={[
                          2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
                        ]}
                        yAxisWidth={45}
                        rightYAxisWidth={30}
                      >
                        <Area
                          yAxisId="left"
                          type="monotone"
                          dataKey="confidenceUpper"
                          stroke="none"
                          fill="url(#confidenceGradient)"
                          fillOpacity={1}
                        />
                        <Area
                          yAxisId="left"
                          type="monotone"
                          dataKey="confidenceLower"
                          stroke="none"
                          fill="#fefefe"
                          fillOpacity={1}
                        />
                        <Line
                          yAxisId="left"
                          type="monotone"
                          dataKey="calls"
                          stroke="#3D8AFF"
                          strokeWidth={2}
                          dot={false}
                          strokeLinecap="round"
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="agents"
                          stroke="#45B273"
                          strokeWidth={2}
                          dot={false}
                          strokeLinecap="round"
                        />
                      </ChartContent>
                    </ComposedChart>
                  </BaseChart>
                </div>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="bg-muted rounded-xl h-[336px] flex items-center justify-center w-full">
              <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
                {/* Icon */}
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 left-[14.84%] right-[14.84%]">
                    <svg
                      className="block w-full h-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 34 48"
                    >
                      <g>
                        <path
                          d={svgPaths.p3ed75ec0}
                          fill="var(--muted-foreground)"
                          opacity="0.3"
                        />
                        <path
                          d={svgPaths.p355eec00}
                          fill="var(--muted-foreground)"
                          opacity="0.5"
                        />
                        <path
                          d={svgPaths.pfe19680}
                          fill="var(--muted-foreground)"
                          opacity="0.5"
                        />
                        <path
                          d={svgPaths.p261ea680}
                          fill="var(--muted-foreground)"
                          opacity="0.5"
                        />
                        <path
                          d={svgPaths.p2ca7a500}
                          fill="var(--muted-foreground)"
                          opacity="0.4"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-6 items-center w-full">
                  <div className="flex flex-col gap-2 items-center text-center w-full">
                    <h3
                      className="text-foreground opacity-80 font-['Instrument_Sans']"
                      style={{ fontWeight: 600 }}
                    >
                      Generate an AI-powered forecast
                    </h3>
                    <p
                      className="text-foreground opacity-50 font-['Instrument_Sans']"
                      style={{ fontWeight: 400 }}
                    >
                      Use your historical conversation data to
                      predict future staffing needs and build
                      optimal schedules.
                    </p>
                  </div>

                  {/* Filters */}
                  <div className="flex gap-1.5 items-center">
                    {/* Queue Filter */}
                    <Popover
                      open={queueDropdownOpen}
                      onOpenChange={setQueueDropdownOpen}
                    >
                      <PopoverTrigger asChild>
                        <button className="bg-background border border-border rounded-lg px-2.5 py-2 flex items-center gap-2 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-1 opacity-60">
                            <div className="w-4 h-4">
                              <svg
                                className="block w-full h-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path
                                    d={svgPaths.p3b41c400}
                                    fill="var(--muted-foreground)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <span
                              className="text-xs text-muted-foreground font-['Instrument_Sans']"
                              style={{ fontWeight: 400 }}
                            >
                              Queue
                            </span>
                          </div>
                          <span
                            className="text-xs text-foreground font-['Instrument_Sans']"
                            style={{ fontWeight: 400 }}
                          >
                            {selectedQueue}
                          </span>
                          <div className="w-4 h-4">
                            <svg
                              className="block w-full h-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16 16"
                            >
                              <g>
                                <path
                                  d={svgPaths.p3faa2700}
                                  fill="var(--muted-foreground)"
                                  opacity="0.7"
                                />
                              </g>
                            </svg>
                          </div>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <div className="flex flex-col">
                          {queues.map((queue) => (
                            <button
                              key={queue}
                              onClick={() => {
                                setSelectedQueue(queue);
                                setQueueDropdownOpen(false);
                              }}
                              className="px-3 py-2 text-sm text-left hover:bg-muted transition-colors font-['Instrument_Sans']"
                              style={{
                                backgroundColor:
                                  selectedQueue === queue
                                    ? "var(--muted)"
                                    : "transparent",
                                fontWeight: 400,
                              }}
                            >
                              {queue}
                            </button>
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* Date Filter */}
                    <Popover
                      open={datePickerOpen}
                      onOpenChange={setDatePickerOpen}
                    >
                      <PopoverTrigger asChild>
                        <button className="bg-background border border-border rounded-lg px-2.5 py-2 flex items-center gap-2 hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-1 opacity-60">
                            <div className="w-4 h-4">
                              <svg
                                className="block w-full h-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path
                                    d={svgPaths.p10e710c0}
                                    fill="var(--muted-foreground)"
                                  />
                                </g>
                              </svg>
                            </div>
                            <span
                              className="text-xs text-muted-foreground font-['Instrument_Sans']"
                              style={{ fontWeight: 400 }}
                            >
                              Date
                            </span>
                          </div>
                          <span
                            className="text-xs text-foreground font-['Instrument_Sans']"
                            style={{ fontWeight: 400 }}
                          >
                            {format(selectedDate, "dd/M/yyyy")}
                          </span>
                          <div className="w-4 h-4">
                            <svg
                              className="block w-full h-full"
                              fill="none"
                              preserveAspectRatio="none"
                              viewBox="0 0 16 16"
                            >
                              <g>
                                <path
                                  d={svgPaths.p3faa2700}
                                  fill="var(--muted-foreground)"
                                  opacity="0.6"
                                />
                              </g>
                            </svg>
                          </div>
                        </button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={(date) => {
                            if (date) {
                              setSelectedDate(date);
                              setDatePickerOpen(false);
                            }
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Generate Button */}
                  <button
                    onClick={handleGenerateForecast}
                    className="bg-primary text-primary-foreground rounded flex items-center gap-1 px-4 py-2.5 hover:opacity-90 transition-opacity shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)] font-['Instrument_Sans']"
                    style={{ fontWeight: 600 }}
                  >
                    <div className="w-4 h-4">
                      <svg
                        className="block w-full h-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 16 16"
                      >
                        <g>
                          <path
                            d={svgPaths.p17628000}
                            fill="currentColor"
                          />
                        </g>
                      </svg>
                    </div>
                    <span>Generate AI forecast</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}