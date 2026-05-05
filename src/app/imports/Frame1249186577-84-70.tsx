import svgPaths from "./svg-4r0uu5cv3v";
import clsx from "clsx";
type Wrapper1Props = {
  text: string;
};

function Wrapper1({ children, text }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div style={{ "--transform-inner-width": "30.265625", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <div className="flex-none rotate-[90deg] w-full">
        <Wrapper additionalClassNames="h-[19.001px] w-full">{text}</Wrapper>
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] opacity-50 relative text-[#030712] text-[12px] text-center tracking-[0.06px]", additionalClassNames)}>
      <p className="leading-[1.2]">{children}</p>
    </div>
  );
}

function Text({ text }: TextProps) {
  return (
    <div className="flex-none rotate-[90deg] w-full">
      <Wrapper additionalClassNames="h-[19.001px] w-full">{text}</Wrapper>
    </div>
  );
}
type AxisTextProps = {
  text: string;
};

function AxisText({ text }: AxisTextProps) {
  return (
    <div style={{ "--transform-inner-width": "23.53125", "--transform-inner-height": "14.390625" } as React.CSSProperties} className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0">
      <Text text={text} />
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

export default function Frame() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
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
                    <div className="flex-none rotate-[270deg]">
                      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-medium justify-center leading-[0] opacity-80 relative text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[1.2]">Calls</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center self-stretch">
                    <div className="content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full items-end justify-between leading-[0] pb-[38px] pt-0 px-0 relative shrink-0 text-[#030712] text-[12px] text-nowrap text-right tracking-[0.06px] w-[21px]">
                      <Frame1004Text text="125" />
                      <Frame1004Text text="100" />
                      <Frame1004Text text="75" />
                      <Frame1004Text text="50" />
                      <Frame1004Text text="25" />
                      <Frame1004Text text="0" />
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
                          <Wrapper additionalClassNames="h-[21.345px] w-[31.263px]">12am</Wrapper>
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
                      <Wrapper1 text="10am" />
                      <div className="basis-0 flex grow h-[31.263px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                        <Text text="11am" />
                      </div>
                      <Wrapper1 text="12pm" />
                      <AxisText text="1pm" />
                      <AxisText text="2pm" />
                      <AxisText text="3pm" />
                      <AxisText text="4pm" />
                      <AxisText text="5pm" />
                      <AxisText text="6pm" />
                      <AxisText text="7pm" />
                      <AxisText text="8pm" />
                      <AxisText text="9pm" />
                      <Wrapper1 text="10pm" />
                      <div className="flex h-[31.263px] items-center justify-center relative shrink-0 w-[14.629px]" style={{ "--transform-inner-width": "29.375", "--transform-inner-height": "14.390625" } as React.CSSProperties}>
                        <div className="flex-none rotate-[90deg]">
                          <Wrapper additionalClassNames="h-[14.629px] w-[31.263px]">11pm</Wrapper>
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