import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faWandMagicSparkles,
  faChartColumn,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import svgPaths from "../../imports/svg-supflitzk2";

export function Forecasting() {
  const [selectedQueue, setSelectedQueue] = useState("Billing");
  const [selectedDate, setSelectedDate] = useState("18/2/2024");

  return (
    <div className="flex flex-col gap-4 w-full pt-24">
      {/* Empty State Card */}
      <div className="bg-muted rounded-xl h-[336px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 w-full max-w-md px-4">
          {/* Audio/File Icon */}
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
              <h3 className="text-foreground font-semibold opacity-80">
                Generate an AI-powered forecast
              </h3>
              <p className="text-foreground font-normal opacity-50">
                Use your historical conversation data to predict
                future staffing needs and build optimal
                schedules.
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-1.5 items-center">
              {/* Queue Filter */}
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
                  <span className="text-xs text-muted-foreground">
                    Queue
                  </span>
                </div>
                <span className="text-xs text-foreground">
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

              {/* Date Filter */}
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
                  <span className="text-xs text-muted-foreground">
                    Date
                  </span>
                </div>
                <span className="text-xs text-foreground">
                  {selectedDate}
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
            </div>

            {/* Generate Button */}
            <button className="bg-primary text-primary-foreground rounded flex items-center gap-1 px-4 py-2.5 hover:opacity-90 transition-opacity shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]">
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
    </div>
  );
}