import imgFrame1249186574 from "figma:asset/f5f2ccbe2217b8f3a502a79302cbba1ab2a12244.png";

function Frame6() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[4px] size-[24px] top-1/2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgFrame1249186574} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#fefefe] relative rounded-[99px] shrink-0 size-[36px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[99px]" />
    </div>
  );
}

function Frame5() {
  return <div className="bg-[#0320f5] rounded-[99px] shrink-0 size-[6px]" />;
}

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#0320f5] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Connected
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame3 />
      <div className="bg-[#e9e9ff] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[5px] shrink-0" data-name="connect_button">
        <Frame5 />
        <Frame />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.2] relative shrink-0 text-[#5e6060] w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        3CX
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Make and receive phone calls.
      </p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] size-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Frame4 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}