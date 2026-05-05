function Frame1() {
  return (
    <div className="bg-[#e3e3e4] content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#404141] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        All apps
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Voice
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Messaging
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Service Desk
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workflow
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calendar
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f2f3f3] content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[400px] size-full">
      <Frame1 />
      <Frame2 />
      <Frame6 />
      <Frame7 />
      <Frame3 />
      <Frame8 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}