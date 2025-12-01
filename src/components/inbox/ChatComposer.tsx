import React, { useState } from "react";
import svgPaths from "../../imports/svg-es2i0ob6zh";
import { cn } from "../../lib/utils";

const Icon16Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative shrink-0", className)}>
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 16 16"
    >
      {children}
    </svg>
  </div>
);

export function ChatComposer() {
  const [mode, setMode] = useState<"reply" | "note">("reply");

  return (
    <div className="z-50 w-full bg-none pt-[24px] px-[8px] pb-[8px]">
      <div className="bg-[#f2f3f3] rounded-[12px] flex flex-col gap-3 p-2 w-full shadow-[0_0_15px_white]">
        {/* Toggle Switch */}
        <div className="bg-[#e3e3e4] flex gap-0.5 items-center p-1 rounded-[400px] w-fit">
          <button
            type="button"
            onClick={() => setMode("reply")}
            className={cn(
              "flex gap-[3px] items-center justify-center px-[6px] py-[2px] rounded-[200px] transition-all",
              mode === "reply"
                ? "bg-[#fefefe]"
                : "hover:bg-gray-200/50 cursor-pointer",
            )}
          >
            <p
              className={cn(
                "font-['Instrument_Sans'] font-semibold text-[12px] tracking-[0.06px]",
                mode === "reply"
                  ? "text-[#0320f5]"
                  : "text-[#7a7d7d]",
              )}
            >
              Reply
            </p>
          </button>
          <button
            type="button"
            onClick={() => setMode("note")}
            className={cn(
              "flex gap-[3px] items-center justify-center px-[6px] py-[2px] rounded-[200px] transition-all",
              mode === "note"
                ? "bg-[#fefefe]"
                : "hover:bg-gray-200/50 cursor-pointer",
            )}
          >
            <p
              className={cn(
                "font-['Instrument_Sans'] font-semibold text-[12px] tracking-[0.06px]",
                mode === "note"
                  ? "text-[#0320f5]"
                  : "text-[#7a7d7d]",
              )}
            >
              Private Comment
            </p>
          </button>
        </div>

        <div className="flex flex-col gap-[12px] w-full">
          <textarea
            className="bg-transparent font-['Instrument_Sans'] font-normal text-[#a0a3a4] text-[12px] tracking-[0.06px] w-full resize-none outline-none h-[60px]"
            placeholder={
              mode === "reply"
                ? "Type a reply..."
                : "Type an internal note..."
            }
          />

          <div className="flex w-full items-center justify-between">
            <div className="flex gap-[4px] items-center text-[#7A7D7D]">
              <div className="p-[4px] rounded-[4px] hover:bg-gray-200 cursor-pointer">
                <Icon16Wrapper className="size-[16px]">
                  <path
                    d={svgPaths.p25c66f80}
                    fill="currentColor"
                  />
                </Icon16Wrapper>
              </div>
              <div className="p-[4px] rounded-[4px] hover:bg-gray-200 cursor-pointer">
                <Icon16Wrapper className="size-[16px]">
                  <g>
                    <path
                      d={svgPaths.p2f943480}
                      fill="currentColor"
                    />
                    <path
                      d={svgPaths.p2de75000}
                      fill="currentColor"
                    />
                    <path
                      d={svgPaths.p208c0b40}
                      fill="currentColor"
                    />
                  </g>
                </Icon16Wrapper>
              </div>
            </div>
            <button type="button" className="bg-[#0320f5] flex gap-[4px] items-center justify-center px-[10px] py-[6px] rounded-[4px] hover:bg-blue-700 transition-colors">
              <p className="font-['Instrument_Sans'] font-semibold text-[14px] text-white tracking-[0.07px]">
                Send
              </p>
              <Icon16Wrapper className="size-[16px] text-white">
                <path
                  d={svgPaths.p47ef80}
                  fill="currentColor"
                />
              </Icon16Wrapper>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}