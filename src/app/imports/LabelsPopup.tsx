import svgPaths from "./svg-fj1eikzggx";

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="search">
          <path d={svgPaths.p257c3080} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon />
    </div>
  );
}

function Search() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Search">
      <DashIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search for labels
      </p>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Search Bar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function CreateLabelIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Create Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Create Label Icon">
          <path d={svgPaths.p89c4b60} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CreateLabelContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Create Label Container">
      <CreateLabelIcon />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create new label
      </p>
    </div>
  );
}

function LabelIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #CAAC41)" id="Primary" />
        </g>
      </svg>
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
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="bg-[#0320f5] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <CheckSmall />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
      <Checkbox />
    </div>
  );
}

function LabelIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #5865C6)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CheckSmall1() {
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

function Checkbox1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="bg-[#0320f5] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <CheckSmall1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon1 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
      <Checkbox1 />
    </div>
  );
}

function LabelIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #E53E3E)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon2 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        billing
      </p>
      <Checkbox2 />
    </div>
  );
}

function LabelIcon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #48BB79)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon3 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        settings
      </p>
      <Checkbox3 />
    </div>
  );
}

function LabelIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #DE6B20)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon4 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        notifications
      </p>
      <Checkbox4 />
    </div>
  );
}

function LabelIcon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #CD5AB6)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon5 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Source_Sans_Pro:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap">preferences</p>
      <Checkbox5 />
    </div>
  );
}

function LabelIcon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Label Icon">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #44B4F5)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <LabelIcon6 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Source_Sans_Pro:Regular',sans-serif] grow leading-[normal] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#5e6060] text-[14px] text-nowrap">support</p>
      <Checkbox6 />
    </div>
  );
}

function LabelItemContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Label Item Content">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
    </div>
  );
}

function Label7() {
  return <div className="bg-[#e3e3e4] h-[41px] rounded-[80px] shrink-0 w-[6px]" data-name="Label" />;
}

function LabelItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label Item">
      <LabelItemContent />
      <Label7 />
    </div>
  );
}

function LabelsListContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Labels List Content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        All labels
      </p>
      <LabelItem />
    </div>
  );
}

function LabelsList() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Labels List">
      <SearchBar />
      <CreateLabelContainer />
      <LabelsListContent />
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
        <p className="leading-[1.2] whitespace-pre">Add</p>
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

function LabelActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full" data-name="Label Actions">
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
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <LabelsList />
          <LabelActions />
        </div>
      </div>
    </div>
  );
}