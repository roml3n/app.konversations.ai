export default function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-center justify-center leading-[1.2] relative shrink-0 text-nowrap">
        <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#5e6060] text-[20px] tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          11
        </p>
        <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#a0a3a4] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Sunday
        </p>
      </div>
    </div>
  );
}