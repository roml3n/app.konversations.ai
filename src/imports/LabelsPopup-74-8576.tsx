import svgPaths from "./svg-yjk4my19xn";

function PriorityHighIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Priority High Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Priority High Icon">
          <path d={svgPaths.p33b8900} fill="var(--fill-0, #E7A188)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <PriorityHighIcon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function PriorityMediumIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Priority Medium Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-simple">
          <path d={svgPaths.p33b8900} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <PriorityMediumIcon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
    </div>
  );
}

function PriorityLowIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Priority Low Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Priority Low Icon">
          <path d={svgPaths.p33b8900} fill="var(--fill-0, #92D0A8)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <PriorityLowIcon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <SizeAndStyle />
      <SizeAndStyle1 />
      <SizeAndStyle2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Priority
      </p>
      <Container1 />
    </div>
  );
}

export default function LabelsPopup() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Labels-Popup">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}