import svgPaths from "./svg-wwyqvjxvdp";

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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        CONV2553-121
      </p>
      <Copy />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conversation ID
      </p>
      <Frame20 />
    </div>
  );
}

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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <Xmark />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white shrink-0 sticky top-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Frame14 />
          <Frame44 />
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[32px]">
      <Avatar />
    </div>
  );
}

function Frame16() {
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

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame8 />
      <Frame16 />
    </div>
  );
}

function Call() {
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

function Frame10() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <Call />
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

function Frame12() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <Ellipsis />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[8px] shrink-0 w-full">
      <Frame15 />
      <Frame19 />
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

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact details
      </p>
      <Frame17 />
    </div>
  );
}

function Profile() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="profile">
          <path d={svgPaths.pe21e800} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Profile />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Sama
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame21 />
      <Frame27 />
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

function Frame34() {
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

function Frame36() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        saitosama@gmail.com
      </p>
      <Copy1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Call1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="call">
          <path d={svgPaths.p34da7700} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Call1 />
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

function Frame38() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 700 112 233
      </p>
      <Copy2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame37 />
      <Frame38 />
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

function Frame39() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Briefcase />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Company
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        N/A
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[65px] relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[8px] relative w-full">
          <Frame18 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#edf1f4] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[8px] relative w-full">
          <Frame2 />
          <Frame3 />
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

function Frame41() {
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

function Frame42() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame4() {
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

function Frame45() {
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

function Frame7() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] h-[26px] items-center relative shrink-0 w-[154px]">
      <Avatar1 />
      <Avatar2 />
      <Avatar3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Keywords
      </p>
      <Frame7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] opacity-60 relative shrink-0 text-[#161a1c] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Next Steps
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#edf1f4] relative rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[8px] relative w-full">
          <Frame46 />
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

function Frame11() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#01f1b6] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[13.5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start p-[8px] relative w-full">
          <Frame43 />
          <Frame4 />
          <Frame45 />
          <Frame1 />
          <Frame5 />
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

function Frame47() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp2 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        More details
      </p>
      <Frame47 />
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

function Frame29() {
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

function Frame28() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Calendar />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Date recorded
      </p>
    </div>
  );
}

function SizeAndStyle() {
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
        <g clipPath="url(#clip0_30_2521)" id="comments">
          <path d={svgPaths.p2207f400} fill="var(--fill-0, #7A8890)" id="Primary" />
        </g>
        <defs>
          <clipPath id="clip0_30_2521">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <Comments />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] tracking-[0.06px] w-[96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Channel
      </p>
    </div>
  );
}

function ChannelIcon() {
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
      <ChannelIcon />
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

function Frame31() {
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

function Frame32() {
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

function Frame33() {
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
          <path d={svgPaths.p26921480} fill="var(--fill-0, #7682E1)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle1() {
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
          <path d={svgPaths.p26921480} fill="var(--fill-0, #E176CA)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle2() {
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

function SizeAndStyle3() {
  return (
    <div className="bg-[#edf1f4] box-border content-stretch flex gap-[4px] h-[23px] items-center p-[4px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <FilePdf />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Acc8823.pdf
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:5_/_2] content-start flex flex-wrap gap-[4px] h-[50px] items-start relative shrink-0">
      <SizeAndStyle1 />
      <SizeAndStyle2 />
      <SizeAndStyle3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[226px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border gap-[6px] grid grid-cols-[96px_minmax(0px,_1fr)] grid-rows-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_50px_minmax(0px,_1fr)] h-[226px] px-[4px] py-0 relative w-full">
          <Frame29 />
          <Avatar5 />
          <Frame28 />
          <SizeAndStyle />
          <Frame30 />
          <Avatar6 />
          <Frame31 />
          <Avatar7 />
          <Frame32 />
          <Avatar8 />
          <Frame33 />
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function TicketSummary() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[196px] items-start overflow-clip relative shrink-0 w-full" data-name="ticket_summary">
      <Frame48 />
      <Frame9 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="h-[748px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[748px] items-start px-[16px] py-[8px] relative w-full">
          <Tabs />
          <Frame />
          <Frame11 />
          <TicketSummary />
        </div>
      </div>
    </div>
  );
}

export default function ContactPane() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[6px] size-full" data-name="contact-pane">
      <Header />
      <Frame35 />
    </div>
  );
}