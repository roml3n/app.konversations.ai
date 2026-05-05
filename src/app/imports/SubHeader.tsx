import svgPaths from "./svg-qweb8b8w3s";

function Search() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.pba9f400} fill="var(--fill-0, #364153)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] left-[-15.5px] opacity-0 text-[#99a1af] text-[12px] text-nowrap top-0 tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search...
      </p>
      <Search />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-[#f1f4f6] grow max-w-[32px] min-h-px min-w-[32px] relative rounded-[8px] shrink-0" data-name="search_bar">
      <div className="flex flex-row items-center max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center max-w-inherit min-w-inherit p-[8px] relative w-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar" opacity="0.6">
          <path d={svgPaths.p10e710c0} fill="var(--fill-0, #6A7282)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Calendar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jul 31, 2024 - Today
      </p>
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #99A1AF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function DateFilter() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Date Filter">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame1 />
      <CaretDown />
    </div>
  );
}

function SquarePollHorizontal() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="square-poll-horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="square-poll-horizontal">
          <path d={svgPaths.p3b41c400} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
      <SquarePollHorizontal />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Topics
      </p>
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function TopicsFilter() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Topics Filter">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All topics
      </p>
      <CaretDown1 />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="profile">
          <path d={svgPaths.p314d5100} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center opacity-60 relative shrink-0">
      <Profile />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Agent
      </p>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p3faa2700} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function AgentFilter() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0" data-name="Agent Filter">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Frame3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All agents
      </p>
      <CaretDown2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <SearchBar />
      <DateFilter />
      <TopicsFilter />
      <AgentFilter />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-right-to-file">
          <path d={svgPaths.p2c9f8300} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Export Report
      </p>
    </div>
  );
}

function ButtonDashExportReport() {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#ffffff] gap-[3px] items-center px-[10px] py-[8px] relative rounded-[8px] shrink-0 to-[#f1f1f1]" data-name="Button/Dash/Export Report">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <Frame4 />
    </div>
  );
}

export default function SubHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="SubHeader">
      <Frame5 />
      <ButtonDashExportReport />
    </div>
  );
}