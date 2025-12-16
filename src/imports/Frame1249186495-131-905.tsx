import svgPaths from "./svg-u1p8puknjt";
import clsx from "clsx";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ fontVariationSettings: "'wdth' 100" }} className={clsx("flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.07px]", additionalClassNames)}>
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
type TabContentsTextProps = {
  text: string;
};

function TabContentsText({ text }: TabContentsTextProps) {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0">
      <Wrapper additionalClassNames="text-[#7a8890] text-center">{text}</Wrapper>
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
                    <Wrapper additionalClassNames="text-[#0320f5] text-center">Reports</Wrapper>
                    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
                      <div className="absolute bg-[#0320f5] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
                    </div>
                  </div>
                </StateLayer>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[10px] h-[534px] items-center justify-center relative shrink-0 w-full">
            <div className="bg-[#f2f3f3] h-[336px] relative rounded-[12px] shrink-0 w-full">
              <div className="flex flex-col items-center justify-center size-full">
                <div className="content-stretch flex flex-col items-center justify-center p-[16px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[453px]">
                    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Audio-icon">
                      <div className="absolute inset-[0_14.84%]" data-name="Group">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 48">
                          <g id="Group">
                            <path d={svgPaths.p3ed75ec0} fill="var(--fill-0, #E6E6E6)" id="Vector" />
                            <path d={svgPaths.p355eec00} fill="var(--fill-0, #898989)" id="Vector_2" />
                            <path d={svgPaths.pfe19680} fill="var(--fill-0, #898989)" id="Vector_3" />
                            <path d={svgPaths.p261ea680} fill="var(--fill-0, #898989)" id="Vector_4" />
                            <path d={svgPaths.p2ca7a500} fill="var(--fill-0, #D9D9D9)" id="Vector_5" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
                      <div className="content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-[#121212] text-center w-full">
                        <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-end opacity-80 relative shrink-0 text-[20px] tracking-[0.1px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.2]">Generate a service level report</p>
                        </div>
                        <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end opacity-50 relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
                          <p className="leading-[1.2]">Select a date range below to generate a report for that period.</p>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center relative shrink-0">
                        <div className="bg-white content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
                          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                          <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
                            <Wrapper1>
                              <g id="calendar">
                                <path d={svgPaths.p10e710c0} fill="var(--fill-0, #6A7282)" id="Primary" />
                              </g>
                            </Wrapper1>
                            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Date `}</p>
                          </div>
                          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                            18/2/2024 to 24/2/2024
                          </p>
                          <Wrapper1>
                            <g id="caret-down">
                              <path d={svgPaths.p3faa2700} fill="var(--fill-0, #99A1AF)" id="Primary" />
                            </g>
                          </Wrapper1>
                        </div>
                      </div>
                      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
                        <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
                          <Wrapper additionalClassNames="text-[#fefefe]">Generate report</Wrapper>
                          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
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