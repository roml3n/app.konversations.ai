export default function NowIndicator() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="now-indicator">
      <div className="bg-[#62c3dd] content-stretch flex h-[23px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0">
        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          10:24 am
        </p>
      </div>
      <div className="basis-0 grow h-0 min-h-px min-w-px relative shrink-0">
        <div className="absolute inset-[-1.5px_0_0_0]" style={{ "--stroke-0": "rgba(98, 195, 221, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 763 2">
            <line id="Line 1" stroke="var(--stroke-0, #62C3DD)" strokeWidth="1.5" x2="763" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
    </div>
  );
}