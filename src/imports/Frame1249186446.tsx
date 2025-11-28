import svgPaths from "./svg-ubi0zl9t5a";

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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 size-[32px]">
      <Avatar />
    </div>
  );
}

function Frame7() {
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

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame3 />
      <Frame7 />
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

function Frame4() {
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

function Frame5() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0">
      <Ellipsis />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[8px] shrink-0 w-full">
      <Frame6 />
      <Frame10 />
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

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[99px] shrink-0">
      <CaretUp />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#7a8890] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contact details
      </p>
      <Frame8 />
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

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Profile />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Name
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Saito Sama
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame12 />
      <Frame11 />
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

function Frame18() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Mail />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Email
      </p>
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

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="[white-space-collapse:collapse] basis-0 font-['Instrument_Sans:Regular',sans-serif] font-normal grow leading-[1.2] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        saitosama@gmail.com
      </p>
      <Copy />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col items-start relative shrink-0">
      <Frame18 />
      <Frame19 />
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

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Call1 />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Phone
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

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] overflow-ellipsis overflow-hidden relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 700 112 233
      </p>
      <Copy1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame20 />
      <Frame21 />
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

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Briefcase />
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#7a8890] text-[10px] text-nowrap tracking-[0.05px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Company
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#4f595e] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        N/A
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col items-start relative shrink-0">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[65px] relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-center p-[8px] relative w-full">
          <Frame9 />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#edf1f4] relative rounded-[12px] size-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-center p-[8px] relative size-full">
          <Frame1 />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}