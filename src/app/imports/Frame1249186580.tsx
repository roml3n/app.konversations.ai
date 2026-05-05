import svgPaths from "./svg-2tan3ghtqt";

function PieLayer() {
  return (
    <div className="aspect-[191/191] basis-0 grow min-h-px min-w-px relative shrink-0" data-name="PieLayer">
      <div className="absolute bottom-0 left-0 right-[-0.08%] top-0" data-name="pie0">
        <div className="absolute bottom-[30.87%] left-[55.85%] right-0 top-[2.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92 138">
            <path d={svgPaths.p24244c00} fill="var(--fill-0, #6AC18F)" id="pie0" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-[-0.08%] top-0" data-name="pie0">
        <div className="absolute inset-[61.24%_7.97%_9.13%_62.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 62">
            <path d={svgPaths.p281b8b00} fill="var(--fill-0, #FDC463)" id="pie0" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-[-0.08%] top-0" data-name="pie1">
        <div className="absolute bottom-0 left-0 right-[28.48%] top-[10.95%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 149 185">
            <path d={svgPaths.p8c5b470} fill="var(--fill-0, #85D6EC)" id="pie1" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-[-0.08%] top-0" data-name="pie1">
        <div className="absolute bottom-[68.22%] left-[24.99%] right-[42.71%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 66">
            <path d={svgPaths.p88a6900} fill="var(--fill-0, #7B7BD7)" id="pie1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#5a5acd] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Call
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#fdb63c] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Web Chat
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Freshdesk
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame1 />
      <Frame4 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <PieLayer />
      <Frame5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Conversation sources
          </p>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}