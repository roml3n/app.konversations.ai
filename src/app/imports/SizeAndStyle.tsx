import svgPaths from "./svg-m11qckudhc";

export default function SizeAndStyle() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative rounded-[88px] size-full" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#01f1b6] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ask Konversations
      </p>
      <div className="relative shrink-0 size-[16px]" data-name="ai-sparkles">
        <div className="-translate-x-1/2 absolute aspect-[14.00075912475586/13.998863220214844] bottom-[10%] left-1/2 top-[10%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8017 12.8">
            <path clipRule="evenodd" d={svgPaths.p6393c00} fill="url(#paint0_linear_185_5507)" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_185_5507" x1="-7.63795e-08" x2="12.8017" y1="0.645793" y2="12.1542">
                <stop stopColor="#01F1B6" />
                <stop offset="1" stopColor="#0320F5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.25)]" />
    </div>
  );
}