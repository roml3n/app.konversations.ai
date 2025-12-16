import svgPaths from "./svg-vi7snezw5i";
import clsx from "clsx";

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.07px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("basis-0 flex flex-col grow justify-center min-h-px min-w-px opacity-50 relative shrink-0", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function StateLayer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative w-full">{children}</div>
      </div>
    </div>
  );
}
type Frame1004TextProps = {
  text: string;
};

function Frame1004Text({ text }: Frame1004TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center opacity-50 relative shrink-0">
      <p className="leading-[1.2] text-nowrap">{text}</p>
    </div>
  );
}
type TabContentsTextProps = {
  text: string;
};

function TabContentsText({ text }: TabContentsTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0">
      <Wrapper1 additionalClassNames="text-[#7a8890] text-center">{text}</Wrapper1>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-[30px] relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
            <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tab group">
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Real-time adherence" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Forecasting" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Scheduling" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
                    <Wrapper1 additionalClassNames="text-[#0320f5] text-center">Reports</Wrapper1>
                    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                      <div className="absolute bg-[#0320f5] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
                    </div>
                  </div>
                </StateLayer>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#f2f3f3] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
                  <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                    <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Service level report
                    </p>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                            <Wrapper2>
                              <g id="calendar">
                                <path d={svgPaths.p10e710c0} fill="var(--fill-0, #6A7282)" id="Primary" />
                              </g>
                            </Wrapper2>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Date
                            </p>
                          </div>
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            18/2/2024 to 24/2/2024
                          </p>
                          <Wrapper2>
                            <g id="caret-down">
                              <path d={svgPaths.p3faa2700} fill="var(--fill-0, #99A1AF)" id="Primary" />
                            </g>
                          </Wrapper2>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
                        <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
                          <Wrapper1 additionalClassNames="text-[#fefefe]">Regenerate</Wrapper1>
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="size-full">
                      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Service level performance by queue
                        </p>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Support
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Billing
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#da3b3b] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Sales
                            </p>
                          </div>
                          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                            <div className="bg-[#b059e9] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Customer service `}</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Chart&Axis">
                          <div className="bg-[#fefefe] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
                            <div className="h-[179.263px] relative shrink-0 w-full">
                              <div className="absolute h-[136.415px] left-[5.49%] right-0 top-[3.58px]" data-name="Line Chart">
                                <div className="absolute inset-[-0.73%_-0.1%_-0.82%_-0.1%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1017 139">
                                    <g id="Line Chart">
                                      <path d={svgPaths.p3b4d7e40} id="Vector 2" stroke="var(--stroke-0, #45B273)" strokeLinecap="round" strokeWidth="2" />
                                      <path d={svgPaths.p27ba9400} id="Vector 4" stroke="var(--stroke-0, #67CCE8)" strokeLinecap="round" strokeWidth="2" />
                                      <path d={svgPaths.p17ec7800} id="Vector 3" stroke="var(--stroke-0, #C07AED)" strokeLinecap="round" strokeWidth="2" />
                                      <path d={svgPaths.p16da3500} id="Vector 5" stroke="var(--stroke-0, #DA3B3B)" strokeLinecap="round" strokeWidth="2" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="absolute content-stretch flex gap-[12px] items-center left-0 right-0 top-0" data-name="grid & axes">
                                <div className="flex h-[83px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "82.921875", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                  <div className="flex-none rotate-[270deg]">
                                    <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-80 relative text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                      <p className="leading-[1.2]">Service level %</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-row items-center self-stretch">
                                  <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] pb-[22px] pt-0 px-0 relative shrink-0 text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px] w-[21px]">
                                    <Frame1004Text text="100" />
                                    <Frame1004Text text="95" />
                                    <Frame1004Text text="90" />
                                    <Frame1004Text text="85" />
                                    <Frame1004Text text="80" />
                                    <Frame1004Text text="75" />
                                  </div>
                                </div>
                                <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="grids">
                                  <div className="h-[140px] relative shrink-0 w-full" data-name="grids">
                                    <div className="absolute inset-[-0.36%_0]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1015 141">
                                        <g id="grids">
                                          <path d="M0 0.5H1015" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                          <path d="M0 28.5H1015" id="Y-axis grid_2" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                          <path d="M0 56.5H1015" id="Y-axis grid_3" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                          <path d="M0 84.5H1015" id="Y-axis grid_4" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
                                          <path d="M0 112.5H1015" id="Y-axis grid_5" stroke="var(--stroke-0, #F0F0F0)" />
                                          <path d="M0 140.5H1015" id="X-axis" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="relative shrink-0 w-full" data-name="axis">
                                    <div className="size-full">
                                      <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-start justify-between leading-[0] px-[12px] py-0 relative text-[#030712] text-[12px] text-center tracking-[0.06px] w-full">
                                        <div className="flex flex-col h-[21.345px] justify-center opacity-50 relative shrink-0 w-[31.263px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          <p className="leading-[1.2]">M</p>
                                        </div>
                                        <Wrapper additionalClassNames="h-[18.638px]">T</Wrapper>
                                        <Wrapper additionalClassNames="h-[18.638px]">W</Wrapper>
                                        <Wrapper additionalClassNames="h-[18.187px]">T</Wrapper>
                                        <Wrapper additionalClassNames="h-[18.187px]">F</Wrapper>
                                        <Wrapper additionalClassNames="h-[18.187px]">S</Wrapper>
                                        <Wrapper additionalClassNames="h-[18.638px]">S</Wrapper>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}