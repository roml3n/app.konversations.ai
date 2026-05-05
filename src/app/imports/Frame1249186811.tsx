import svgPaths from "./svg-x2w0pk4pjv";
import clsx from "clsx";
type Wrapper7Props = {
  additionalClassNames?: string;
};

function Wrapper7({ children, additionalClassNames = "", text }: React.PropsWithChildren<Wrapper7Props>) {
  return (
    <div style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-[14px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <Wrapper4 additionalClassNames="text-nowrap">{text}</Wrapper4>
      </div>
    </div>
  );
}
type Wrapper6Props = {
  additionalClassNames?: string;
  text: string;
};

function Wrapper6({ children, additionalClassNames = "", text }: React.PropsWithChildren<Wrapper6Props>) {
  return (
    <div style={{ "--transform-inner-width": "23.53125", "--transform-inner-height": "14.390625" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-[14px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <Wrapper4 additionalClassNames="text-nowrap">{text}</Wrapper4>
      </div>
    </div>
  );
}
type Wrapper5Props = {
  text: string;
};

function Wrapper5({ children, text }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div style={{ "--transform-inner-width": "30.265625", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex-none rotate-[90deg] w-full">
        <Wrapper4 additionalClassNames="h-[19.001px] w-full">{text}</Wrapper4>
      </div>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-50 relative text-[#030712] text-[12px] text-center tracking-[0.06px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("size-full", additionalClassNames)}>
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-[#fefefe] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[51px] justify-self-stretch relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type TableCellAgentAssignedTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellAgentAssignedText({ text, additionalClassNames = "" }: TableCellAgentAssignedTextProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type Text5Props = {
  text: string;
};

function Text5({ text }: Text5Props) {
  return (
    <div className="content-stretch flex items-center p-[8px] relative size-full">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, additionalClassNames = "" }: Text4Props) {
  return (
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[138.25px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type TableCellDateCreatedText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TableCellDateCreatedText1({ text, additionalClassNames = "" }: TableCellDateCreatedText1Props) {
  return (
    <div className={clsx("content-stretch flex h-[51px] items-center p-[8px] relative shrink-0 w-[138.25px]", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:Medium',sans-serif] font-medium grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("content-stretch flex items-center justify-between p-[8px] relative", additionalClassNames)}>
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
      <Wrapper3>
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </Wrapper3>
    </div>
  );
}
type TableCellDateCreatedTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TableCellDateCreatedText({ text, additionalClassNames = "" }: TableCellDateCreatedTextProps) {
  return (
    <div className={clsx("bg-[#f4f4f6] place-self-stretch relative shrink-0", additionalClassNames)}>
      <div className="flex flex-row items-center size-full">
        <Text3 text={text} additionalClassNames="size-full" />
      </div>
    </div>
  );
}
type Axis1TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Axis1Text({ text, additionalClassNames = "" }: Axis1TextProps) {
  return (
    <div style={{ "--transform-inner-width": "30.265625", "--transform-inner-height": "14.390625" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0 w-[14px]", additionalClassNames)}>
      <div className="flex-none rotate-[90deg]">
        <Wrapper4 additionalClassNames="text-nowrap">{text}</Wrapper4>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="flex-none rotate-[270deg]">
      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-80 relative text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{text}</p>
      </div>
    </div>
  );
}

function Text1({ text }: Text1Props) {
  return (
    <div className="flex-none rotate-[90deg] w-full">
      <Wrapper4 additionalClassNames="h-[19.001px] w-full">{text}</Wrapper4>
    </div>
  );
}
type AxisTextProps = {
  text: string;
};

function AxisText({ text }: AxisTextProps) {
  return (
    <div style={{ "--transform-inner-width": "23.53125", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <Text1 text={text} />
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className="flex flex-col justify-center opacity-50 relative shrink-0">
      <p className="leading-[1.2] text-nowrap">{text}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] size-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative size-full">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
            <Wrapper1>
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Hourly call volume
              </p>
              <div className="content-stretch flex flex-col h-[184px] items-start relative shrink-0 w-full" data-name="Chart&Axis">
                <div className="bg-[#fefefe] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
                  <div className="h-[179.263px] relative shrink-0 w-full">
                    <div className="absolute h-[124.755px] left-[58.99px] right-[0.01px] top-[15.65px]" data-name="Line Chart">
                      <div className="absolute inset-[-0.8%_-0.22%_0_-0.22%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 456 126">
                          <g id="Line Chart">
                            <path d={svgPaths.p154d9700} fill="url(#paint0_linear_83_3280)" id="Vector 3" />
                            <path d={svgPaths.p39c5bb00} id="Vector 4" stroke="var(--stroke-0, #3D8AFF)" strokeLinecap="round" strokeWidth="2" />
                          </g>
                          <defs>
                            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_3280" x1="228" x2="228" y1="1" y2="125.755">
                              <stop stopColor="#3D8AFF" stopOpacity="0.3" />
                              <stop offset="1" stopColor="#3D8AFF" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute content-stretch flex gap-[12px] items-center left-0 right-0 top-0" data-name="grid & axes">
                      <div className="flex h-[28px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "26.96875", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                        <Text2 text="Calls" />
                      </div>
                      <div className="flex flex-row items-center self-stretch">
                        <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] pb-[38px] pt-0 px-0 relative shrink-0 text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px] w-[21px]">
                          <Text text="125" />
                          <Text text="100" />
                          <Text text="75" />
                          <Text text="50" />
                          <Text text="25" />
                          <Text text="0" />
                        </div>
                      </div>
                      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="grids">
                        <div className="h-[140px] relative shrink-0 w-full" data-name="grids">
                          <div className="absolute inset-[-0.36%_0]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 454 141">
                              <g id="grids">
                                <path d="M0 0.5H454" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                <path d="M0 28.5H454" id="Y-axis grid_2" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                <path d="M0 56.5H454" id="Y-axis grid_3" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                <path d="M0 84.5H454" id="Y-axis grid_4" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                                <path d="M0 112.5H454" id="Y-axis grid_5" stroke="var(--stroke-0, #F0F0F0)" />
                                <path d="M0 140.5H454" id="X-axis" opacity="0.2" stroke="var(--stroke-0, #71717A)" />
                              </g>
                            </svg>
                          </div>
                        </div>
                        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="axis">
                          <div className="flex h-[31.263px] items-center justify-center relative shrink-0 w-[21.345px]" style={{ "--transform-inner-width": "30.265625", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                            <div className="flex-none rotate-[90deg]">
                              <Wrapper4 additionalClassNames="h-[21.345px] w-[31.263px]">12am</Wrapper4>
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
                          <Wrapper5 text="10am" />
                          <div className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                            <Text1 text="11am" />
                          </div>
                          <Wrapper5 text="12pm" />
                          <AxisText text="1pm" />
                          <AxisText text="2pm" />
                          <AxisText text="3pm" />
                          <AxisText text="4pm" />
                          <AxisText text="5pm" />
                          <AxisText text="6pm" />
                          <AxisText text="7pm" />
                          <AxisText text="8pm" />
                          <AxisText text="9pm" />
                          <Wrapper5 text="10pm" />
                          <div className="flex h-[31.263px] items-center justify-center relative shrink-0 w-[14.629px]" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                            <div className="flex-none rotate-[90deg]">
                              <Wrapper4 additionalClassNames="h-[14.629px] w-[31.263px]">11pm</Wrapper4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper1>
            <Wrapper1>
              <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                Quality score trend
              </p>
              <div className="bg-[#fefefe] content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full">
                <div className="h-[184px] relative shrink-0 w-full">
                  <div className="absolute h-[125.56px] left-[9.94%] right-0 top-[24.4px]" data-name="Line Chart">
                    <div className="absolute inset-[-0.8%_-0.22%_0_-0.22%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 127">
                        <g id="Line Chart">
                          <path d={svgPaths.pcbaaef0} fill="url(#paint0_linear_83_3262)" id="area" />
                          <path d={svgPaths.p20d2bc00} id="line" stroke="var(--stroke-0, #45B273)" strokeLinecap="round" strokeWidth="2" />
                        </g>
                        <defs>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_83_3262" x1="232" x2="232" y1="1.00002" y2="126.56">
                            <stop stopColor="#45B273" stopOpacity="0.3" />
                            <stop offset="1" stopColor="#45B273" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute content-stretch flex gap-[8px] items-center left-0 right-0 top-[-0.41px]" data-name="grid & axes">
                    <div className="flex h-[75px] items-center justify-center relative shrink-0 w-[14px]" style={{ "--transform-inner-width": "70.796875", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                      <Text2 text="Quality score" />
                    </div>
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] pb-[23px] pt-0 px-0 relative shrink-0 text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px] w-[21px]">
                        <Text text="100" />
                        <Text text="75" />
                        <Text text="50" />
                        <Text text="25" />
                        <Text text="0" />
                      </div>
                    </div>
                    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="grids">
                      <div className="h-[147px] relative shrink-0 w-full" data-name="grids">
                        <div className="absolute inset-[-0.68%_0_-0.34%_0]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 462 149">
                            <g id="grids">
                              <g id="Y-axis grid" opacity="0.1">
                                <mask fill="white" id="path-1-inside-1_83_3255">
                                  <path d="M0 1H462Z" />
                                </mask>
                                <path d="M0 1V2H462V1V0H0V1Z" fill="var(--stroke-0, #71717A)" mask="url(#path-1-inside-1_83_3255)" />
                              </g>
                              <path d="M0 37.75H462" id="Y-axis grid_2" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                              <path d="M0 74.5H462" id="Y-axis grid_3" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                              <path d="M0 111.25H462" id="Y-axis grid_4" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
                              <path d="M0 148H462" id="Y-axis grid_5" opacity="0.2" stroke="var(--stroke-0, #71717A)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                      <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="axis">
                        <Axis1Text text="12am" additionalClassNames="h-[29px]" />
                        <Wrapper6 additionalClassNames="h-[23px]" text="1am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="2am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="3am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="4am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="5am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="6am" />
                        <Wrapper6 additionalClassNames="h-[24px]" text="7am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="8am" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="9am" />
                        <Axis1Text text="10am" additionalClassNames="h-[31px]" />
                        <Wrapper7 additionalClassNames="h-[27px]" text="11am" />
                        <Axis1Text text="12pm" additionalClassNames="h-[30px]" />
                        <Wrapper6 additionalClassNames="h-[24px]" text="1pm" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="2pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="3pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="4pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="5pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="6pm" />
                        <Wrapper6 additionalClassNames="h-[25px]" text="7pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="8pm" />
                        <Wrapper6 additionalClassNames="h-[26px]" text="9pm" />
                        <Axis1Text text="10pm" additionalClassNames="h-[32px]" />
                        <Wrapper7 additionalClassNames="h-[28px]" text="11pm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper1>
          </div>
          <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full">
            <Wrapper2 additionalClassNames="overflow-clip rounded-[inherit]">
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
                  <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-none relative shrink-0 text-[#404141] text-[16px] tracking-[0.08px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                    Queue status
                  </p>
                </div>
              </div>
              <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="table">
                <div className="grid grid-cols-[repeat(8,_minmax(0px,_1fr))] grid-rows-[repeat(6,_fit-content(100%))] h-[288px] relative shrink-0 w-full" data-name="table">
                  <TableCellDateCreatedText text="Queue" additionalClassNames="[grid-area:1_/_1] rounded-bl-[12px] rounded-tl-[12px]" />
                  <TableCellDateCreatedText1 text="Billing" additionalClassNames="[grid-area:2_/_1]" />
                  <TableCellDateCreatedText1 text="Support" additionalClassNames="[grid-area:3_/_1]" />
                  <TableCellDateCreatedText1 text="Sales" additionalClassNames="[grid-area:4_/_1]" />
                  <TableCellDateCreatedText1 text="Customer Service" additionalClassNames="[grid-area:5_/_1]" />
                  <TableCellDateCreatedText1 text="Retention" additionalClassNames="[grid-area:6_/_1]" />
                  <TableCellDateCreatedText text="Waiting" additionalClassNames="[grid-area:1_/_2]" />
                  <Text4 text="1" additionalClassNames="[grid-area:2_/_2]" />
                  <Text4 text="4" additionalClassNames="[grid-area:3_/_2]" />
                  <Text4 text="3" additionalClassNames="[grid-area:4_/_2]" />
                  <Text4 text="1" additionalClassNames="[grid-area:5_/_2]" />
                  <Text4 text="2" additionalClassNames="[grid-area:6_/_2]" />
                  <TableCellDateCreatedText text="Longest wait" additionalClassNames="[grid-area:1_/_3]" />
                  <TableCellDateCreatedText text="Available" additionalClassNames="[grid-area:1_/_4]" />
                  <TableCellDateCreatedText text="On Call" additionalClassNames="[grid-area:1_/_5]" />
                  <TableCellDateCreatedText text="Service Level" additionalClassNames="[grid-area:1_/_6]" />
                  <div className="[grid-area:2_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="67s" />
                    </div>
                  </div>
                  <div className="[grid-area:3_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="82s" />
                    </div>
                  </div>
                  <div className="[grid-area:4_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="11s" />
                    </div>
                  </div>
                  <div className="[grid-area:5_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="32s" />
                    </div>
                  </div>
                  <div className="[grid-area:6_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="58s" />
                    </div>
                  </div>
                  <TableCellDateCreatedText text="Occupancy" additionalClassNames="[grid-area:1_/_7]" />
                  <Text4 text="4" additionalClassNames="[grid-area:2_/_4]" />
                  <Text4 text="3" additionalClassNames="[grid-area:2_/_5]" />
                  <TableCellAgentAssignedText text="83.2%" additionalClassNames="[grid-area:2_/_6]" />
                  <TableCellAgentAssignedText text="88.7%" additionalClassNames="[grid-area:2_/_7]" />
                  <Text4 text="5" additionalClassNames="[grid-area:3_/_4]" />
                  <Text4 text="1" additionalClassNames="[grid-area:3_/_5]" />
                  <TableCellAgentAssignedText text="90.8%" additionalClassNames="[grid-area:3_/_6]" />
                  <TableCellAgentAssignedText text="92.4%" additionalClassNames="[grid-area:3_/_7]" />
                  <Text4 text="2" additionalClassNames="[grid-area:4_/_4]" />
                  <Text4 text="8" additionalClassNames="[grid-area:4_/_5]" />
                  <TableCellAgentAssignedText text="91.1%" additionalClassNames="[grid-area:4_/_6]" />
                  <TableCellAgentAssignedText text="80.2%" additionalClassNames="[grid-area:4_/_7]" />
                  <Text4 text="7" additionalClassNames="[grid-area:5_/_4]" />
                  <Text4 text="7" additionalClassNames="[grid-area:5_/_5]" />
                  <Wrapper additionalClassNames="[grid-area:5_/_6]">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#da3b3b] text-[14px] tracking-[0.07px] w-[116px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      72.1%
                    </p>
                  </Wrapper>
                  <Wrapper additionalClassNames="[grid-area:5_/_7]">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#da3b3b] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      53.3%
                    </p>
                  </Wrapper>
                  <Text4 text="1" additionalClassNames="[grid-area:6_/_4]" />
                  <Text4 text="8" additionalClassNames="[grid-area:6_/_5]" />
                  <TableCellAgentAssignedText text="88.4%" additionalClassNames="[grid-area:6_/_6]" />
                  <Wrapper additionalClassNames="[grid-area:6_/_7]">
                    <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff8904] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      65.9%
                    </p>
                  </Wrapper>
                  <div className="[grid-area:1_/_8] bg-[#f4f4f6] relative rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="table_cell / agent_assigned">
                    <div className="flex flex-row items-center size-full">
                      <Text3 text="Calls Today" additionalClassNames="w-full" />
                    </div>
                  </div>
                  <div className="[grid-area:2_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="153" />
                    </div>
                  </div>
                  <div className="[grid-area:3_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="76" />
                    </div>
                  </div>
                  <div className="[grid-area:4_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="90" />
                    </div>
                  </div>
                  <div className="[grid-area:5_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="111" />
                    </div>
                  </div>
                  <div className="[grid-area:6_/_8] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
                    <div className="flex flex-row items-center size-full">
                      <Text5 text="211" />
                    </div>
                  </div>
                </div>
                <div className="h-[32px] relative shrink-0 w-full" data-name="pagination–table">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[8px] py-0 relative size-full">
                      <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          Showing 1 - 5 of 5
                        </p>
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          •
                        </p>
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            Results per page
                          </p>
                          <div className="bg-[#f3f4f6] content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              10
                            </p>
                            <Wrapper3>
                              <g id="caret-down">
                                <path d={svgPaths.p3faa2700} fill="var(--fill-0, #6A7282)" id="Primary" />
                              </g>
                            </Wrapper3>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#f2f3f3] content-stretch flex gap-[16px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                        <Wrapper3>
                          <g id="caret-left" opacity="0.2">
                            <path d={svgPaths.p4d7d300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                          </g>
                        </Wrapper3>
                        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          1
                        </p>
                        <Wrapper3>
                          <g id="caret-right" opacity="0.2">
                            <path d={svgPaths.p4376000} fill="var(--fill-0, #7A7D7D)" id="Primary" />
                          </g>
                        </Wrapper3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Wrapper2>
            <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
}