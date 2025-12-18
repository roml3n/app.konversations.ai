import svgPaths from "./svg-1kk5wkp41h";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

export default function PaginationTable() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="pagination–table">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          1 - 10 of 240
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
            <Wrapper>
              <g id="caret-down">
                <path d={svgPaths.p3faa2700} fill="var(--fill-0, #6A7282)" id="Primary" />
              </g>
            </Wrapper>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[4px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
        <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
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
  );
}