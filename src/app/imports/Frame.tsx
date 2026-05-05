import svgPaths from "./svg-k0y6ciezy6";

function Xmark() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="xmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="xmark">
          <path d={svgPaths.p388d5580} fill="var(--fill-0, #7A7D7D)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Xmark />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[16px] relative w-full">
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#121212] text-[20px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Log conversation to CRM
          </p>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function PopOver() {
  return <div className="absolute bg-white h-[4px] left-[6px] opacity-0 rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] top-[28px] w-[26px]" data-name="pop-over" />;
}

function AvatarPopoutNo() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Avatar,popout=no">
      <div className="absolute flex flex-col font-['Source_Sans_Pro:SemiBold',sans-serif] justify-center leading-[0] left-[calc(50%+0.5px)] mix-blend-color-burn not-italic text-[#202121] text-[20px] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
      <PopOver />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#f1b2b2] relative rounded-[999px] shrink-0 size-[72px]" data-name="Avatar">
      <AvatarPopoutNo />
    </div>
  );
}

function ChannelIcon() {
  return (
    <div className="h-[12px] relative shrink-0 w-[11.947px]" data-name="channel-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_4251)" id="channel-icon">
          <path clipRule="evenodd" d={svgPaths.p1126f100} fill="var(--fill-0, #3DA067)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_38_4251">
            <rect fill="white" height="12" width="11.9472" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <ChannelIcon />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#3da067] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <SizeAndStyle />
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#121212] text-[18px] text-nowrap tracking-[0.09px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Issue with my account
      </p>
    </div>
  );
}

function CircleInfo() {
  return (
    <div className="relative shrink-0 size-[11.947px]" data-name="circle-info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="circle-info">
          <path d={svgPaths.p189fe900} fill="var(--fill-0, #5E6060)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
  return (
    <div className="bg-[rgba(34,34,34,0.1)] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <CircleInfo />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#5e6060] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        This will be logged as CONV2331
      </p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-between min-h-px min-w-px relative self-stretch shrink-0">
      <Frame21 />
      <SizeAndStyle1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-gradient-to-l from-[#f4d5cc] relative rounded-[8px] shrink-0 to-[#fcf4f2] w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
          <Avatar />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
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
        Search all contacts
      </p>
    </div>
  );
}

function SearchBarSidebar() {
  return (
    <div className="bg-[#f2f3f3] relative rounded-[8px] shrink-0 w-full" data-name="Search Bar/Sidebar">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between p-[6px] relative w-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function UserPlus() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user-plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_38_4245)" id="user-plus">
          <path d={svgPaths.p2868770} fill="var(--fill-0, #0320F5)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_38_4245">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SizeAndStyle2() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <UserPlus />
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Create new contact</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle2 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#bce5f3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aggie Kamau
      </p>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar2 />
      <Checkbox />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#b4bbee] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">A</p>
      </div>
    </div>
  );
}

function Avatar4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar3 />
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

function Checkbox1() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="bg-[#0320f5] rounded-[2px] shrink-0 size-[18px]" data-name="container" />
      <CheckSmall />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar4 />
      <Checkbox1 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#80d4eb] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function Avatar6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar5 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jacqueline Wandoe
      </p>
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar6 />
      <Checkbox2 />
    </div>
  );
}

function Avatar7() {
  return (
    <div className="bg-[#e29a9a] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function Avatar8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar7 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jane Kamau
      </p>
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar8 />
      <Checkbox3 />
    </div>
  );
}

function Avatar9() {
  return (
    <div className="bg-[#b6b6c3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">J</p>
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar9 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Joan Kibe
      </p>
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar10 />
      <Checkbox4 />
    </div>
  );
}

function Avatar11() {
  return (
    <div className="bg-[#e78f8f] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">N</p>
      </div>
    </div>
  );
}

function Avatar12() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar11 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nikki Kimeu
      </p>
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

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar12 />
      <Checkbox5 />
    </div>
  );
}

function Avatar13() {
  return (
    <div className="bg-[#bce5f3] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">P</p>
      </div>
    </div>
  );
}

function Avatar14() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar13 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar14 />
      <Checkbox6 />
    </div>
  );
}

function Avatar15() {
  return (
    <div className="bg-[#ebdb80] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">S</p>
      </div>
    </div>
  );
}

function Avatar16() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar15 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Samuel Baya
      </p>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar16 />
      <Checkbox7 />
    </div>
  );
}

function Avatar17() {
  return (
    <div className="bg-[#e78fd4] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[20px]" data-name="Avatar">
      <div className="flex flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-center leading-[0] mix-blend-color-burn relative shrink-0 text-[#202121] text-[12px] text-center tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">W</p>
      </div>
    </div>
  );
}

function Avatar18() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Avatar">
      <Avatar17 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#202121] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Wallace Mutuku
      </p>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-[4px] relative rounded-[100px] shrink-0" data-name="Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[18px]" data-name="container">
        <div aria-hidden="true" className="absolute border-2 border-[#4a5565] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full">
      <Avatar18 />
      <Checkbox8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative self-stretch shrink-0">
      <Frame5 />
      <Frame8 />
      <Frame11 />
      <Frame4 />
      <Frame6 />
      <Frame10 />
      <Frame9 />
      <Frame12 />
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Button />
      <Frame16 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full">
      <SearchBarSidebar />
      <Frame13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame18 />
      <Frame15 />
    </div>
  );
}

function SizeAndStyle3() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Cancel</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle3 />
    </div>
  );
}

function SizeAndStyle4() {
  return (
    <div className="bg-[#0320f5] box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
      <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] text-nowrap tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2] whitespace-pre">Log conversation</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[0px_1px_0px_0px_inset_rgba(255,255,255,0.25)]" />
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
      <SizeAndStyle4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
          <Frame20 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[6px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] size-full" data-name="Frame">
      <Header />
      <Frame17 />
    </div>
  );
}