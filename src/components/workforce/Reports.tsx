import { useState } from "react";
import svgPaths from "../../imports/svg-vi7snezw5i";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import {
  DateFilterContent,
  type DateRange,
} from "../figma/DateFilterContent";
import { format } from "date-fns";
import { LineChart, Line } from "recharts";
import { BaseChart, ChartContent } from "../charts/BaseChart";

// Mock service level data for the report
const serviceLevelData = [
  {
    day: "MON",
    Support: 100,
    Billing: 95,
    Sales: 80,
    "Customer service": 90,
  },
  {
    day: "TUE",
    Support: 98,
    Billing: 92,
    Sales: 88,
    "Customer service": 95,
  },
  {
    day: "WED",
    Support: 95,
    Billing: 90,
    Sales: 92,
    "Customer service": 88,
  },
  {
    day: "THU",
    Support: 97,
    Billing: 88,
    Sales: 85,
    "Customer service": 82,
  },
  {
    day: "FRI",
    Support: 98,
    Billing: 85,
    Sales: 88,
    "Customer service": 85,
  },
  {
    day: "SAT",
    Support: 92,
    Billing: 82,
    Sales: 83,
    "Customer service": 75,
  },
  {
    day: "SUN",
    Support: 90,
    Billing: 80,
    Sales: 85,
    "Customer service": 88,
  },
];

const queueColors = {
  Support: "#45B273",
  Billing: "#67CCE8",
  Sales: "#DA3B3B",
  "Customer service": "#B059E9",
};

export function Reports() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 1, 18),
    to: new Date(2024, 1, 24),
    label: "Custom",
  });
  const [showReport, setShowReport] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleGenerateReport = () => {
    setShowReport(true);
  };

  const handleApplyDateRange = () => {
    setDatePickerOpen(false);
  };

  const handleCancelDateRange = () => {
    setDatePickerOpen(false);
  };

  const formatDateRange = () => {
    if (dateRange.from && dateRange.to) {
      return `${format(dateRange.from, "d/M/yyyy")} to ${format(dateRange.to, "d/M/yyyy")}`;
    }
    return "Select dates";
  };

  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] w-full">
      <div className="flex flex-col justify-center w-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          {showReport && (
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
              <p
                className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]"
                style={{
                  fontVariationSettings: "'wdth' 100",
                  fontWeight: 600,
                }}
              >
                Service level report
              </p>

              <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                {/* Date Range Picker */}
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
                                d={svgPaths.p10e710c0}
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
                        {formatDateRange()}
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
                              d={svgPaths.p3faa2700}
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
                    <DateFilterContent
                      range={dateRange}
                      onRangeChange={setDateRange}
                      onApply={handleApplyDateRange}
                      onCancel={handleCancelDateRange}
                    />
                  </PopoverContent>
                </Popover>

                {/* Regenerate Button */}
                <div className="content-stretch flex items-center justify-center relative shrink-0">
                  <button
                    onClick={handleGenerateReport}
                    className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0"
                  >
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
            </div>
          )}

          {showReport ? (
            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <div
                className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full"
                style={{ height: "400px" }}
              >
                <BaseChart
                  title="Service level performance by queue"
                  yAxisLabel="Service level %"
                  data={serviceLevelData}
                  xAxisKey="day"
                  customLegend={
                    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                      {Object.entries(queueColors).map(
                        ([queue, color]) => (
                          <div
                            key={queue}
                            className="content-stretch flex gap-[4px] items-center relative shrink-0"
                          >
                            <div
                              className="h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]"
                              style={{ backgroundColor: color }}
                            />
                            <p
                              className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 400,
                              }}
                            >
                              {queue}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  }
                >
                  <LineChart data={serviceLevelData}>
                    <ChartContent
                      data={serviceLevelData}
                      xAxisKey="day"
                      yAxisLabel="Service level %"
                      yAxisDomain={[75, 100]}
                      yAxisTicks={[75, 80, 85, 90, 95, 100]}
                      yAxisWidth={35}
                    >
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Support"
                        stroke={queueColors.Support}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Billing"
                        stroke={queueColors.Billing}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Sales"
                        stroke={queueColors.Sales}
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="Customer service"
                        stroke={queueColors["Customer service"]}
                        strokeWidth={2}
                        dot={false}
                      />
                    </ChartContent>
                  </LineChart>
                </BaseChart>
              </div>
            </div>
          ) : (
            <div className="content-stretch flex flex-col gap-[10px] h-[534px] items-center justify-center relative shrink-0 w-full">
              <div className="bg-[#f2f3f3] h-[336px] relative rounded-[12px] shrink-0 w-full">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[453px]">
                      {/* Audio Icon */}
                      <div className="overflow-clip relative shrink-0 size-[48px]">
                        <div className="absolute inset-[0_14.84%]">
                          <svg
                            className="block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 34 48"
                          >
                            <g>
                              <path
                                d={svgPaths.p3ed75ec0}
                                fill="#E6E6E6"
                              />
                              <path
                                d={svgPaths.p355eec00}
                                fill="#898989"
                              />
                              <path
                                d={svgPaths.pfe19680}
                                fill="#898989"
                              />
                              <path
                                d={svgPaths.p261ea680}
                                fill="#898989"
                              />
                              <path
                                d={svgPaths.p2ca7a500}
                                fill="#D9D9D9"
                              />
                            </g>
                          </svg>
                        </div>
                      </div>

                      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                        {/* Title and Description */}
                        <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-[#121212] text-center w-full">
                          <div
                            className="flex flex-col font-['Instrument_Sans'] justify-end opacity-80 relative shrink-0 text-[20px] tracking-[0.1px] w-full"
                            style={{
                              fontVariationSettings:
                                "'wdth' 100",
                              fontWeight: 600,
                            }}
                          >
                            <p className="leading-[1.2]">
                              Generate a service level report
                            </p>
                          </div>
                          <div
                            className="flex flex-col font-['Instrument_Sans'] justify-end opacity-50 relative shrink-0 text-[14px] tracking-[0.07px] w-full"
                            style={{
                              fontVariationSettings:
                                "'wdth' 100",
                              fontWeight: 400,
                            }}
                          >
                            <p className="leading-[1.2]">
                              Select a date range below to
                              generate a report for that period.
                            </p>
                          </div>
                        </div>

                        {/* Date Range Picker */}
                        <div className="content-stretch flex items-center relative shrink-0">
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
                                          d={svgPaths.p10e710c0}
                                          fill="#6A7282"
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                  <p
                                    className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]"
                                    style={{
                                      fontVariationSettings:
                                        "'wdth' 100",
                                      fontWeight: 400,
                                    }}
                                  >
                                    Date
                                  </p>
                                </div>
                                <p
                                  className="font-['Instrument_Sans'] leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]"
                                  style={{
                                    fontVariationSettings:
                                      "'wdth' 100",
                                    fontWeight: 400,
                                  }}
                                >
                                  {formatDateRange()}
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
                                        d={svgPaths.p3faa2700}
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
                              <DateFilterContent
                                range={dateRange}
                                onRangeChange={setDateRange}
                                onApply={handleApplyDateRange}
                                onCancel={handleCancelDateRange}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        {/* Generate Button */}
                        <div className="content-stretch flex items-center justify-center relative shrink-0">
                          <button
                            onClick={handleGenerateReport}
                            className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0"
                          >
                            <div
                              className="flex flex-col font-['Instrument_Sans'] justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]"
                              style={{
                                fontVariationSettings:
                                  "'wdth' 100",
                                fontWeight: 600,
                              }}
                            >
                              <p className="leading-[1.2]">
                                Generate report
                              </p>
                            </div>
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}