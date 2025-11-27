import svgPaths from "./svg-xwi0g5shfp";

function Layer() {
  return (
    <div className="absolute bottom-[-0.03%] left-0 right-0 top-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 123 14">
        <g id="Layer 1">
          <path d={svgPaths.p212ad480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-[-0.03%] contents left-0 right-0 top-0" data-name="Layer 4">
      <Layer />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-[122.027px]" data-name="Logo">
      <Layer1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-left">
          <path d={svgPaths.p24e3ee80} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon />
    </div>
  );
}

function LogoHeader() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Logo-Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[8px] py-0 relative w-full">
          <Logo />
          <div className="flex flex-row items-center self-stretch">
            <DashIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
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

function DashIcon1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon1 />
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Search">
      <DashIcon1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 2">
          <mask fill="white" id="path-1-inside-1_8_4917">
            <path d={svgPaths.p1d1d6d00} />
          </mask>
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" fillOpacity="0.1" />
          <path d={svgPaths.p3a50b680} fill="var(--stroke-0, white)" fillOpacity="0.05" mask="url(#path-1-inside-1_8_4917)" />
          <path d={svgPaths.p1b1c600} fill="var(--fill-0, white)" id="â" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[10px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 size-[16px]">
      <div aria-hidden="true" className="absolute border-[1px_1px_2px] border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        K
      </p>
    </div>
  );
}

function K() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="⌘+K">
      <Frame />
      <Frame1 />
    </div>
  );
}

function SearchBarSidebar() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] box-border content-stretch flex items-center justify-between p-[6px] relative rounded-[8px] shrink-0 w-[218px]" data-name="Search Bar/Sidebar">
      <Search />
      <K />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-pie">
          <path d={svgPaths.p32f535b0} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Insights
      </p>
    </div>
  );
}

function Insights() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Insights">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="inbox">
          <path d={svgPaths.p38a8d200} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
    </div>
  );
}

function Inbox() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Inbox">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="headphones-simple">
          <path d={svgPaths.p2cd8f700} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon4 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conversations
      </p>
    </div>
  );
}

function Conversations() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Conversations">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="graduation-cap">
          <path d={svgPaths.p213ea000} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon5 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Learning
      </p>
    </div>
  );
}

function Learning() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Learning">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="briefcase">
          <path d={svgPaths.p1c3e4c00} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon6 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Workforce
      </p>
    </div>
  );
}

function Wfm() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="WFM">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="cog">
          <path d={svgPaths.pb07d7b0} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon7() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon7 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Settings
      </p>
    </div>
  );
}

function Settings() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Settings">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Insights />
      <Inbox />
      <Conversations />
      <Learning />
      <Wfm />
      <Settings />
    </div>
  );
}

function SidebarTop() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow items-start min-h-px min-w-px relative shrink-0" data-name="sidebar-top">
      <LogoHeader />
      <SearchBarSidebar />
      <Items />
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-[#010a78] relative size-full" data-name="Sidebar">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center px-[8px] py-[16px] relative size-full">
          <SidebarTop />
        </div>
      </div>
    </div>
  );
}