export default function Container() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Container">
      <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Input">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Account type
        </p>
        <div className="bg-[#f2f3f3] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
          <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between p-[12px] relative size-full">
              <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] opacity-50 relative shrink-0 text-[#121212] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[1.2]">Admin</p>
              </div>
              <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
                <div className="content-stretch flex gap-[4px] items-center justify-center px-px py-[3px] relative rounded-[8px] shrink-0" data-name=".Size and Style">
                  <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[1.2]">Update role</p>
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