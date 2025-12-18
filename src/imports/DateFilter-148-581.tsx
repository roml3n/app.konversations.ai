import svgPaths from "./svg-orgfdp5qjh";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

export default function DateFilter() {
  return (
    <div className="bg-[#f3f4f6] relative rounded-[8px] size-full" data-name="Date Filter">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative size-full">
          <Wrapper>
            <g id="caret-left">
              <path d={svgPaths.p4d7d300} fill="var(--fill-0, #99A1AF)" id="Primary" />
            </g>
          </Wrapper>
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            1
          </p>
          <Wrapper>
            <g id="caret-right">
              <path d={svgPaths.p4376000} fill="var(--fill-0, #99A1AF)" id="Primary" />
            </g>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}