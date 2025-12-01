import svgPaths from "./svg-8ipu73gcff";

function Avatar() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio
      </p>
    </div>
  );
}

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="check_small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_small">
          <path d={svgPaths.p1f089400} fill="var(--fill-0, #F9FAFB)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="box-border content-stretch flex items-center justify-center opacity-0 p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="bg-[#0320f5] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <CheckSmall />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar1 />
      <Checkbox />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777777] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned
      </p>
      <Frame />
    </div>
  );
}

function MainMainNavSearch() {
  return (
    <div className="bg-[#f2f3f3] h-[106px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#e3e8f0] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex h-[106px] items-start justify-between p-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal grow justify-end leading-[0] min-h-px min-w-px opacity-30 relative shrink-0 text-[#121212] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Add why you are assigning them this conversation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777777] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add a comment (optional)
      </p>
      <MainMainNavSearch />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Input />
      <Input1 />
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle />
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Assign</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle1 />
    </div>
  );
}

function ActionButtons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Action Buttons">
      <Button />
      <Button1 />
    </div>
  );
}

export default function LabelsPopup() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Labels-Popup">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
          <Frame1 />
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}