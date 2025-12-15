import svgPaths from "./svg-smvxekrg3g";
import clsx from "clsx";
type Wrapper4Props = {
  text: string;
};

function Wrapper4({ children, text }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div style={{ "--transform-inner-width": "30.25", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex-none rotate-[90deg] w-full">
        <Wrapper2 additionalClassNames="h-[40.819px] w-full">{text}</Wrapper2>
      </div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.07px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-50 relative text-[#030712] text-[12px] text-center tracking-[0.06px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Card({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">{children}</div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CaretDown({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="caret-down">{children}</g>
    </Wrapper1>
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

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0">
      <Wrapper3 additionalClassNames="text-[#7a8890] text-center">{children}</Wrapper3>
    </div>
  );
}
type GridAxesTextProps = {
  text: string;
};

function GridAxesText({ text }: GridAxesTextProps) {
  return (
    <div className="flex-none rotate-[270deg]">
      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-80 relative text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}

function Text2({ text }: Text2Props) {
  return (
    <div className="flex-none rotate-[90deg] w-full">
      <Wrapper2 additionalClassNames="h-[40.819px] w-full">{text}</Wrapper2>
    </div>
  );
}
type AxisTextProps = {
  text: string;
};

function AxisText({ text }: AxisTextProps) {
  return (
    <div style={{ "--transform-inner-width": "23.515625", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <Text2 text={text} />
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center opacity-50 relative shrink-0">
      <p className="leading-[1.2] text-nowrap">{text}</p>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, text4, text5, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full justify-between leading-[0] pb-[38px] pt-0 px-0 relative shrink-0 text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px]", additionalClassNames)}>
      <Text1 text={text} />
      <Text1 text={text1} />
      <Text1 text={text2} />
      <Text1 text={text3} />
      <Text1 text={text4} />
      <Text1 text={text5} />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <div className="relative shrink-0 size-[12px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="circle-info">
            <path d={svgPaths.p37669d00} fill="var(--fill-0, #B1B3B4)" id="Primary" />
          </g>
        </svg>
      </div>
    </div>
  );
}
type TitleTextProps = {
  text: string;
};

function TitleText({ text }: TitleTextProps) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TabContentsTextProps = {
  text: string;
};

function TabContentsText({ text }: TabContentsTextProps) {
  return <Wrapper>{text}</Wrapper>;
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
                  <Wrapper>{`Real-time `}</Wrapper>
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
                    <Wrapper3 additionalClassNames="text-[#0320f5] text-center">Forecasting</Wrapper3>
                    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                      <div className="absolute bg-[#0320f5] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
                    </div>
                  </div>
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Scheduling" />
                </StateLayer>
              </div>
              <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
                <StateLayer>
                  <TabContentsText text="Reports" />
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
                      Forecasting
                    </p>
                    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
                      <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Topics Filter">
                        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                          <Wrapper1>
                            <g id="square-poll-horizontal">
                              <path d={svgPaths.p3b41c400} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                            </g>
                          </Wrapper1>
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Queue
                          </p>
                        </div>
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Billling
                        </p>
                        <CaretDown>
                          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #B1B3B4)" id="Primary" />
                        </CaretDown>
                      </div>
                      <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                          <Wrapper1>
                            <g id="calendar">
                              <path d={svgPaths.p10e710c0} fill="var(--fill-0, #6A7282)" id="Primary" />
                            </g>
                          </Wrapper1>
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Date
                          </p>
                        </div>
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          18/2/2024
                        </p>
                        <CaretDown>
                          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #99A1AF)" id="Primary" />
                        </CaretDown>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
                        <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
                          <Wrapper1>
                            <g id="magic-wand-sparkles">
                              <path d={svgPaths.p17628000} fill="var(--fill-0, #FAFAFA)" id="Vector" />
                            </g>
                          </Wrapper1>
                          <Wrapper3 additionalClassNames="text-[#fefefe]">Regenerate</Wrapper3>
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row 1">
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="total conversations">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <Card>
                          <TitleText text="123" />
                          <Text text="Total forecasted calls" />
                        </Card>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#5a5acd] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="handle time">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <Card>
                          <TitleText text="7.2%" />
                          <Text text="Model accuracy (MAPE)" />
                        </Card>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#e2c148] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="handle time">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <Card>
                          <TitleText text="09:00 AM" />
                          <Text text="Peak hour" />
                        </Card>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#d4661f] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="handle time">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
                        <Card>
                          <TitleText text="7" />
                          <Text text="Average agents required" />
                        </Card>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#45b273] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    </div>
                  </div>
                  <div className="content-stretch flex items-start relative shrink-0 w-full">
                    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0">
                      <div className="basis-0 bg-[#fefefe] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
                        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="size-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Call forecast – Billing
                            </p>
                            <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="bg-[#3d8aff] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Forecasted calls
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="bg-[#45b273] h-[7.682px] opacity-80 relative rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip">
                                  <div aria-hidden="true" className="absolute border border-[#45b273] border-solid inset-0 pointer-events-none rounded-[2px]" />
                                </div>
                                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Recommended agents
                                </p>
                              </div>
                              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                <div className="bg-[#a6d0ff] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
                                <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  Confidence interval
                                </p>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Chart&Axis">
                              <div className="bg-[#fefefe] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
                                <div className="h-[179.263px] relative shrink-0 w-full">
                                  <div className="absolute h-[134.677px] left-[5.49%] right-[5.31%] top-[3.58px]" data-name="Line Chart">
                                    <div className="absolute inset-[-0.74%_-0.05%_-0.37%_-0.05%]">
                                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 959 137">
                                        <g id="Line Chart">
                                          <g id="Vector 6">
                                            <path d={svgPaths.p2d395c80} fill="var(--fill-0, #A6D0FF)" />
                                            <path d={svgPaths.p2d395c80} fill="var(--fill-1, white)" fillOpacity="0.6" />
                                            <path d={svgPaths.p2d395c80} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.05" />
                                          </g>
                                          <path d={svgPaths.paef7c00} id="Vector 3" stroke="var(--stroke-0, #3D8AFF)" strokeLinecap="round" strokeWidth="2" />
                                          <path d={svgPaths.p29e7f300} id="Vector 5" stroke="var(--stroke-0, #45B273)" strokeLinecap="round" strokeWidth="2" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute content-stretch flex gap-[12px] items-center left-0 right-0 top-0" data-name="grid & axes">
                                    <div className="flex h-[91px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "88.328125", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                      <GridAxesText text="Forecasted calls" />
                                    </div>
                                    <div className="flex flex-row items-center self-stretch">
                                      <Helper text="125" text1="100" text2="75" text3="50" text4="25" text5="0" additionalClassNames="items-end w-[21px]" />
                                    </div>
                                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="grids">
                                      <div className="h-[140px] relative shrink-0 w-full" data-name="grids">
                                        <div className="absolute inset-[-0.36%_0]">
                                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 958 141">
                                            <g id="grids">
                                              <path d="M0 0.5H958" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                              <path d="M0 28.5H958" id="Y-axis grid_2" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                              <path d="M0 56.5H958" id="Y-axis grid_3" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                              <path d="M0 84.5H958" id="Y-axis grid_4" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
                                              <path d="M0 112.5H958" id="Y-axis grid_5" stroke="var(--stroke-0, #F0F0F0)" />
                                              <path d="M0 140.5H958" id="X-axis" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="relative shrink-0 w-full" data-name="axis">
                                        <div className="size-full">
                                          <div className="content-stretch flex items-start justify-between px-[12px] py-0 relative w-full">
                                            <div className="flex h-[31.263px] items-center justify-center relative shrink-0 w-[21.345px]" style={{ "--transform-inner-width": "30.25", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                              <div className="flex-none rotate-[90deg]">
                                                <Wrapper2 additionalClassNames="h-[21.345px] w-[31.263px]">12am</Wrapper2>
                                              </div>
                                            </div>
                                            <AxisText text="1am" />
                                            <AxisText text="2am" />
                                            <AxisText text="3am" />
                                            <AxisText text="4am" />
                                            <AxisText text="5am" />
                                            <AxisText text="6am" />
                                            <AxisText text="7am" />
                                            <AxisText text="8am" />
                                            <AxisText text="9am" />
                                            <Wrapper4 text="10am" />
                                            <div className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                              <Text2 text="11am" />
                                            </div>
                                            <Wrapper4 text="12pm" />
                                            <AxisText text="1pm" />
                                            <AxisText text="2pm" />
                                            <AxisText text="3pm" />
                                            <AxisText text="4pm" />
                                            <AxisText text="5pm" />
                                            <AxisText text="6pm" />
                                            <AxisText text="7pm" />
                                            <AxisText text="8pm" />
                                            <AxisText text="9pm" />
                                            <Wrapper4 text="10pm" />
                                            <div className="flex h-[31.263px] items-center justify-center relative shrink-0 w-[14.629px]" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                              <div className="flex-none rotate-[90deg]">
                                                <Wrapper2 additionalClassNames="h-[14.629px] w-[31.263px]">11pm</Wrapper2>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-row items-center self-stretch">
                                      <Helper text="12" text1="10" text2="8" text3="6" text4="4" text5="2" additionalClassNames="items-start w-[19px]" />
                                    </div>
                                    <div className="flex h-[91px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "85.625", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                                      <GridAxesText text="Agents required" />
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