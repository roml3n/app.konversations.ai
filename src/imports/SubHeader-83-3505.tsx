import svgPaths from "./svg-0f35dr34nx";

export default function SubHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="SubHeader">
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#404141] text-[18px] tracking-[0.09px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Live monitoring
      </p>
      <div className="basis-0 content-stretch flex gap-[12px] grow items-center justify-center leading-[1.2] min-h-px min-w-px relative shrink-0 text-[18px] text-center text-nowrap tracking-[0.09px]">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#99a1af]" style={{ fontVariationSettings: "'wdth' 100" }}>
          March 23, 2026
        </p>
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#101828]" style={{ fontVariationSettings: "'wdth' 100" }}>
          10:09:34
        </p>
      </div>
      <div className="basis-0 content-stretch flex flex-col grow items-end justify-center min-h-px min-w-px relative shrink-0">
        <div className="bg-gradient-to-b content-stretch flex from-[#ffffff] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#f1f1f1]" data-name="Button/Dash/Export Report">
          <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[14px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g clipPath="url(#clip0_83_3509)" id="arrows-left-right-to-line">
                  <path d={svgPaths.p1117b180} fill="var(--fill-0, #6A7282)" id="Vector" />
                </g>
                <defs>
                  <clipPath id="clip0_83_3509">
                    <rect fill="white" height="14" width="14" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              View Fullscreen
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}