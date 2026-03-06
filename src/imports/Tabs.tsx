function TabContents() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a8890] text-[14px] text-center tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Overview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabContents1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a8890] text-[14px] text-center tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Usage</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return (
    <div className="absolute bottom-0 h-[14px] left-0 right-0" data-name="Indicator">
      <div className="absolute bg-[#0320f5] bottom-0 h-[3px] left-[2px] right-[2px] rounded-tl-[100px] rounded-tr-[100px]" data-name="Shape" />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Tab Contents">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] h-full items-center justify-center py-[14px] relative">
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-center tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Billing History</p>
          </div>
          <Indicator />
        </div>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-end px-[16px] relative size-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Tab group">
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[80px]" data-name="Tab-base">
        <StateLayer />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[80px]" data-name="Tab-base">
        <StateLayer1 />
      </div>
      <div className="content-stretch flex flex-col h-[48px] items-center justify-end overflow-clip relative shrink-0 w-[80px]" data-name="Tab-base">
        <StateLayer2 />
      </div>
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Tabs">
      <TabGroup />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Divider">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="Divider" />
          </svg>
        </div>
      </div>
    </div>
  );
}