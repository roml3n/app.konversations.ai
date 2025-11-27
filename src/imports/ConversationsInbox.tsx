import svgPaths from "./svg-j0evf9l7bj";
import imgProfImg from "figma:asset/836289d6df84eab2ac2d1f2d0f1dcd527f30304d.png";

function Layer() {
  return (
    <div className="absolute bottom-[-357.27%] left-0 right-[-357.15%] top-0" data-name="Layer 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 558 65">
        <g id="Layer 1">
          <path d={svgPaths.p1e1a7000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-[-357.27%] contents left-0 right-[-357.15%] top-0" data-name="Layer 4">
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
        <g clipPath="url(#clip0_2_5067)" id="search">
          <path d={svgPaths.p39de7c00} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_5067">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
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
          <mask fill="white" id="path-1-inside-1_18_16618">
            <path d={svgPaths.p1d1d6d00} />
          </mask>
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" fillOpacity="0.1" />
          <path d={svgPaths.p3a50b680} fill="var(--stroke-0, white)" fillOpacity="0.05" mask="url(#path-1-inside-1_18_16618)" />
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

function Frame24() {
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
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="home-lg-alt">
          <path d={svgPaths.p2d862500} fill="var(--fill-0, #01B386)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Sidebar Menu">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[8px] relative w-full">
          <Frame23 />
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

function Frame25() {
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
          <Frame25 />
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

function Frame26() {
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
          <Frame26 />
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

function Frame28() {
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
          <Frame28 />
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

function Frame29() {
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
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Items">
      <Insights />
      <SidebarMenu />
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
    <div className="bg-[#010a78] box-border content-stretch flex flex-col gap-[24px] h-full items-center px-[8px] py-[16px] relative shrink-0" data-name="Sidebar">
      <SidebarTop />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="bg-[#262262] content-stretch flex h-full items-start relative shrink-0" data-name="Sidebar">
      <Sidebar />
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[12px] pr-0 py-0 relative w-full">
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#161a1c] text-[20px] text-nowrap whitespace-pre">Inbox</p>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_18_16636)" id="inbox">
          <path d={svgPaths.p1e430e00} fill="var(--fill-0, #01B386)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_18_16636">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DashIcon8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon8 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon8 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Messages
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="bg-[#e3e3e4] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame47 />
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            23
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="at">
          <path d={svgPaths.p33dffe00} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[22px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon9 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mentions
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame54 />
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            4
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_18_16627)" id="user-tag">
          <path d={svgPaths.pdcc1880} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_18_16627">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DashIcon10() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon10 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon10 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned to me
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame55 />
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            2
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame33 />
      <Frame32 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame66 />
    </div>
  );
}

function CaretDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-down">
          <path d={svgPaths.p3259f0c2} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <CaretDown />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Channels
      </p>
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="add">
          <path d={svgPaths.p3355f200} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame122() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <Frame19 />
          <Add />
        </div>
      </div>
    </div>
  );
}

function ChannelIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="channel-icon">
          <path d={svgPaths.pa71cb00} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
    </div>
  );
}

function ChannelIcon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="globe">
          <path d={svgPaths.p34884780} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Web Chat
      </p>
    </div>
  );
}

function ChannelIcon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <path d={svgPaths.p23476550} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Calls
      </p>
    </div>
  );
}

function ChannelIcon3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15.93px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_17_9318)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p18c9eb80} fill="var(--fill-0, #7A8890)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_17_9318">
            <rect fill="white" height="16" width="15.9296" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function ChannelIcon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_17_9308)" id="channel-icon">
          <path d={svgPaths.p20809780} fill="var(--fill-0, #4F595E)" id="Vector" />
          <path d={svgPaths.p20809780} fill="var(--fill-0, #7A8890)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_9308">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Instagram
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-[0.79%] left-[0.34%] right-[0.34%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.pfb87da0} fill="var(--fill-0, #7A8890)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ChannelIcon5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="channel-icon">
      <Group />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon5 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Messenger
      </p>
    </div>
  );
}

function ChannelIcon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="channel-icon">
          <path d={svgPaths.p1d698d00} fill="var(--fill-0, #7A8890)" id="Vector" />
          <path d={svgPaths.pe929800} fill="var(--fill-0, #7A8890)" id="Vector_2" />
          <path d={svgPaths.p3e8ee880} fill="var(--fill-0, #7A8890)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon6 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jira
      </p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[36px] py-[8px] relative w-full">
          <Frame53 />
          <Frame50 />
          <Frame49 />
          <Frame48 />
          <Frame56 />
          <Frame51 />
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="bg-[#e8edf0] box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Items">
      <Frame122 />
      <Frame72 />
    </div>
  );
}

function CaretDown1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-down">
          <path d={svgPaths.p3259f0c2} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <CaretDown1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Labels
      </p>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="add">
          <path d={svgPaths.p3355f200} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <Frame20 />
          <Add1 />
        </div>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #D08700)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[rgba(202,172,65,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle />
    </div>
  );
}

function Tag1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #5258FE)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-[rgba(90,90,205,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
    </div>
  );
}

function EllipsisVertical() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ellipsis-vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ellipsis-vertical">
          <path d={svgPaths.p3b17af00} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <SizeAndStyle1 />
      <EllipsisVertical />
    </div>
  );
}

function Tag2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E53E3E)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle2() {
  return (
    <div className="bg-[rgba(229,62,62,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        billing
      </p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle2 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #01B386)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle3() {
  return (
    <div className="bg-[rgba(72,187,121,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        settings
      </p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle3 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #FF6900)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle4() {
  return (
    <div className="bg-[rgba(222,107,32,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        notifications
      </p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle4 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #CD5AB6)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle5() {
  return (
    <div className="bg-[rgba(205,90,182,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag5 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        preferences
      </p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle5 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #48C3E2)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle6() {
  return (
    <div className="bg-[rgba(72,195,226,0.2)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag6 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        support
      </p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle6 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start pl-[36px] pr-[12px] py-0 relative w-full">
          <Frame123 />
          <Frame124 />
          <Frame125 />
          <Frame126 />
          <Frame127 />
          <Frame128 />
          <Frame129 />
        </div>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="bg-[#e8edf0] box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Items">
      <Frame131 />
      <Frame67 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Items1 />
      <Items2 />
    </div>
  );
}

function ChatSidebar() {
  return (
    <div className="bg-[#f4f7f8] h-full relative shrink-0 w-[218px]" data-name="chat_sidebar">
      <div className="box-border content-stretch flex flex-col gap-[48px] h-full items-start overflow-clip px-[16px] py-[24px] relative rounded-[inherit] w-[218px]">
        <Frame84 />
        <Frame121 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e8edf0] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-left">
          <path d={svgPaths.p1352fd00} fill="var(--fill-0, #292F32)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Arrows() {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrows">
      <Icon11 />
    </div>
  );
}

function Icon12() {
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
      <Icon12 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Arrows />
      <Arrows1 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="home-lg-alt">
          <path d={svgPaths.p2d862500} fill="var(--fill-0, #0320F5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon13 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <DashIcon11 />
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame17 />
      <Frame5 />
    </div>
  );
}

function Icon14() {
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

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[20px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
      <Icon14 />
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

function Frame76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon15 />
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
        Yesterday, 12:56
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

function Frame79() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame78 />
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

function Frame90() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon16 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame90 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 11:02
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
      <Frame91 />
    </div>
  );
}

function Icon17() {
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

function Frame80() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame92 />
      <Icon17 />
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

function Frame94() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon18 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame94 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon, 12:56
      </p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 222 222 222
      </p>
      <Frame95 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame96 />
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

function Frame98() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon19 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame98 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri, 12:56
      </p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 234 567 8901
      </p>
      <Frame99 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame100 />
    </div>
  );
}

function Icon20() {
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

function Frame101() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon20 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame101 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame102 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame103 />
    </div>
  );
}

function Icon21() {
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

function Frame104() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon21 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame104 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +91 233 4223 442
      </p>
      <Frame105 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame106 />
    </div>
  );
}

function Icon22() {
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

function Frame108() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon22 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame108 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        19/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jason Stingo
      </p>
      <Frame109 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame110 />
    </div>
  );
}

function Icon23() {
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

function Frame111() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon23 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame111 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        18/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame112 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame113 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame79 />
      <Frame80 />
      <Frame81 />
      <Frame82 />
      <Frame83 />
      <Frame107 />
      <Frame86 />
      <Frame85 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Frame87 />
          <Frame114 />
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

function Frame73() {
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

function Frame69() {
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

function Frame68() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <UserGroup />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contacts
      </p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame73 />
          <Frame69 />
          <Frame68 />
        </div>
      </div>
    </div>
  );
}

function CallUi() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
      <Frame89 />
      <Frame75 />
    </div>
  );
}

function Icon24() {
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
      <Icon24 />
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
            <path d={svgPaths.p30b83100} fill="var(--fill-0, #262261)" id="Vector" />
            <path d={svgPaths.p9a87b00} fill="var(--fill-0, #262261)" id="Vector_2" />
            <path d={svgPaths.p326fbec0} fill="var(--fill-0, #262261)" id="Vector_3" />
            <path d={svgPaths.p1712b280} fill="var(--fill-0, #262261)" id="Vector_4" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p20714d80} fill="var(--fill-0, #67CCE8)" id="Vector_5" />
            <path d={svgPaths.p1d2cbf00} fill="var(--fill-0, #67CCE8)" id="Vector_6" />
          </g>
          <path d={svgPaths.pbd5fe00} fill="var(--fill-0, #67CCE8)" id="Vector_7" />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <CallButton />
      <Frame2 />
      <AvatarPopout />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex gap-[64px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[16px] relative w-full">
          <Frame16 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative size-[14px]" data-name="caret-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-right">
          <path d={svgPaths.p98dc900} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6060] text-[14px] text-nowrap whitespace-pre">Open</p>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "13.984375", "--transform-inner-height": "13.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <CaretRight />
        </div>
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="message">
          <path d={svgPaths.p12fac8a0} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[3px] items-center relative shrink-0">
      <Icon25 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4a5565] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Default
      </p>
    </div>
  );
}

function CaretDown2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="caret-down">
          <path d={svgPaths.p20f73d00} fill="var(--fill-0, #6A7282)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ChannelSelector() {
  return (
    <div className="bg-white box-border content-stretch flex gap-px items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="channel selector">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Frame71 />
      <CaretDown2 />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Items3() {
  return (
    <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Items">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[52px] items-center justify-between p-[16px] relative w-full">
          <Frame21 />
          <ChannelSelector />
        </div>
      </div>
    </div>
  );
}

function ProfImg() {
  return (
    <div className="bg-[#a3b5f0] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg />
    </div>
  );
}

function MsgPreview() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#404141] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chat with @leeroyjenkins
      </p>
      <div className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#7a7d7d] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hi, I have an issue with my internet, it keeps going off</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Please ping me when done.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Regards,</p>
        <p>Saito</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <Frame36 />
      <MsgPreview />
    </div>
  );
}

function ChannelIcon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_17_9213)" id="channel-icon">
          <path d={svgPaths.p20809780} fill="var(--fill-0, #364153)" id="Vector" />
          <path d={svgPaths.p20809780} fill="var(--fill-0, #364153)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_17_9213">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        now
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left />
      <div className="flex flex-row items-end self-stretch">
        <Frame115 />
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame39 />
        </div>
      </div>
    </div>
  );
}

function ProfImg1() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg1 />
    </div>
  );
}

function MsgPreview1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Issue with my account
      </p>
      <div className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          Hi there, Acme team!
          <br aria-hidden="true" />
          {`My account freezes everytime I log in, `}
        </p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Please ping me when done.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Regards,</p>
        <p>Saito</p>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <Frame40 />
      <MsgPreview1 />
    </div>
  );
}

function ChannelIcon8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15.93px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_17_9327)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p18c9eb80} fill="var(--fill-0, #364153)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_17_9327">
            <rect fill="white" height="16" width="15.9296" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon8 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20m
      </p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left1 />
      <div className="flex flex-row items-end self-stretch">
        <Frame116 />
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function ProfImg2() {
  return (
    <div className="bg-[#f0bfa3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg2 />
    </div>
  );
}

function MsgPreview2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
      <div className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Subject: Lorem ipsum</p>
        <p className="mb-0">Hi, I have an issue with my internet, it keeps going off</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Please ping me when done.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Regards,</p>
        <p>Saito</p>
      </div>
    </div>
  );
}

function Left2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <Frame42 />
      <MsgPreview2 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute bottom-[0.79%] left-[0.34%] right-[0.34%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <path d={svgPaths.pfb87da0} fill="var(--fill-0, #364153)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function ChannelIcon9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="channel-icon">
      <Group2 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1d
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left2 />
      <div className="flex flex-row items-end self-stretch">
        <Frame117 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame43 />
        </div>
      </div>
    </div>
  );
}

function ProfImg3() {
  return (
    <div className="bg-[#c0f0a3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg3 />
    </div>
  );
}

function MsgPreview3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Internet problems
      </p>
      <div className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hi, I have an issue with my internet, it keeps going off</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Please ping me when done.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Regards,</p>
        <p>Saito</p>
      </div>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[162px]" data-name="left">
      <Frame44 />
      <MsgPreview3 />
    </div>
  );
}

function ChannelIcon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <path d={svgPaths.p23476550} fill="var(--fill-0, #364153)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon10 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1d
      </p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left3 />
      <div className="flex flex-row items-end self-stretch">
        <Frame132 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function ProfImg4() {
  return (
    <div className="bg-[#f0efa3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg4 />
    </div>
  );
}

function MsgPreview4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Internet problems
      </p>
      <div className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Hi, I have an issue with my internet, it keeps going off</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Please ping me when done.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">Regards,</p>
        <p>Saito</p>
      </div>
    </div>
  );
}

function Left4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <Frame57 />
      <MsgPreview4 />
    </div>
  );
}

function ChannelIcon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <path d={svgPaths.p23476550} fill="var(--fill-0, #364153)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon11 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1d
      </p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left4 />
      <div className="flex flex-row items-end self-stretch">
        <Frame133 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function ProfImg5() {
  return (
    <div className="bg-[#bce5f3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        S
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0">
      <ProfImg5 />
    </div>
  );
}

function MsgPreview5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        support@jsmob.ke
      </p>
      <p className="-webkit-box font-['Instrument_Sans:Regular',sans-serif] font-normal h-[29px] overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Refund issued on Purchase #23TY67 for account 223REJ9
      </p>
    </div>
  );
}

function Left5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <Frame59 />
      <MsgPreview5 />
    </div>
  );
}

function ChannelIcon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="channel-icon">
          <path d={svgPaths.p1d698d00} fill="var(--fill-0, #364153)" id="Vector" />
          <path d={svgPaths.pe929800} fill="var(--fill-0, #364153)" id="Vector_2" />
          <path d={svgPaths.p3e8ee880} fill="var(--fill-0, #364153)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0">
      <ChannelIcon12 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1mo
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0">
      <Left5 />
      <div className="flex flex-row items-end self-stretch">
        <Frame134 />
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <Frame60 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Frame30 />
      <Frame34 />
      <Frame35 />
      <Frame37 />
      <Frame38 />
      <Frame61 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-0 px-[16px] relative size-full">
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full">
      <Items3 />
      <Frame45 />
    </div>
  );
}

function SizeAndStyle7() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6060] text-[12px] text-nowrap whitespace-pre">Load more</p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="h-full max-w-[324px] min-w-[234px] relative shrink-0 w-[234px]">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-center max-w-inherit min-w-inherit overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] w-[234px]">
        <Frame135 />
        <SizeAndStyle7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ChartSimple() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chart-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-simple">
          <path d={svgPaths.p33b8900} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle8() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <ChartSimple />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medium
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Spinner() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="spinner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="spinner">
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #AAACFF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle9() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Spinner />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Inbox
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <SizeAndStyle8 />
      <SizeAndStyle9 />
    </div>
  );
}

function Tag7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tag">
          <path d={svgPaths.p306c3500} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0">
      <Tag7 />
    </div>
  );
}

function ProfImg6() {
  return (
    <div className="bg-[#aaacff] box-border content-stretch flex flex-col gap-[10px] items-center justify-center mr-[-4px] relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[10px] text-nowrap whitespace-pre">P</p>
    </div>
  );
}

function ProfImg7() {
  return (
    <div className="bg-[#e78f8f] box-border content-stretch flex flex-col gap-[10px] items-center justify-center mr-[-4px] relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] pointer-events-none rounded-[1001px]" />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[10px] text-nowrap whitespace-pre">N</p>
    </div>
  );
}

function ProfImg8() {
  return (
    <div className="mr-[-4px] pointer-events-none relative rounded-[999px] shrink-0 size-[18px]" data-name="prof-img">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      <div aria-hidden="true" className="absolute border-2 border-[#fefefe] border-solid inset-[-2px] rounded-[1001px]" />
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex items-center pl-0 pr-[4px] py-0 relative shrink-0">
      <ProfImg6 />
      <ProfImg7 />
      <ProfImg8 />
    </div>
  );
}

function CaretDown3() {
  return (
    <div className="relative size-[16px]" data-name="caret-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-down">
          <path d={svgPaths.p322c5780} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle10() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Frame137 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <CaretDown3 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function SizeAndStyle11() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assign
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame97 />
      <SizeAndStyle10 />
      <SizeAndStyle11 />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="chat-header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[6px] relative w-full">
          <Frame136 />
          <Frame27 />
        </div>
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E2C148)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle12() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag8 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">account</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <SizeAndStyle12 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202121] text-[18px] text-nowrap whitespace-pre">Issue with my account</p>
      <Frame138 />
    </div>
  );
}

function GoArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="GoArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="GoArrowUpRight">
          <path d={svgPaths.p38a1ba80} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle13() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center pl-[8px] pr-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#edf1f4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Log to CRM
      </p>
      <GoArrowUpRight />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function EllipsisH() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ellipsis-h">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ellipsis-h">
          <path d={svgPaths.p3dc6cc00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle14() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#edf1f4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <EllipsisH />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <SizeAndStyle13 />
      <SizeAndStyle14 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
          <Frame139 />
          <Frame140 />
        </div>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]">
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <ChatHeader />
      <Frame70 />
    </div>
  );
}

function ProfImg9() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function ChannelIcon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_17_9187)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p2a885700} fill="var(--fill-0, #364153)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_17_9187">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChatChannel() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <ChannelIcon13 />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap whitespace-pre">WhatsApp</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap whitespace-pre">
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif]">Saito Watanashi</span>
        <span>{` via`}</span>
      </p>
      <ChatChannel />
    </div>
  );
}

function FileImage() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p26921480} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <FileImage />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        DSC-20240423092342.png
      </p>
    </div>
  );
}

function SizeAndStyle15() {
  return (
    <div className="bg-[#fefefe] relative rounded-[88px] shrink-0 w-full" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[6px] py-[4px] relative w-full">
          <Frame93 />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            123KB
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame143() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <div className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="mb-0">
              Hi there, Acme team!
              <br aria-hidden="true" />
              <br aria-hidden="true" />
              My account freezes everytime I log in, I keep getting some kind of error and the homepage keeps loading indefinitely.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">See the screenshot attached. I hope you can get it fixed soon because I need to make an important business inquiry.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Please ping me when done.</p>
            <p className="mb-0">&nbsp;</p>
            <p className="mb-0">Regards,</p>
            <p>Saito</p>
          </div>
          <SizeAndStyle15 />
        </div>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <Frame142 />
      <Frame143 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg9 />
          <Frame144 />
        </div>
      </div>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        You
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#d6d7ff] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hey Saito, this is Jane with Acme Support. Kindly allow us some time to look into this matter and we shall get back to you promptly.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame146() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame145 />
      <Frame6 />
    </div>
  );
}

function ProfImg10() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#b4bbee] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[36px] pr-0 py-0 relative w-full">
          <Frame146 />
          <ProfImg10 />
        </div>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>{`You `}</span>
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#8083ff] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Hey `}</span>
        <span className="text-[#0320f5]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Amanda Wakio
        </span>
        , could you please sort this out?
      </p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0">
      <Frame147 />
      <Frame148 />
    </div>
  );
}

function ProfImg11() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#b4bbee] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[56px] pr-0 py-0 relative w-full">
          <Frame149 />
          <ProfImg11 />
        </div>
      </div>
    </div>
  );
}

function Tag9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle16() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle16 />
    </div>
  );
}

function ChartSimple1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chart-simple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chart-simple">
          <path d={svgPaths.p156e4900} fill="var(--fill-0, #E7A188)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle17() {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <ChartSimple1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed priority`}</span>
      </p>
      <SizeAndStyle17 />
    </div>
  );
}

function Spinner1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="spinner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="spinner">
          <path d={svgPaths.p1718c180} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle18() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Spinner1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed status`}</span>
      </p>
      <SizeAndStyle18 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` was added to the conversation`}</span>
      </p>
      <Frame150 />
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function ProfImg12() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio<span className="font-['Instrument_Sans:Italic',sans-serif] font-normal italic" style={{ fontVariationSettings: "'wdth' 100" }}>{` (internal)`}</span>
      </p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[160px]" />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[0px] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Sure thing `}</span>
        <span className="text-[#0320f5]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Jane Muthoni
        </span>
        , let me look into it
      </p>
    </div>
  );
}

function Frame156() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame154 />
      <Frame155 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg12 />
          <Frame156 />
        </div>
      </div>
    </div>
  );
}

function ProfImg13() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[12px] py-[8px] relative w-full">
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
            Hi Saito, Amanda from Technical Support here, the issue seems to stem from an incorrect configuration in your settings. Let me sort it out for you.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame157 />
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg13 />
          <Frame158 />
        </div>
      </div>
    </div>
  );
}

function Tag10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="tag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle19() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <Tag10 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle19 />
    </div>
  );
}

function ProfImg14() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function ChannelIcon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_17_9187)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p2a885700} fill="var(--fill-0, #364153)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_17_9187">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ChatChannel1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="chat_channel">
      <ChannelIcon14 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Saito Watanashi
        </span>
        <span>{` via`}</span>
      </p>
      <ChatChannel1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Good to hear!
      </p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <Frame159 />
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[56px] py-0 relative w-full">
          <ProfImg14 />
          <Frame160 />
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-center justify-end max-w-[418px] min-h-px min-w-px relative shrink-0 w-full z-[2]">
      <Frame9 />
      <Frame10 />
      <Frame13 />
      <Frame153 />
      <Frame14 />
      <Frame11 />
      <Frame74 />
      <Frame12 />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="paperclip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="paperclip">
          <path d={svgPaths.p25c66f80} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame120() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <Paperclip />
    </div>
  );
}

function AiPencilFill() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ai-pencil-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ai-pencil-fill">
          <g id="Vector">
            <path d={svgPaths.p2f943480} fill="var(--fill-0, #7A7D7D)" />
            <path d={svgPaths.p2de75000} fill="var(--fill-0, #7A7D7D)" />
            <path d={svgPaths.p208c0b40} fill="var(--fill-0, #7A7D7D)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame161() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <AiPencilFill />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[203px]">
      <Frame120 />
      <Frame161 />
    </div>
  );
}

function PaperPlane() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="paper-plane">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="paper-plane">
          <path d={svgPaths.p47ef80} fill="var(--fill-0, #FAFAFA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle20() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[6px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Send</p>
      </div>
      <PaperPlane />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle20 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame130 />
      <Button />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal h-[26.376px] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type a comment
      </p>
      <Frame119 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip p-[8px] relative rounded-[12px] shrink-0 w-[419px]">
      <Frame118 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center p-[8px] relative w-full">
          <Frame64 />
        </div>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 bg-white content-stretch flex flex-col grow h-[800px] isolate items-center min-h-px min-w-px relative shrink-0">
      <Frame141 />
      <Frame88 />
      <Frame162 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full z-[1]">
      <Frame63 />
      <Frame65 />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Main">
      <Header />
      <Frame22 />
    </div>
  );
}

function Parent() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Parent">
      <ChatSidebar />
      <Main />
    </div>
  );
}

function MainWrapper() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Main-Wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center pl-0 pr-[8px] py-[8px] relative size-full">
          <Parent />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full">
      <Sidebar1 />
      <MainWrapper />
    </div>
  );
}

export default function ConversationsInbox() {
  return (
    <div className="bg-[#010a78] content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Conversations - Inbox">
      <Frame15 />
    </div>
  );
}