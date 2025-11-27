import svgPaths from "./svg-h42hqalint";
import imgProfImg from "figma:asset/836289d6df84eab2ac2d1f2d0f1dcd527f30304d.png";

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
          <mask fill="white" id="path-1-inside-1_20_24013">
            <path d={svgPaths.p1d1d6d00} />
          </mask>
          <path d={svgPaths.p1d1d6d00} fill="var(--fill-0, white)" fillOpacity="0.1" />
          <path d={svgPaths.p3a50b680} fill="var(--stroke-0, white)" fillOpacity="0.05" mask="url(#path-1-inside-1_20_24013)" />
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

function Frame21() {
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
          <Frame21 />
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

function Frame20() {
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
          <Frame20 />
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

function Frame22() {
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
          <Frame22 />
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

function Frame23() {
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
          <Frame23 />
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

function Frame25() {
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
          <Frame25 />
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

function Frame26() {
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
          <Frame26 />
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

function Frame17() {
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
        <g id="inbox">
          <path d={svgPaths.p3de0180} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start opacity-[0.56] p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon8 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon8 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Messages
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame32 />
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
          <path d={svgPaths.p33dffe00} fill="var(--fill-0, #01B386)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DashIcon9() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[22px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon9 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mentions
      </p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#e3e3e4] relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame39 />
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
        <g id="user-tag">
          <path d={svgPaths.p2861adc0} fill="var(--fill-0, #7A8890)" id="Vector" />
        </g>
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

function Frame40() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0">
      <DashIcon10 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned to me
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative w-full">
          <Frame40 />
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            2
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame29 />
      <Frame28 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame48 />
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

function Frame18() {
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

function Frame101() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <Frame18 />
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

function Frame38() {
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

function Frame35() {
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

function Frame34() {
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

function Frame33() {
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

function Frame41() {
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

function Frame36() {
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

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <ChannelIcon6 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jira
      </p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start px-[36px] py-[8px] relative w-full">
          <Frame38 />
          <Frame35 />
          <Frame34 />
          <Frame33 />
          <Frame41 />
          <Frame36 />
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Items1() {
  return (
    <div className="bg-[#e8edf0] box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Items">
      <Frame101 />
      <Frame52 />
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

function Frame19() {
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

function Frame123() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <Frame19 />
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

function Frame102() {
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

function Frame103() {
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

function Frame104() {
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

function Frame105() {
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

function Frame106() {
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

function Frame107() {
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

function Frame108() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <SizeAndStyle6 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] items-start pl-[36px] pr-[12px] py-0 relative w-full">
          <Frame102 />
          <Frame103 />
          <Frame104 />
          <Frame105 />
          <Frame106 />
          <Frame107 />
          <Frame108 />
        </div>
      </div>
    </div>
  );
}

function Items2() {
  return (
    <div className="bg-[#e8edf0] box-border content-stretch flex flex-col gap-[8px] items-start px-0 py-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Items">
      <Frame123 />
      <Frame49 />
    </div>
  );
}

function Frame100() {
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
        <Frame66 />
        <Frame100 />
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

function Frame16() {
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
        Mentions
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame16 />
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

function Frame69() {
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

function Frame58() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon15 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame58 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 12:56
      </p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame59 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame60 />
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

function Frame72() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon16 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame72 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 11:02
      </p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
      <Frame73 />
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

function Frame62() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame74 />
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

function Frame75() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon18 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame75 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon, 12:56
      </p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 222 222 222
      </p>
      <Frame76 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame79 />
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

function Frame80() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon19 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame80 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri, 12:56
      </p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 234 567 8901
      </p>
      <Frame81 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame82 />
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

function Frame83() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon20 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame83 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame84 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame85 />
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

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon21 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame86 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +91 233 4223 442
      </p>
      <Frame87 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame88 />
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

function Frame90() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon22 />
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
        19/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jason Stingo
      </p>
      <Frame91 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame92 />
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

function Frame93() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon23 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame93 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        18/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame94 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame95 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame61 />
      <Frame62 />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame89 />
      <Frame68 />
      <Frame67 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Frame69 />
          <Frame96 />
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

function Frame54() {
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

function Frame51() {
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

function Frame50() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <UserGroup />
      <p className="font-['Instrument_Sans:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contacts
      </p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame54 />
          <Frame51 />
          <Frame50 />
        </div>
      </div>
    </div>
  );
}

function CallUi() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
      <Frame71 />
      <Frame57 />
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
          <Frame15 />
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function ItemIcon() {
  return (
    <div className="relative size-[14px]" data-name="Item Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-right">
          <path d={svgPaths.p98dc900} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ItemContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Item Container">
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#5e6060] text-[14px] text-nowrap whitespace-pre">Open</p>
      <div className="flex items-center justify-center relative shrink-0 size-[14px]" style={{ "--transform-inner-width": "13.984375", "--transform-inner-height": "13.984375" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <ItemIcon />
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

function Frame53() {
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
    <div className="bg-white box-border content-stretch flex gap-px items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Channel Selector">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Frame53 />
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
          <ItemContainer />
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

function ProfileImageContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0" data-name="Profile Image Container">
      <ProfImg />
    </div>
  );
}

function MsgPreview() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#404141] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chat with @leeroyjenkins
      </p>
      <p className="-webkit-box leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#58aec6] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`@Jane Muthoni `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#7a7d7d] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          and
        </span>{" "}
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#7a7d7d] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Nikki Kimeu you should align with the Sales team so you can
        </span>
      </p>
    </div>
  );
}

function Left() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <ProfileImageContainer />
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

function MessageMetadata() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0" data-name="Message Metadata">
      <ChannelIcon7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        now
      </p>
    </div>
  );
}

function MessageInnerWrapper() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <Left />
      <div className="flex flex-row items-end self-stretch">
        <MessageMetadata />
      </div>
    </div>
  );
}

function MessageWrapper() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <MessageInnerWrapper />
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

function ProfileImageContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0" data-name="Profile Image Container">
      <ProfImg1 />
    </div>
  );
}

function MsgPreview1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-[12px] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Issue with my account
      </p>
      <p className="-webkit-box h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span>{`Sure thing `}</span>
        <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#58aec6] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          @Jane Muthoni
        </span>
        , let me look into it
      </p>
    </div>
  );
}

function Left1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <ProfileImageContainer1 />
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

function MessageMetadata1() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0" data-name="Message Metadata">
      <ChannelIcon8 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20m
      </p>
    </div>
  );
}

function MessageInnerWrapper1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <Left1 />
      <div className="flex flex-row items-end self-stretch">
        <MessageMetadata1 />
      </div>
    </div>
  );
}

function MessageWrapper1() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <MessageInnerWrapper1 />
        </div>
      </div>
    </div>
  );
}

function ProfImg2() {
  return (
    <div className="bg-[#c0f0a3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function ProfileImageContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0" data-name="Profile Image Container">
      <ProfImg2 />
    </div>
  );
}

function MsgPreview2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Internet problems
      </p>
      <div className="-webkit-box h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span>{`Hi `}</span>
          <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#58aec6] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            @Jane Muthoni
          </span>
          , I have an issue with my internet, it keeps going off
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

function Left2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="left">
      <ProfileImageContainer2 />
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

function MessageMetadata2() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0" data-name="Message Metadata">
      <ChannelIcon9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1d
      </p>
    </div>
  );
}

function MessageInnerWrapper2() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <Left2 />
      <div className="flex flex-row items-end self-stretch">
        <MessageMetadata2 />
      </div>
    </div>
  );
}

function MessageWrapper2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <MessageInnerWrapper2 />
        </div>
      </div>
    </div>
  );
}

function ProfImg3() {
  return (
    <div className="bg-[#f0efa3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        W
      </p>
    </div>
  );
}

function ProfileImageContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative self-stretch shrink-0" data-name="Profile Image Container">
      <ProfImg3 />
    </div>
  );
}

function MsgPreview3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 text-[#7a7d7d] tracking-[0.06px]" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] text-nowrap w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Internet problems
      </p>
      <div className="-webkit-box h-[29px] leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[0px] text-[12px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span>{`Hi, I have an issue with my internet, `}</span>
          <span className="font-['Instrument_Sans:Regular',sans-serif] font-normal text-[#58aec6] tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            @Jane Muthoni
          </span>
          <span>{` it keeps going off`}</span>
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

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-[162px]" data-name="left">
      <ProfileImageContainer3 />
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

function MessageMetadata3() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-between relative shrink-0" data-name="Message Metadata">
      <ChannelIcon10 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1d
      </p>
    </div>
  );
}

function MessageInnerWrapper3() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Message Inner Wrapper">
      <Left3 />
      <div className="flex flex-row items-end self-stretch">
        <MessageMetadata3 />
      </div>
    </div>
  );
}

function MessageWrapper3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Message Wrapper">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[4px] items-start p-[8px] relative w-full">
          <MessageInnerWrapper3 />
        </div>
      </div>
    </div>
  );
}

function MessageContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Message Content">
      <MessageWrapper />
      <MessageWrapper1 />
      <MessageWrapper2 />
      <MessageWrapper3 />
    </div>
  );
}

function MessageContainer() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Message Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-0 px-[16px] relative size-full">
          <MessageContent />
        </div>
      </div>
    </div>
  );
}

function SidebarContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Sidebar Content">
      <Items3 />
      <MessageContainer />
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

function SidebarContainer() {
  return (
    <div className="h-full max-w-[324px] min-w-[234px] relative shrink-0 w-[234px]" data-name="Sidebar Container">
      <div className="box-border content-stretch flex flex-col gap-[24px] h-full items-center max-w-inherit min-w-inherit overflow-clip pb-[24px] pt-0 px-0 relative rounded-[inherit] w-[234px]">
        <SidebarContent />
        <SizeAndStyle7 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chart-simple">
          <path d={svgPaths.p3d6ec2d0} fill="var(--fill-0, #FF8904)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon26 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="spinner">
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #8083FF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <Icon27 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <SizeAndStyle8 />
      <SizeAndStyle9 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="tag">
          <path d={svgPaths.p2b8aca00} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0">
      <Icon28 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="user-plus">
          <path d={svgPaths.pc4343c0} fill="var(--fill-0, #99A1AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame78() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[400px] shrink-0">
      <Icon29 />
    </div>
  );
}

function SizeAndStyle10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[4px] h-[26px] items-center justify-center px-[6px] py-[4px] relative rounded-[88px] shrink-0" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#364153] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assign
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame77 />
      <Frame78 />
      <SizeAndStyle10 />
    </div>
  );
}

function ChatHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="chat-header">
      <div aria-hidden="true" className="absolute border-[#d1d5dc] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Frame55 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function TagIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E2C148)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle11() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">account</p>
    </div>
  );
}

function TagIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle12() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon1 />
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#404141] text-[12px] text-nowrap whitespace-pre">auth</p>
    </div>
  );
}

function DetailsTagsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Details Tags Container">
      <SizeAndStyle11 />
      <SizeAndStyle12 />
    </div>
  );
}

function DetailsContent() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Details Content">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[16px] items-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#202121] text-[18px] text-nowrap whitespace-pre">Issue with my account</p>
          <DetailsTagsContainer />
        </div>
      </div>
    </div>
  );
}

function DetailsHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[3]" data-name="Details Header">
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid bottom-[-1px] left-0 pointer-events-none right-0 top-0" />
      <ChatHeader />
      <DetailsContent />
    </div>
  );
}

function ProfImg4() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function ChannelIcon11() {
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
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Chat Channel">
      <ChannelIcon11 />
      <p className="font-['Source_Sans_Pro:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap whitespace-pre">WhatsApp</p>
    </div>
  );
}

function ConversationMetadata() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Conversation Metadata">
      <p className="font-['Source_Sans_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap whitespace-pre">
        <span className="font-['Source_Sans_Pro:SemiBold',sans-serif]">Saito Watanashi</span>
        <span>{` via`}</span>
      </p>
      <ChatChannel />
    </div>
  );
}

function FileAttachmentIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="File Attachment Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p26921480} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function FileAttachmentContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="File Attachment Container">
      <FileAttachmentIcon />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        DSC-20240423092342.png
      </p>
    </div>
  );
}

function SizeAndStyle13() {
  return (
    <div className="bg-[#fefefe] relative rounded-[88px] shrink-0 w-full" data-name="Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[88px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[6px] py-[4px] relative w-full">
          <FileAttachmentContainer />
          <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            123KB
          </p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function ConversationTextContainer() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Conversation Text Container">
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
          <SizeAndStyle13 />
        </div>
      </div>
    </div>
  );
}

function ConversationContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Conversation Content">
      <ConversationMetadata />
      <ConversationTextContainer />
    </div>
  );
}

function ConversationHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Conversation Header">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[8px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg4 />
          <ConversationContent />
        </div>
      </div>
    </div>
  );
}

function ReplyMetadata() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reply Metadata">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        You
      </p>
    </div>
  );
}

function ReplyTextContainer() {
  return (
    <div className="bg-[#d6d7ff] relative rounded-[16px] shrink-0 w-full" data-name="Reply Text Container">
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

function ReplyContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Reply Content">
      <ReplyMetadata />
      <ReplyTextContainer />
    </div>
  );
}

function ProfImg5() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#b4bbee] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function ReplyContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Reply Container">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[36px] pr-0 py-0 relative w-full">
          <ReplyContent />
          <ProfImg5 />
        </div>
      </div>
    </div>
  );
}

function InternalNoteMetadata() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Internal Note Metadata">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>{`You `}</span>
        <span className="font-['Instrument_Sans:Italic',sans-serif] italic" style={{ fontVariationSettings: "'wdth' 100" }}>
          (internal)
        </span>
      </p>
    </div>
  );
}

function InternalNoteTextContainer() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Internal Note Text Container">
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

function InternalNoteContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="Internal Note Content">
      <InternalNoteMetadata />
      <InternalNoteTextContainer />
    </div>
  );
}

function ProfImg6() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
        <div className="absolute bg-[#b4bbee] inset-0 rounded-[999px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[999px] size-full" src={imgProfImg} />
      </div>
    </div>
  );
}

function InternalNoteContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Internal Note Container">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start justify-end pl-[56px] pr-0 py-0 relative w-full">
          <InternalNoteContent />
          <ProfImg6 />
        </div>
      </div>
    </div>
  );
}

function TagIcon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle14() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function ConversationUpdateContent() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Conversation Update Content">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle14 />
    </div>
  );
}

function PriorityIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Priority Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chart-simple">
          <path d={svgPaths.p156e4900} fill="var(--fill-0, #E7A188)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle15() {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <PriorityIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function PriorityUpdateContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Priority Update Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed priority`}</span>
      </p>
      <SizeAndStyle15 />
    </div>
  );
}

function StatusIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Status Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="spinner">
          <path d={svgPaths.p1718c180} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle16() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <StatusIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function StatusUpdateContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Status Update Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Jane Muthoni
        </span>
        <span>{` changed status`}</span>
      </p>
      <SizeAndStyle16 />
    </div>
  );
}

function ConversationUpdateContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-full" data-name="Conversation Update Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` was added to the conversation`}</span>
      </p>
      <ConversationUpdateContent />
      <PriorityUpdateContainer />
      <StatusUpdateContainer />
    </div>
  );
}

function ProfImg7() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function InternalNoteMetadata1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Internal Note Metadata">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio<span className="font-['Instrument_Sans:Italic',sans-serif] font-normal italic" style={{ fontVariationSettings: "'wdth' 100" }}>{` (internal)`}</span>
      </p>
    </div>
  );
}

function InternalNoteTextContainer1() {
  return (
    <div className="bg-[#fcfcfc] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Internal Note Text Container">
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

function InternalNoteContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Internal Note Content">
      <InternalNoteMetadata1 />
      <InternalNoteTextContainer1 />
    </div>
  );
}

function InternalNoteContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Internal Note Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg7 />
          <InternalNoteContent1 />
        </div>
      </div>
    </div>
  );
}

function ProfImg8() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">A</p>
      </div>
    </div>
  );
}

function ReplyMetadata1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reply Metadata">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Amanda Wakio
      </p>
    </div>
  );
}

function ReplyTextContainer1() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[16px] shrink-0 w-full" data-name="Reply Text Container">
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

function ReplyContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Reply Content">
      <ReplyMetadata1 />
      <ReplyTextContainer1 />
    </div>
  );
}

function ReplyContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Reply Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[36px] py-0 relative w-full">
          <ProfImg8 />
          <ReplyContent1 />
        </div>
      </div>
    </div>
  );
}

function TagIcon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Tag Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #8990DF)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle17() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TagIcon3 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
    </div>
  );
}

function ConversationUpdateContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-full" data-name="Conversation Update Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[0px] text-[12px] text-center text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'wdth' 100" }}>
          Amanda Wakio
        </span>
        <span>{` labelled this conversation`}</span>
      </p>
      <SizeAndStyle17 />
    </div>
  );
}

function ProfImg9() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[17px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
    </div>
  );
}

function ChannelIcon12() {
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
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Chat Channel">
      <ChannelIcon12 />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function ReplyMetadata2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reply Metadata">
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

function ReplyTextContainer2() {
  return (
    <div className="bg-[#f2f3f3] box-border content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[6px] relative rounded-[160px] shrink-0" data-name="Reply Text Container">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Good to hear!
      </p>
    </div>
  );
}

function ReplyContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Reply Content">
      <ReplyMetadata2 />
      <ReplyTextContainer2 />
    </div>
  );
}

function ReplyContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Reply Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[6px] items-start pl-0 pr-[56px] py-0 relative w-full">
          <ProfImg9 />
          <ReplyContent2 />
        </div>
      </div>
    </div>
  );
}

function ConversationContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full z-[2]" data-name="Conversation Container">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center justify-end px-[16px] py-0 relative size-full">
          <ConversationHeader />
          <ReplyContainer />
          <InternalNoteContainer />
          <ConversationUpdateContainer />
          <InternalNoteContainer1 />
          <ReplyContainer1 />
          <ConversationUpdateContainer1 />
          <ReplyContainer2 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#fefefe] box-border content-stretch flex gap-[3px] items-center justify-center px-[6px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#0320f5] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Reply
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="box-border content-stretch flex gap-[3px] items-center justify-center px-[6px] py-[2px] relative rounded-[200px] shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a7d7d] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>{`Private Comment `}</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#e3e3e4] box-border content-stretch flex gap-[2px] items-center p-[4px] relative rounded-[400px] shrink-0">
      <Frame7 />
      <Frame8 />
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

function Frame99() {
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

function Frame131() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[4px] relative rounded-[4px] shrink-0">
      <AiPencilFill />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[203px]">
      <Frame99 />
      <Frame131 />
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

function SizeAndStyle18() {
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
      <SizeAndStyle18 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame109 />
      <Button />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal h-[26.376px] leading-[1.2] relative shrink-0 text-[#a0a3a4] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Type a reply
      </p>
      <Frame98 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start justify-center p-[8px] relative w-full">
          <Frame6 />
          <Frame97 />
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="relative shrink-0 w-full z-[1]">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[8px] relative w-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function DetailsContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[800px] isolate items-start overflow-clip relative shrink-0 w-[435px]" data-name="Details Container">
      <DetailsHeader />
      <ConversationContainer />
      <Frame43 />
    </div>
  );
}

function ReactIconsFaRegCopy() {
  return (
    <div className="absolute aspect-[12/12] bottom-[10%] left-1/2 overflow-clip top-[10%] translate-x-[-50%]" data-name="react-icons/FaRegCopy">
      <div className="absolute bottom-0 left-[6.25%] right-[6.25%] top-0" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(169, 188, 198, 1)", "--stroke-0": "rgba(169, 188, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.p68a2700} fill="var(--fill-0, #A9BCC6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Copy() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="copy">
      <ReactIconsFaRegCopy />
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONV2553-121
      </p>
      <Copy />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conversation ID
      </p>
      <Frame116 />
    </div>
  );
}

function GoArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="GoArrowUpRight">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="GoArrowUpRight">
          <path d={svgPaths.p38a1ba80} fill="var(--fill-0, #5258FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle19() {
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

function Frame140() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <SizeAndStyle19 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[8px] py-[12px] relative w-full">
          <Frame110 />
          <Frame140 />
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

function TabContents() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-0 py-[8px] relative shrink-0" data-name="Tab Contents">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-center text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Summary</p>
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
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f595e] text-[14px] text-center text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Scores</p>
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

function TabGroup() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tab group">
      <TabBase />
      <TabBase1 />
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

function PopOver() {
  return <div className="absolute bg-white h-[4px] left-[6px] opacity-0 rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] top-[28px] w-[26px]" data-name="pop-over" />;
}

function AvatarPopoutNo() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Avatar,popout=no">
      <div className="absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] left-1/2 mix-blend-color-burn not-italic text-[#161a1c] text-[13px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[18px] whitespace-pre">S</p>
      </div>
      <PopOver />
    </div>
  );
}

function Avatar() {
  return (
    <div className="basis-0 bg-[#ffe2e2] grow min-h-px min-w-px relative rounded-[999px] shrink-0 w-full" data-name="Avatar">
      <AvatarPopoutNo />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[32px]">
      <Avatar />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[1.2] relative shrink-0 text-[12px] text-nowrap tracking-[0.06px] whitespace-pre">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold opacity-60 relative shrink-0 text-[#161a1c]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Sama
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal opacity-50 relative shrink-0 text-[#4f595e]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Found in 3 conversations
      </p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame44 />
      <Frame112 />
    </div>
  );
}

function Call1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <path d={svgPaths.p23476550} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <Call1 />
    </div>
  );
}

function Ellipsis() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ellipsis">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ellipsis">
          <path d={svgPaths.p37a64e80} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <Ellipsis />
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame46 />
      <Frame56 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[8px] shrink-0 w-full">
      <Frame111 />
      <Frame115 />
    </div>
  );
}

function CaretUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-up">
          <path d={svgPaths.p3ffeb080} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp />
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact details
      </p>
      <Frame113 />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="profile">
          <path d={svgPaths.p115592a0} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Profile />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Sama
      </p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame117 />
      <Frame132 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="mail">
          <path d={svgPaths.p37a7d980} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Mail />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
    </div>
  );
}

function ReactIconsFaRegCopy1() {
  return (
    <div className="absolute aspect-[12/12] bottom-[10%] left-1/2 overflow-clip top-[10%] translate-x-[-50%]" data-name="react-icons/FaRegCopy">
      <div className="absolute bottom-0 left-[6.25%] right-[6.25%] top-0" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(169, 188, 198, 1)", "--stroke-0": "rgba(169, 188, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.p68a2700} fill="var(--fill-0, #A9BCC6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Copy1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="copy">
      <ReactIconsFaRegCopy1 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        saitosama@gmail.com
      </p>
      <Copy1 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame133 />
      <Frame134 />
    </div>
  );
}

function Call2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="call">
          <path d={svgPaths.p160ae880} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Call2 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phone
      </p>
    </div>
  );
}

function ReactIconsFaRegCopy2() {
  return (
    <div className="absolute aspect-[12/12] bottom-[10%] left-1/2 overflow-clip top-[10%] translate-x-[-50%]" data-name="react-icons/FaRegCopy">
      <div className="absolute bottom-0 left-[6.25%] right-[6.25%] top-0" data-name="Vector">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(169, 188, 198, 1)", "--stroke-0": "rgba(169, 188, 198, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
            <path d={svgPaths.p68a2700} fill="var(--fill-0, #A9BCC6)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Copy2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="copy">
      <ReactIconsFaRegCopy2 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 700 112 233
      </p>
      <Copy2 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame135 />
      <Frame136 />
    </div>
  );
}

function Briefcase() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="briefcase">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="briefcase">
          <path d={svgPaths.p807e300} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Briefcase />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Company
      </p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        N/A
      </p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame137 />
      <Frame138 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[65px] relative shrink-0 w-[262px]">
      <Frame118 />
      <Frame119 />
      <Frame120 />
      <Frame121 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[8px] relative w-full">
          <Frame114 />
          <Frame122 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#edf1f4] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[8px] relative w-full">
          <Frame11 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function AiSparkles() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ai-sparkles">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ai-sparkles">
          <path clipRule="evenodd" d={svgPaths.p18b6e600} fill="url(#paint0_linear_17_9217)" fillOpacity="0.6" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_17_9217" x1="1.59913" x2="14.4009" y1="2.24579" y2="13.7542">
            <stop stopColor="#01F1B6" />
            <stop offset="1" stopColor="#0320F5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <AiSparkles />
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        AI Insights
      </p>
    </div>
  );
}

function CaretUp1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-up">
          <path d={svgPaths.p3ffeb080} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp1 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame139 />
      <Frame141 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative rounded-[8px] shrink-0 text-[12px] tracking-[0.06px] w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold opacity-60 relative shrink-0 text-[#161a1c] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Summary
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#4f595e] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula.
      </p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[1.2] relative rounded-[8px] shrink-0 text-[12px] tracking-[0.06px] w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold opacity-60 relative shrink-0 text-[#161a1c] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Primary Topic
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#4f595e] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Lorem ipsum dolor sit
      </p>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex gap-[8px] items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5258fe] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        PIN
      </p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex gap-[8px] items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5258fe] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Credit
      </p>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#e9e9ff] box-border content-stretch flex gap-[8px] items-center px-[6px] py-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5258fe] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Account
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] h-[26px] items-center relative shrink-0 w-[154px]">
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Keywords
      </p>
      <Frame30 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next Steps
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#edf1f4] relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <Frame144 />
          <ul className="block font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#4f595e] text-[12px] tracking-[0.06px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <li className="mb-0 ms-[18px]">
              <span className="leading-[1.2]">step 1</span>
            </li>
            <li className="mb-0 ms-[18px]">
              <span className="leading-[1.2]">step 2</span>
            </li>
            <li className="ms-[18px]">
              <span className="leading-[1.2]">step 3</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#01f1b6] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <Frame142 />
          <Frame13 />
          <Frame143 />
          <Frame10 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function CaretUp2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="caret-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="caret-up">
          <path d={svgPaths.p3ffeb080} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp2 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        More details
      </p>
      <Frame145 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="profile">
          <path d={svgPaths.p938b100} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame125() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Profile1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assignee
      </p>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#7ba7f9] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[14px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#161a1c] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function Avatar5() {
  return (
    <div className="[grid-area:1_/_2] bg-[#edf1f4] box-border content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <Avatar4 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jane Kamau
      </p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="calendar">
          <path d={svgPaths.p2ffbcb00} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame124() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Calendar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Date recorded
      </p>
    </div>
  );
}

function SizeAndStyle20() {
  return (
    <div className="[grid-area:2_/_2] bg-[#edf1f4] box-border content-stretch flex gap-[4px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#089d44] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 August, 2025 3:12PM
      </p>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Comments() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="comments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_17_9302)" id="comments">
          <path d={svgPaths.p2207f400} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_17_9302">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Comments />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Channel
      </p>
    </div>
  );
}

function ChannelIcon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <path d={svgPaths.p23476550} fill="var(--fill-0, #FF6900)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="[grid-area:3_/_2] bg-[#edf1f4] box-border content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <ChannelIcon13 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#ff6900] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Call
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="spinner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="spinner">
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="[grid-area:4_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Spinner />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
    </div>
  );
}

function Spinner1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="spinner">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="spinner">
          <path d={svgPaths.p3c9a6400} fill="var(--fill-0, #5258FE)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Avatar7() {
  return (
    <div className="[grid-area:4_/_2] bg-[#edf1f4] box-border content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <Spinner1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5258fe] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function Ticket() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ticket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ticket">
          <path d={svgPaths.p13fa1900} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame128() {
  return (
    <div className="[grid-area:6_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Ticket />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tracker ticket
      </p>
    </div>
  );
}

function Ticket1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ticket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ticket">
          <path d={svgPaths.p13fa1900} fill="var(--fill-0, #01B386)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="[grid-area:6_/_2] bg-[#edf1f4] box-border content-stretch flex gap-[4px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Avatar">
      <Ticket1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#01b386] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Create a tracker ticket
      </p>
    </div>
  );
}

function File() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file">
          <path d={svgPaths.p2470180} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame129() {
  return (
    <div className="[grid-area:5_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <File />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Attachments
      </p>
    </div>
  );
}

function FileImage() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p114c100} fill="var(--fill-0, #7682E1)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle21() {
  return (
    <div className="bg-[#edf1f4] box-border content-stretch flex gap-[4px] h-[23px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <FileImage />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        DCS2337734899...12.jpg
      </p>
    </div>
  );
}

function FileImage1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-image">
          <path d={svgPaths.p114c100} fill="var(--fill-0, #E176CA)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle22() {
  return (
    <div className="bg-[#edf1f4] box-border content-stretch flex gap-[4px] h-[23px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <FileImage1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        img12.png
      </p>
    </div>
  );
}

function FilePdf() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-pdf">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-pdf">
          <path d={svgPaths.p3712a400} fill="var(--fill-0, #18AF33)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle23() {
  return (
    <div className="bg-[#edf1f4] box-border content-stretch flex gap-[4px] h-[23px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <FilePdf />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acc8823.pdf
      </p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="[grid-area:5_/_2] content-start flex flex-wrap gap-[4px] h-[50px] items-start relative shrink-0">
      <SizeAndStyle21 />
      <SizeAndStyle22 />
      <SizeAndStyle23 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border gap-[6px] grid grid-cols-[96px_minmax(0px,_1fr)] grid-rows-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_50px_minmax(0px,_1fr)] h-[226px] px-[4px] py-0 relative shrink-0 w-[287px]">
      <Frame125 />
      <Avatar5 />
      <Frame124 />
      <SizeAndStyle20 />
      <Frame126 />
      <Avatar6 />
      <Frame127 />
      <Avatar7 />
      <Frame128 />
      <Avatar8 />
      <Frame129 />
      <Frame70 />
    </div>
  );
}

function TicketSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[196px] items-start overflow-clip relative shrink-0 w-full" data-name="ticket_summary">
      <Frame146 />
      <Frame45 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative size-full">
          <Tabs />
          <Frame9 />
          <Frame47 />
          <TicketSummary />
        </div>
      </div>
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="caret-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="caret-right">
          <path d={svgPaths.p98dc900} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute bg-[#fbfcfd] box-border content-stretch flex gap-[10px] items-center left-[-11px] p-[4px] rounded-[99px] top-[62px]">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[99px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]" />
      <CaretRight />
    </div>
  );
}

function ContactPane() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[800px] items-start relative shrink-0 w-[311px]" data-name="contact-pane">
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_1px] border-gray-200 border-solid bottom-0 left-[-1px] pointer-events-none right-0 top-0" />
      <Header1 />
      <Frame130 />
      <Frame31 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="Content Container">
      <SidebarContainer />
      <DetailsContainer />
      <ContactPane />
    </div>
  );
}

function Main() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full isolate items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Main">
      <Header />
      <ContentContainer />
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

function MainContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-between min-h-px min-w-px relative shrink-0 w-full" data-name="Main Container">
      <Sidebar1 />
      <MainWrapper />
    </div>
  );
}

export default function ConversationsMentions() {
  return (
    <div className="bg-[#010a78] content-stretch flex flex-col gap-[10px] items-start relative size-full" data-name="Conversations - Mentions">
      <MainContainer />
    </div>
  );
}