import svgPaths from "./svg-o0tf84h1yh";

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="search">
          <path d={svgPaths.p257c3080} fill="var(--fill-0, #6A7282)" id="Vector" />
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
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search for agents
      </p>
    </div>
  );
}

function SearchBarSidebar() {
  return (
    <div className="bg-gray-100 relative rounded-[8px] shrink-0 w-full" data-name="Search Bar/Sidebar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function CheckSmall() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="check_small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_small">
          <path d={svgPaths.p1f089400} fill="var(--fill-0, white)" id="icon" />
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

function Avatar() {
  return (
    <div className="bg-[#aaacff] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[14px] text-center tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">P</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Custom
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Checkbox />
      <Avatar1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#6a7282] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#f5e4b5] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#1e2939] text-[14px] text-center tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar2 />
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#364153] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Checkbox1 />
      <Avatar3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#6a7282] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agents
      </p>
      <Frame3 />
    </div>
  );
}

export default function AgentsFilter() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="agents-filter">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <SearchBarSidebar />
          <Frame />
        </div>
      </div>
    </div>
  );
}