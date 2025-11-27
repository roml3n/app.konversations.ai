import svgPaths from "./svg-srf9j7oda6";

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
          <path d={svgPaths.p315f41c0} fill="var(--fill-0, #01B386)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon2 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Insights
      </p>
    </div>
  );
}

function Insights() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Insights">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame33 />
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

function Frame34() {
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
          <Frame34 />
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

function Frame35() {
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
          <Frame35 />
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

function Frame36() {
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
          <Frame36 />
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

function Frame37() {
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
          <Frame37 />
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

function Frame38() {
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
          <Frame38 />
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

function Sidebar() {
  return (
    <div className="bg-[#010a78] box-border content-stretch flex flex-col gap-[24px] h-full items-center px-[8px] py-[16px] relative shrink-0 w-[234px]" data-name="Sidebar">
      <SidebarTop />
    </div>
  );
}

function Frame29() {
  return <div className="shrink-0 size-[100px]" />;
}

function Sidebar1() {
  return (
    <div className="bg-[#262262] content-stretch flex items-start relative self-stretch shrink-0 w-[234px]" data-name="Sidebar">
      <Sidebar />
      <Frame29 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-left">
          <path d={svgPaths.p1352fd00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrows() {
  return (
    <button className="block cursor-pointer opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
      <Icon8 />
    </button>
  );
}

function Icon9() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p1653fa00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrows1() {
  return (
    <div className="opacity-30 overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
      <Icon9 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Arrows />
      <Arrows1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Insights
      </p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame19 />
      <Frame11 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p1162be00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[20px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
      <Icon10 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon11 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame45 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 12:56
      </p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame47 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon12 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame57 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 11:02
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
      <Frame59 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-right">
          <path d={svgPaths.p2706ce00} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame60 />
      <Icon13 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon14 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame61 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon, 12:56
      </p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 222 222 222
      </p>
      <Frame62 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon15 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame64 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri, 12:56
      </p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 234 567 8901
      </p>
      <Frame65 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon16 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame67 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame68 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame69 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon17 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame70 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +91 233 4223 442
      </p>
      <Frame71 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame72 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon18 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame73 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        19/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jason Stingo
      </p>
      <Frame74 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame75 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="clock-four">
          <path d={svgPaths.p3fbb0600} fill="var(--fill-0, #A9BCC6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon19 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame76 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        18/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame77 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame48 />
      <Frame49 />
      <Frame50 />
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame55 />
      <Frame54 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Frame56 />
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function ClockRotateLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="clock-rotate-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="clock-rotate-left">
          <path d={svgPaths.p2716db80} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 bg-[#f1f4f6] content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <ClockRotateLeft />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
    </div>
  );
}

function Dialpad() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="dialpad">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="dialpad">
          <g id="Vector"></g>
          <path d={svgPaths.p3bcb0400} fill="var(--fill-0, #292F32)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <Dialpad />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dialer
      </p>
    </div>
  );
}

function UserGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user-group">
          <path d={svgPaths.pa48f500} fill="var(--fill-0, #6A7282)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <UserGroup />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contacts
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame41 />
          <Frame43 />
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function CallUi() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
      <Frame58 />
      <Frame44 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="phone">
          <path d={svgPaths.p321c9a40} fill="var(--fill-0, #4F595E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Call() {
  return (
    <div className="absolute bg-[#f4f7f8] box-border content-stretch flex gap-[10px] items-center left-0 p-[8px] rounded-[999px] top-0" data-name="call">
      <Icon20 />
    </div>
  );
}

function CallButton() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="call-button">
      <CallUi />
      <Call />
    </div>
  );
}

function Notifications() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="notifications" opacity="0.6">
          <path d={svgPaths.p1f61b300} fill="var(--fill-0, #1E2939)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[999px] shrink-0">
      <Notifications />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.28%_4.64%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 14">
        <g id="Group">
          <g id="Group_2">
            <path d={svgPaths.p11532600} fill="var(--fill-0, #262261)" id="Vector" />
            <path d={svgPaths.p387bb300} fill="var(--fill-0, #262261)" id="Vector_2" />
            <path d={svgPaths.p399da900} fill="var(--fill-0, #262261)" id="Vector_3" />
            <path d={svgPaths.p18463240} fill="var(--fill-0, #262261)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.pb0c6400} fill="var(--fill-0, #67CCE8)" id="Vector_5" />
            <path d={svgPaths.p20dec500} fill="var(--fill-0, #67CCE8)" id="Vector_6" />
          </g>
          <path d={svgPaths.p30c8d280} fill="var(--fill-0, #67CCE8)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[15.273px] relative shrink-0 w-[36px]" data-name="logo">
      <Group1 />
    </div>
  );
}

function AvatarPopoutOrgNo() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[4px] right-0 rounded-[8px] size-[40px] top-0" data-name="Avatar-Popout/org/no">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Logo1 />
    </div>
  );
}

function AvatarPopout() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Avatar-Popout">
      <AvatarPopoutOrgNo />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <CallButton />
      <Frame2 />
      <AvatarPopout />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex gap-[64px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between px-[30px] py-[16px] relative w-full">
          <Frame18 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Search1() {
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="absolute font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] left-[-15.5px] opacity-0 text-[#99a1af] text-[12px] text-nowrap top-0 tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Search...
      </p>
      <Search1 />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="basis-0 bg-[#f1f4f6] grow max-w-[32px] min-h-px min-w-[32px] relative rounded-[8px] shrink-0" data-name="search_bar">
      <div className="flex flex-row items-center max-w-inherit min-w-inherit size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center max-w-inherit min-w-inherit p-[8px] relative w-full">
          <Frame3 />
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

function Frame5() {
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
      <Frame5 />
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

function Frame6() {
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
      <Frame6 />
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

function Frame7() {
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
      <Frame7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        All agents
      </p>
      <CaretDown2 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0">
      <SearchBar />
      <DateFilter />
      <TopicsFilter />
      <AgentFilter />
    </div>
  );
}

function Icon21() {
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icon21 />
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
      <Frame9 />
    </div>
  );
}

function SubHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="SubHeader">
      <Frame20 />
      <ButtonDashExportReport />
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

function TabContents() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-center text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Executive Overview</p>
      </div>
      <Indicator />
    </div>
  );
}

function StateLayer() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative w-full">
          <TabContents />
        </div>
      </div>
    </div>
  );
}

function TabBase() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
      <StateLayer />
    </div>
  );
}

function TabContents1() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a8890] text-[14px] text-center text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Channel Perfomance</p>
      </div>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative w-full">
          <TabContents1 />
        </div>
      </div>
    </div>
  );
}

function TabBase1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
      <StateLayer1 />
    </div>
  );
}

function TabContents2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7a8890] text-[14px] text-center text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Agent Perfomance</p>
      </div>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col items-center justify-end px-[16px] py-0 relative w-full">
          <TabContents2 />
        </div>
      </div>
    </div>
  );
}

function TabBase2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end overflow-clip relative shrink-0" data-name="Tab-base">
      <StateLayer2 />
    </div>
  );
}

function TabGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tab group">
      <TabBase />
      <TabBase1 />
      <TabBase2 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
      <TabGroup />
    </div>
  );
}

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

function Frame84() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#5a5acd] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Call
      </p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#fdb63c] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Web Chat
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Freshdesk
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-center flex flex-wrap gap-[12px] items-center relative shrink-0 w-full">
      <Frame84 />
      <Frame83 />
      <Frame86 />
      <Frame85 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full">
      <PieLayer />
      <Frame87 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="basis-0 bg-[#fefefe] grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Conversation sources
          </p>
          <Frame88 />
        </div>
      </div>
    </div>
  );
}

function CircleInfo() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="circle-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="circle-info">
          <path d={svgPaths.p37669d00} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        CSAT prediction
      </p>
      <CircleInfo />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon22 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame122 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame124 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#202121] text-[24px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.2/1.0
      </p>
      <Frame23 />
    </div>
  );
}

function Frame94() {
  return <div className="bg-[#6ac18f] h-full rounded-[4px] shrink-0 w-[48px]" />;
}

function Frame97() {
  return (
    <div className="bg-[#ebeaee] content-stretch flex gap-[4px] items-center relative rounded-[4px] size-full">
      <Frame94 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame114 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "104.21875", "--transform-inner-height": "150.71875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function CircleInfo1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="circle-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="circle-info">
          <path d={svgPaths.p37669d00} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="basis-0 font-['Instrument_Sans:SemiBold',sans-serif] font-semibold grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">NPS</p>
        <p>likelihood</p>
      </div>
      <CircleInfo1 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon23 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame126 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame125 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#202121] text-[24px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.6/1.0
      </p>
      <Frame25 />
    </div>
  );
}

function Frame111() {
  return <div className="bg-[#67cce8] h-full rounded-[4px] shrink-0 w-[91px]" />;
}

function Frame112() {
  return (
    <div className="bg-[#ebeaee] content-stretch flex gap-[4px] items-center relative rounded-[4px] size-full">
      <Frame111 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame118 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "104.21875", "--transform-inner-height": "150.71875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

function CircleInfo2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="circle-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="circle-info">
          <path d={svgPaths.p37669d00} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] w-[81.556px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Repeat contact prob.
      </p>
      <CircleInfo2 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon24 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame128 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame127 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#202121] text-[24px] tracking-[0.12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.4/1.0
      </p>
      <Frame26 />
    </div>
  );
}

function Frame113() {
  return <div className="bg-[#ef7d00] h-full rounded-[4px] shrink-0 w-[72px]" />;
}

function Frame120() {
  return (
    <div className="bg-[#ebeaee] content-stretch flex gap-[4px] items-center relative rounded-[4px] size-full">
      <Frame113 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[16px] grow h-full items-start min-h-px min-w-px relative shrink-0">
      <Frame119 />
      <div className="basis-0 flex grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" style={{ "--transform-inner-width": "104.21875", "--transform-inner-height": "150.71875" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] size-full">
          <Frame120 />
        </div>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="basis-0 content-stretch flex gap-[12px] grow items-center min-h-px min-w-px relative shrink-0 w-full">
      <Frame115 />
      <Frame116 />
      <Frame117 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] self-stretch shrink-0 w-[368.667px]" data-name="Card">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-center overflow-clip p-[16px] relative rounded-[inherit] w-[368.667px]">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          AI prediction scores
        </p>
        <Frame102 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon25 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame129 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-40 relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        vs last week
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] min-w-full relative shrink-0 text-[#202121] text-[36px] tracking-[0.18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        90%
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resolution rate
      </p>
      <Frame27 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon26 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame130 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-40 relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        vs last week
      </p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] min-w-full relative shrink-0 text-[#202121] text-[36px] tracking-[0.18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        3min
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Average handle time
      </p>
      <Frame24 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p313bed00} fill="var(--fill-0, #45B273)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon27 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#45b273] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        22%
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame132 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-40 relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        vs last week
      </p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] min-w-full relative shrink-0 text-[#202121] text-[36px] tracking-[0.18px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        34%
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        % of calls resolved on first contact
      </p>
      <Frame28 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[337px]">
      <Frame123 />
      <Frame131 />
      <Frame133 />
    </div>
  );
}

function Card1() {
  return (
    <div className="basis-0 bg-[#fefefe] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Card">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Issue resolution
          </p>
          <Frame121 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row 2">
      <Frame30 />
      <Card />
      <Card1 />
    </div>
  );
}

function Frame134() {
  return <div className="bg-[#6ac18f] h-[13px] rounded-[4px] shrink-0 w-[79px]" />;
}

function Frame95() {
  return <div className="bg-[#85d6ec] h-[13px] rounded-[4px] shrink-0 w-[121px]" />;
}

function Frame96() {
  return <div className="basis-0 bg-[#e16262] grow h-[13px] min-h-px min-w-px rounded-[4px] shrink-0" />;
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <Frame134 />
      <Frame95 />
      <Frame96 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] tracking-[0.18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        211
      </p>
      <Frame135 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap tracking-[0.06px] w-[119px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Percent
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Total
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
      <Frame108 />
    </div>
  );
}

function Frame136() {
  return <div className="bg-[#6ac18f] rounded-[4px] shrink-0 size-[14px]" />;
}

function Frame98() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame136 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resolved
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] w-[118px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        32%
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        68
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame98 />
      <Frame105 />
    </div>
  );
}

function Frame137() {
  return <div className="bg-[#85d6ec] rounded-[4px] shrink-0 size-[14px]" />;
}

function Frame138() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame137 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Partially Resolved
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] w-[118px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        41%
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        86
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame138 />
      <Frame106 />
    </div>
  );
}

function Frame139() {
  return <div className="bg-[#e16262] rounded-[4px] shrink-0 size-[14px]" />;
}

function Frame140() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Frame139 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unresolved
      </p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex font-['Instrument_Sans:Regular',sans-serif] font-normal items-center justify-between leading-[1.2] relative shrink-0 text-[#5e6060] text-[14px] text-nowrap tracking-[0.07px] w-[118px] whitespace-pre">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        27%
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        57
      </p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame140 />
      <Frame107 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame99 />
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame103 />
      <Frame141 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame109 />
      <Frame104 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#fefefe] h-full relative rounded-[8px] shrink-0 w-[368.667px]" data-name="Card">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[16px] relative rounded-[inherit] w-[368.667px]">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Conversations
        </p>
        <Frame110 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Resolved
      </p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Partially resolved
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#da3b3b] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Unresolved
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame89 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="[grid-area:1_/_1] box-border content-center flex flex-wrap font-['Instrument_Sans:Regular',sans-serif] font-normal h-[16.951px] items-center justify-between leading-[1.2] ml-[44.61px] mt-[171.05px] relative text-[12px] text-center text-gray-950 text-nowrap tracking-[0.06px] w-[675.868px] whitespace-pre">
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
      <p className="opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aug 21
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-[166.352px] items-end justify-between ml-0 mt-0 relative text-[12px] text-gray-950 text-nowrap text-right tracking-[0.06px] w-[22.127px]">
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">2</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">0</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">-2</p>
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="[grid-area:1_/_1] h-[146.179px] ml-[44.82px] mt-[20.3px] relative w-[664.966px]" data-name="Line Chart">
      <div className="absolute inset-[-0.73%_-0.15%_-0.68%_-0.15%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 667 149">
          <g id="Line Chart">
            <path d={svgPaths.p1047e000} id="Vector 2" stroke="var(--stroke-0, #45B273)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p83b0178} id="Vector 4" stroke="var(--stroke-0, #67CCE8)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p2561fd00} id="Vector 3" stroke="var(--stroke-0, #E16262)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="basis-0 grid-cols-[max-content] grid-rows-[max-content] grow inline-grid leading-[0] min-h-px min-w-px place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-0 ml-[48.08px] mt-[166.16px] relative w-[673.257px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 674 1">
            <path d="M0 0.5H673.257" id="Y-axis grid" stroke="var(--stroke-0, #F0F0F0)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[44.61px] mt-[83.18px] relative w-[673.257px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 674 1">
            <path d="M0 0.5H673.257" id="Y-axis grid" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[44.61px] mt-[8.55px] relative w-[673.257px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 674 1">
            <path d="M0 0.5H673.257" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[48.08px] mt-[166.16px] relative w-[673.257px]" data-name="X-axis">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 674 1">
            <path d="M0 0.5H673.257" id="Y-axis grid" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <Frame93 />
      <Frame15 />
      <LineChart />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 bg-[#fefefe] box-border content-stretch flex flex-col gap-[4px] grow items-start mb-[-2px] min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <Group />
    </div>
  );
}

function ChartAxis() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <Frame8 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 bg-[#fefefe] grow h-full min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Conversation volume over time
          </p>
          <Frame92 />
          <ChartAxis />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <div className="flex flex-row items-center self-stretch">
        <Card2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Frame39 />
      </div>
    </div>
  );
}

function FaceSmileBeam() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="face-smile-beam">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="face-smile-beam">
          <path d={svgPaths.pf108f00} fill="var(--fill-0, #3DA067)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex items-center justify-center p-[9px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon">
      <FaceSmileBeam />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Title">
      <Icon28 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        78%
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            % positive conversations
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TotalConversations() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="total conversations">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Card3 />
      </div>
      <div aria-hidden="true" className="absolute border-[#45b273] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FaceFrownOpen() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="face-frown-open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="face-frown-open">
          <path d={svgPaths.p1c08e580} fill="var(--fill-0, #DA3B3B)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="bg-[#fae8e8] box-border content-stretch flex items-center justify-center p-[9px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon">
      <FaceFrownOpen />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Title">
      <Icon29 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        32%
      </p>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title1 />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            % negative conversations
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TotalConversations1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="total conversations">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Card4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#da3b3b] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FaceFrownOpen1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="face-frown-open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="face-frown-open">
          <path d={svgPaths.p1c08e580} fill="var(--fill-0, #45B273)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Icon30() {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex items-center justify-center p-[9px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon">
      <FaceFrownOpen1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Title">
      <Icon30 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Positive
      </p>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title2 />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Average client sentiment
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TotalConversations2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="total conversations">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Card5 />
      </div>
      <div aria-hidden="true" className="absolute border-[#45b273] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FaceFrownOpen2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="face-frown-open">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="face-frown-open">
          <path d={svgPaths.p1c08e580} fill="var(--fill-0, #62C3DD)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Icon31() {
  return (
    <div className="bg-[#d5eef7] box-border content-stretch flex items-center justify-center p-[9px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Icon">
      <FaceFrownOpen2 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Title">
      <Icon31 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[0.9] relative shrink-0 text-[#202121] text-[36px] text-nowrap tracking-[0.18px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Neutral
      </p>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#fefefe] relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Title3 />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Average agent sentiment
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function TotalConversations3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[9px] shrink-0" data-name="total conversations">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative rounded-[inherit] w-full">
        <Card6 />
      </div>
      <div aria-hidden="true" className="absolute border-[#62c3dd] border-[0px_0px_3px] border-solid inset-0 pointer-events-none rounded-[9px]" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex gap-[16px] grow items-center min-h-px min-w-px relative shrink-0">
      <TotalConversations />
      <TotalConversations1 />
      <TotalConversations2 />
      <TotalConversations3 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame82 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Positive
      </p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Neutral
      </p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#da3b3b] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Negative
      </p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame142 />
      <Frame143 />
      <Frame144 />
    </div>
  );
}

function YAxisLeft() {
  return (
    <div className="box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-full items-end justify-between leading-[1.2] px-[4px] py-0 relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] tracking-[0.06px]" data-name="yAxisLeft">
      <p className="h-[11px] relative shrink-0 w-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        15
      </p>
      <p className="relative shrink-0 size-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        10
      </p>
      <p className="h-[12px] relative shrink-0 w-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        5
      </p>
      <p className="h-[12px] relative shrink-0 w-[6px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        0
      </p>
    </div>
  );
}

function XLines() {
  return (
    <div className="absolute box-border content-stretch flex flex-col inset-0 items-start justify-between opacity-40 px-px py-[6px]" data-name="xLines">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 1">
            <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="491" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 1">
            <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="491" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 1">
            <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="491" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 491 1">
            <line id="Line" stroke="var(--stroke-0, black)" strokeOpacity="0.25" x2="491" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SingleBar() {
  return <div className="bg-[#45b273] h-[38px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar1() {
  return <div className="bg-[#67cce8] h-[28px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar2() {
  return <div className="bg-[#da3b3b] h-[32px] shrink-0 w-full" data-name="SingleBar" />;
}

function BarBlock() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar />
      <SingleBar1 />
      <SingleBar2 />
    </div>
  );
}

function BarGroup() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock />
        </div>
      </div>
    </div>
  );
}

function SingleBar3() {
  return <div className="bg-[#45b273] h-[7px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar4() {
  return <div className="bg-[#67cce8] h-[59px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar5() {
  return <div className="bg-[#da3b3b] h-[22px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar6() {
  return <div className="absolute inset-[81.48%_0.25px_0.34%_-0.09px]" data-name="SingleBar" />;
}

function BarBlock1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar3 />
      <SingleBar4 />
      <SingleBar5 />
      <SingleBar6 />
    </div>
  );
}

function BarGroup1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock1 />
        </div>
      </div>
    </div>
  );
}

function SingleBar7() {
  return <div className="bg-[#45b273] h-[24px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar8() {
  return <div className="bg-[#67cce8] h-[55px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar9() {
  return <div className="bg-[#da3b3b] h-[51px] shrink-0 w-full" data-name="SingleBar" />;
}

function BarBlock2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar7 />
      <SingleBar8 />
      <SingleBar9 />
    </div>
  );
}

function BarGroup2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock2 />
        </div>
      </div>
    </div>
  );
}

function SingleBar10() {
  return <div className="bg-[#45b273] h-[35px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar11() {
  return <div className="bg-[#67cce8] h-[54px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar12() {
  return <div className="bg-[#da3b3b] h-[32px] shrink-0 w-full" data-name="SingleBar" />;
}

function BarBlock3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar10 />
      <SingleBar11 />
      <SingleBar12 />
    </div>
  );
}

function BarGroup3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock3 />
        </div>
      </div>
    </div>
  );
}

function SingleBar13() {
  return <div className="bg-[#45b273] h-[56px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar14() {
  return <div className="bg-[#67cce8] h-[41px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar15() {
  return <div className="bg-[#da3b3b] h-[25px] shrink-0 w-full" data-name="SingleBar" />;
}

function BarBlock4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar13 />
      <SingleBar14 />
      <SingleBar15 />
    </div>
  );
}

function BarGroup4() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock4 />
        </div>
      </div>
    </div>
  );
}

function SingleBar16() {
  return <div className="bg-[#45b273] h-[9px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar17() {
  return <div className="bg-[#67cce8] h-[59px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar18() {
  return <div className="bg-[#da3b3b] h-[28px] shrink-0 w-full" data-name="SingleBar" />;
}

function SingleBar19() {
  return <div className="absolute inset-[68.44%_0.25px_0.31%_-0.09px]" data-name="SingleBar" />;
}

function BarBlock5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="BarBlock">
      <SingleBar16 />
      <SingleBar17 />
      <SingleBar18 />
      <SingleBar19 />
    </div>
  );
}

function BarGroup5() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="BarGroup">
      <div className="flex flex-row items-end justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-end justify-center px-[14px] py-0 relative size-full">
          <BarBlock5 />
        </div>
      </div>
    </div>
  );
}

function BarArea() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="BarArea">
      <BarGroup />
      <BarGroup1 />
      <BarGroup2 />
      <BarGroup3 />
      <BarGroup4 />
      <BarGroup5 />
    </div>
  );
}

function GraphiGrid() {
  return (
    <div className="relative size-full" data-name="Graphi&Grid">
      <XLines />
      <div className="absolute bottom-[-1.7px] flex items-center justify-center left-0 right-0 top-[5.7px]">
        <div className="flex-none h-[142px] scale-y-[-100%] w-[493px]">
          <BarArea />
        </div>
      </div>
    </div>
  );
}

function MainChart() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center mb-[-2px] min-h-px min-w-px relative shrink-0 w-full" data-name="MainChart">
      <YAxisLeft />
      <div className="basis-0 flex grow h-full items-center justify-center min-h-px min-w-px relative shrink-0">
        <div className="flex-none scale-y-[-100%] size-full">
          <GraphiGrid />
        </div>
      </div>
    </div>
  );
}

function XLabelBox() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon
      </p>
    </div>
  );
}

function XLabelBox1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tue
      </p>
    </div>
  );
}

function XLabelBox2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wed
      </p>
    </div>
  );
}

function XLabelBox3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thu
      </p>
    </div>
  );
}

function XLabelBox4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri
      </p>
    </div>
  );
}

function XLabelBox5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-end min-h-px min-w-px relative shrink-0" data-name="xLabelBox">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.7)] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sat
      </p>
    </div>
  );
}

function XAxis() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full" data-name="xAxis">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start pb-[8px] pl-[31px] pr-0 pt-0 relative w-full">
          <XLabelBox />
          <XLabelBox1 />
          <XLabelBox2 />
          <XLabelBox3 />
          <XLabelBox4 />
          <XLabelBox5 />
        </div>
      </div>
    </div>
  );
}

function ChartAxis1() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <MainChart />
      <XAxis />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 bg-[#fefefe] grow h-[277px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-start p-[16px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sentiment by day of week
          </p>
          <Frame145 />
          <ChartAxis1 />
        </div>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#45b273] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Positive
      </p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#67cce8] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Neutral
      </p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-[#da3b3b] h-[7.682px] opacity-80 rounded-[2px] shrink-0 w-[16.747px]" data-name="BarStrip" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Negative
      </p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame146 />
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function Axis() {
  return (
    <div className="[grid-area:1_/_1] font-['Instrument_Sans:Regular',sans-serif] font-normal grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.2] ml-[31.73px] mt-[152.72px] place-items-start relative text-[12px] text-center text-gray-950 tracking-[0.06px]" data-name="axis">
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[11px] mt-0 opacity-50 relative translate-x-[-50%] w-[22px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[90.51px] mt-0 opacity-50 relative translate-x-[-50%] w-[19px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tue
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[169.54px] mt-0 opacity-50 relative translate-x-[-50%] w-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wed
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[247.21px] mt-0 opacity-50 relative translate-x-[-50%] w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Thu
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[322.59px] mt-0 opacity-50 relative translate-x-[-50%] w-[13px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[395.38px] mt-0 opacity-50 relative translate-x-[-50%] w-[17px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sat
      </p>
      <p className="[grid-area:1_/_1] h-[12.282px] ml-[470.06px] mt-0 opacity-50 relative translate-x-[-50%] w-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sun
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal h-[148.505px] items-end justify-between ml-0 mt-0 relative text-[12px] text-gray-950 text-nowrap text-right tracking-[0.06px] w-[29.899px]">
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">0.4</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">0.2</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">0</p>
      </div>
      <div className="flex flex-col justify-center opacity-50 relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] text-nowrap whitespace-pre">-0.2</p>
      </div>
    </div>
  );
}

function LineGroup1() {
  return (
    <div className="absolute bottom-0 contents left-[4.17%] right-[4.17%] top-[1%]" data-name="LineGroup2">
      <div className="absolute bottom-0 left-[4.17%] right-[4.17%] top-[1%]" data-name="singleLineArea2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 142">
          <path d={svgPaths.p22665700} fill="url(#paint0_linear_2_5043)" id="singleLineArea2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_5043" x1="235.583" x2="235.583" y1="0" y2="141.57">
              <stop stopColor="#DA3B3B" stopOpacity="0.3" />
              <stop offset="1" stopColor="#DA3B3B" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[1%_4.17%_21%_4.17%]" data-name="singleLine2">
        <div className="absolute inset-[-0.49%_-0.07%_-0.52%_-0.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 113">
            <path d={svgPaths.p38857140} id="singleLine2" stroke="var(--stroke-0, #E16262)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineGroup2() {
  return (
    <div className="absolute bottom-0 contents left-[4.17%] right-[4.17%] top-[12%]" data-name="LineGroup3">
      <div className="absolute bottom-0 left-[4.17%] right-[4.17%] top-[12%]" data-name="singleLineArea3">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 126">
          <path d={svgPaths.p33cab400} fill="url(#paint0_linear_2_5105)" id="singleLineArea3" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_5105" x1="235.583" x2="235.583" y1="0" y2="125.84">
              <stop stopColor="#85D6EC" stopOpacity="0.3" />
              <stop offset="1" stopColor="#07DBFA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[12%_4.17%_15%_4.17%]" data-name="singleLine3">
        <div className="absolute inset-[-0.55%_-0.05%_-1.15%_-0.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 107">
            <path d={svgPaths.p36ac5f00} id="singleLine3" stroke="var(--stroke-0, #85D6EC)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineGroup() {
  return (
    <div className="absolute bottom-0 contents left-[4.17%] right-[4.17%] top-[8%]" data-name="LineGroup1">
      <div className="absolute bottom-0 left-[4.17%] right-[4.17%] top-[8%]" data-name="singleLineArea0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 472 132">
          <path d={svgPaths.p1fba2f0} fill="url(#paint0_linear_2_4929)" id="singleLineArea0" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_4929" x1="235.583" x2="235.583" y1="0" y2="131.56">
              <stop stopColor="#45B273" stopOpacity="0.3" />
              <stop offset="1" stopColor="#45B273" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[8%_4.17%_11%_4.17%]" data-name="singleLine0">
        <div className="absolute inset-[-0.77%_-0.09%_-0.68%_-0.09%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 473 118">
            <path d={svgPaths.p36af2c80} id="singleLine0" stroke="var(--stroke-0, #6AC18F)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function LineArea() {
  return (
    <div className="[grid-area:1_/_1] h-[143px] ml-[15px] mt-[5.35px] relative w-[514px]" data-name="LineArea">
      <LineGroup1 />
      <LineGroup2 />
      <LineGroup />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-0 ml-[34.19px] mt-[148.35px] relative w-[478.809px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 1">
            <path d="M0 0.5H478.809" id="Y-axis grid" stroke="var(--stroke-0, #F0F0F0)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[34.19px] mt-[96.96px] relative w-[477.344px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 1">
            <path d="M0 0.5H477.344" id="Y-axis grid" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[34.19px] mt-[51.55px] relative w-[477.344px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 1">
            <path d="M0 0.5H477.344" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[34.19px] mt-[6.66px] relative w-[477.344px]" data-name="Y-axis grid">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 1">
            <path d="M0 0.5H477.344" id="Y-axis grid" opacity="0.1" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-[34.19px] mt-[148.35px] relative w-[477.344px]" data-name="X-axis">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]" style={{ "--stroke-0": "rgba(113, 113, 122, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 478 1">
            <path d="M0 0.5H477.344" id="Y-axis grid" opacity="0.5" stroke="var(--stroke-0, #71717A)" />
          </svg>
        </div>
      </div>
      <Axis />
      <Frame16 />
      <LineArea />
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-[#fefefe] box-border content-stretch flex flex-col gap-[4px] grow items-start mb-[-2px] min-h-px min-w-px overflow-clip relative shrink-0 w-full">
      <Group2 />
    </div>
  );
}

function ChartAxis2() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Chart&Axis">
      <Frame12 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 bg-[#fefefe] grow h-[277px] min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[277px] items-start p-[16px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Sentiment trend
          </p>
          <Frame149 />
          <ChartAxis2 />
        </div>
      </div>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame40 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start justify-center p-[16px] relative w-full">
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6060] text-[13px] w-full">Sentiment distribution</p>
          <Frame81 />
          <Frame80 />
        </div>
      </div>
    </div>
  );
}

function ChevronsUpDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevrons-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableCellDateCreated() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f4f4f6] h-[34px] justify-self-stretch relative rounded-bl-[12px] rounded-tl-[12px] shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between p-[8px] relative w-full">
          <p className="basis-0 font-['Source_Sans_Pro:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7d7d] text-[13px]">Primary topic</p>
          <ChevronsUpDown />
        </div>
      </div>
    </div>
  );
}

function ChevronsUpDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevrons-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableCellDateCreated1() {
  return (
    <div className="[grid-area:1_/_2] bg-[#f4f4f6] h-[34px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between p-[8px] relative w-full">
          <p className="basis-0 font-['Source_Sans_Pro:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7d7d] text-[13px]">Total conversations</p>
          <ChevronsUpDown1 />
        </div>
      </div>
    </div>
  );
}

function ChevronsUpDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevrons-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableCellDateCreated2() {
  return (
    <div className="[grid-area:1_/_3] bg-[#f4f4f6] h-[34px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between p-[8px] relative w-full">
          <p className="basis-0 font-['Source_Sans_Pro:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7d7d] text-[13px]">Resolution rate</p>
          <ChevronsUpDown2 />
        </div>
      </div>
    </div>
  );
}

function ChevronsUpDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevrons-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableCellDateCreated3() {
  return (
    <div className="[grid-area:1_/_4] bg-[#f4f4f6] h-[34px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between p-[8px] relative w-full">
          <p className="basis-0 font-['Source_Sans_Pro:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7d7d] text-[13px]">CSAT prediction</p>
          <ChevronsUpDown3 />
        </div>
      </div>
    </div>
  );
}

function ChevronsUpDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevrons-up-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-up-down">
          <path d={svgPaths.p17a0fc80} id="Vector" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3042540} id="Vector_2" stroke="var(--stroke-0, #A0A3A4)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TableCellDateCreated4() {
  return (
    <div className="[grid-area:1_/_5] bg-[#f4f4f6] h-[34px] justify-self-stretch relative rounded-br-[12px] rounded-tr-[12px] shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[34px] items-center justify-between p-[8px] relative w-full">
          <p className="basis-0 font-['Source_Sans_Pro:SemiBold',sans-serif] grow leading-[18px] min-h-px min-w-px not-italic relative shrink-0 text-[#7a7d7d] text-[13px]">Avg handle time(min)</p>
          <ChevronsUpDown4 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated5() {
  return (
    <div className="[grid-area:2_/_2] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-end p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            124
          </p>
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup() {
  return <div className="bg-[#48bb79] h-[19px] rounded-[4px] shrink-0 w-[225px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated6() {
  return (
    <div className="[grid-area:2_/_3] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0.4
          </p>
          <ChipConversationLookup />
        </div>
      </div>
    </div>
  );
}

function ReactIconsBiSolidStar() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="react-icons/BiSolidStar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChipConversationLookup1() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
      <ReactIconsBiSolidStar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.69
      </p>
    </div>
  );
}

function TableCellDateCreated7() {
  return (
    <div className="[grid-area:2_/_4] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <ChipConversationLookup1 />
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup2() {
  return <div className="bg-[#9fdbee] h-[19px] rounded-[4px] shrink-0 w-[117px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated8() {
  return (
    <div className="[grid-area:2_/_5] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            42
          </p>
          <ChipConversationLookup2 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated9() {
  return (
    <div className="[grid-area:3_/_1] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] h-[51px] items-center p-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topic Name
          </p>
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup3() {
  return <div className="bg-[#48bb79] h-[19px] rounded-[4px] shrink-0 w-[150px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated10() {
  return (
    <div className="[grid-area:3_/_3] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0.4
          </p>
          <ChipConversationLookup3 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsBiSolidStar1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="react-icons/BiSolidStar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChipConversationLookup4() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
      <ReactIconsBiSolidStar1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.69
      </p>
    </div>
  );
}

function TableCellDateCreated11() {
  return (
    <div className="[grid-area:3_/_4] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <ChipConversationLookup4 />
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup5() {
  return <div className="bg-[#9fdbee] h-[19px] rounded-[4px] shrink-0 w-[11px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated12() {
  return (
    <div className="[grid-area:3_/_5] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            6
          </p>
          <ChipConversationLookup5 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated13() {
  return (
    <div className="[grid-area:4_/_1] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topic Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated14() {
  return (
    <div className="[grid-area:4_/_2] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-end p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            121
          </p>
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup6() {
  return <div className="bg-[#48bb79] h-[19px] rounded-[4px] shrink-0 w-[75px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated15() {
  return (
    <div className="[grid-area:4_/_3] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[51px] items-center p-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0.4
          </p>
          <ChipConversationLookup6 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsBiSolidStar2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="react-icons/BiSolidStar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChipConversationLookup7() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
      <ReactIconsBiSolidStar2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.69
      </p>
    </div>
  );
}

function TableCellDateCreated16() {
  return (
    <div className="[grid-area:4_/_4] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <ChipConversationLookup7 />
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup8() {
  return <div className="bg-[#9fdbee] h-[19px] rounded-[4px] shrink-0 w-[21px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated17() {
  return (
    <div className="[grid-area:4_/_5] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            8
          </p>
          <ChipConversationLookup8 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated18() {
  return (
    <div className="[grid-area:5_/_1] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topic Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated19() {
  return (
    <div className="[grid-area:5_/_2] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-end p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            54
          </p>
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup9() {
  return <div className="bg-[#48bb79] h-[19px] rounded-[4px] shrink-0 w-[192px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated20() {
  return (
    <div className="[grid-area:5_/_3] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0.4
          </p>
          <ChipConversationLookup9 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsBiSolidStar3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="react-icons/BiSolidStar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChipConversationLookup10() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
      <ReactIconsBiSolidStar3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.69
      </p>
    </div>
  );
}

function TableCellDateCreated21() {
  return (
    <div className="[grid-area:5_/_4] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <ChipConversationLookup10 />
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup11() {
  return <div className="bg-[#9fdbee] h-[19px] rounded-[4px] shrink-0 w-[101px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated22() {
  return (
    <div className="[grid-area:5_/_5] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[51px] items-center p-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            32
          </p>
          <ChipConversationLookup11 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated23() {
  return (
    <div className="[grid-area:6_/_1] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topic Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated24() {
  return (
    <div className="[grid-area:6_/_2] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-end p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            43
          </p>
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup12() {
  return <div className="bg-[#48bb79] h-[19px] rounded-[4px] shrink-0 w-[147px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated25() {
  return (
    <div className="[grid-area:6_/_3] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            0.4
          </p>
          <ChipConversationLookup12 />
        </div>
      </div>
    </div>
  );
}

function ReactIconsBiSolidStar4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="react-icons/BiSolidStar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="react-icons/BiSolidStar">
          <path d={svgPaths.p2024300} fill="var(--fill-0, #E2C148)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChipConversationLookup13() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="chip/conversation-lookup">
      <ReactIconsBiSolidStar4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        0.69
      </p>
    </div>
  );
}

function TableCellDateCreated26() {
  return (
    <div className="[grid-area:6_/_4] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] h-[51px] items-center p-[8px] relative w-full">
          <ChipConversationLookup13 />
        </div>
      </div>
    </div>
  );
}

function ChipConversationLookup14() {
  return <div className="bg-[#9fdbee] h-[19px] rounded-[4px] shrink-0 w-[25px]" data-name="chip/conversation-lookup" />;
}

function TableCellDateCreated27() {
  return (
    <div className="[grid-area:6_/_5] place-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            12
          </p>
          <ChipConversationLookup14 />
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated28() {
  return (
    <div className="[grid-area:2_/_1] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] h-[51px] items-center p-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Topic Name
          </p>
        </div>
      </div>
    </div>
  );
}

function TableCellDateCreated29() {
  return (
    <div className="[grid-area:3_/_2] h-[51px] justify-self-stretch relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] h-[51px] items-center justify-end p-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            82
          </p>
        </div>
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="grid grid-cols-[216px_164px_minmax(0px,_1fr)_127px_minmax(0px,_1fr)] grid-rows-[repeat(6,_fit-content(100%))] h-[289px] relative shrink-0 w-full" data-name="table">
      <TableCellDateCreated />
      <TableCellDateCreated1 />
      <TableCellDateCreated2 />
      <TableCellDateCreated3 />
      <TableCellDateCreated4 />
      <TableCellDateCreated5 />
      <TableCellDateCreated6 />
      <TableCellDateCreated7 />
      <TableCellDateCreated8 />
      <TableCellDateCreated9 />
      <TableCellDateCreated10 />
      <TableCellDateCreated11 />
      <TableCellDateCreated12 />
      <TableCellDateCreated13 />
      <TableCellDateCreated14 />
      <TableCellDateCreated15 />
      <TableCellDateCreated16 />
      <TableCellDateCreated17 />
      <TableCellDateCreated18 />
      <TableCellDateCreated19 />
      <TableCellDateCreated20 />
      <TableCellDateCreated21 />
      <TableCellDateCreated22 />
      <TableCellDateCreated23 />
      <TableCellDateCreated24 />
      <TableCellDateCreated25 />
      <TableCellDateCreated26 />
      <TableCellDateCreated27 />
      <TableCellDateCreated28 />
      <TableCellDateCreated29 />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-left" opacity="0.2">
          <path d={svgPaths.p4d7d300} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-right">
          <path d={svgPaths.p4376000} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function DateFilter1() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[8px] shrink-0" data-name="Date Filter">
      <CaretLeft />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 - 5 of 12
      </p>
      <CaretRight />
    </div>
  );
}

function PaginationTable() {
  return (
    <div className="relative shrink-0 w-full" data-name="pagination–table">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[24px] items-center justify-end px-[4px] py-0 relative w-full">
          <DateFilter1 />
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="table">
      <Table />
      <PaginationTable />
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#fefefe] h-[388.5px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[388.5px] items-start p-[16px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Top trending topics
          </p>
          <Table1 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Row />
      <Frame32 />
      <Frame17 />
      <Frame31 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-0 px-[30px] relative w-full">
          <SubHeader />
          <Tabs />
          <Frame21 />
        </div>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Main">
      <Header />
      <Frame22 />
    </div>
  );
}

function MainWrapper() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Main-Wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center pl-0 pr-[8px] py-[8px] relative w-full">
          <Main />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Sidebar1 />
      <MainWrapper />
    </div>
  );
}

export default function InsightsExecutiveOverview() {
  return (
    <div className="bg-[#010a78] content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Insights – Executive Overview">
      <Frame14 />
    </div>
  );
}