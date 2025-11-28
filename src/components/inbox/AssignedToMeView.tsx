import React from 'react';
import svgPaths from "../../imports/svg-iqh0hitjme";

function Icon() {
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

function Arrows({ onClick }: { onClick?: () => void }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px] cursor-pointer" data-name="Arrows" onClick={onClick}>
      <Icon />
    </div>
  );
}

function Icon1() {
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
      <Icon1 />
    </div>
  );
}

function Frame5({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Arrows onClick={onBack} />
      <Arrows1 />
    </div>
  );
}

function Icon2() {
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

function DashIcon() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[4px] relative shrink-0" data-name="Dash Icon">
      <Icon2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
      <DashIcon />
      <p className="font-['Instrument_Sans'] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned to me
      </p>
    </div>
  );
}

function Frame4({ onBack }: { onBack?: () => void }) {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <Frame5 onBack={onBack} />
      <Frame3 />
    </div>
  );
}

function Icon3() {
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

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Instrument_Sans'] font-bold leading-[1.2] relative shrink-0 text-[#1e2939] text-[20px] text-nowrap tracking-[0.1px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recents
      </p>
      <Icon3 />
    </div>
  );
}

// ... (Keeping all the small helper components but simplifying for brevity where possible, or just pasting them)
// Since the user wants "this design", I should be faithful.

function Icon4() {
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

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon4 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame10 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 12:56
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame12 />
    </div>
  );
}

function Icon5() {
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

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon5 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame22 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Yesterday, 11:02
      </p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        John Makacha
      </p>
      <Frame24 />
    </div>
  );
}

function Icon6() {
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

function Frame14() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Icon6 />
    </div>
  );
}

function Icon7() {
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

function Frame26() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon7 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame26 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Mon, 12:56
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +254 222 222 222
      </p>
      <Frame27 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame28 />
    </div>
  );
}

function Icon8() {
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

function Frame29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon8 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame29 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Fri, 12:56
      </p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +1 234 567 8901
      </p>
      <Frame30 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame31 />
    </div>
  );
}

function Icon9() {
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

function Frame32() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon9 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame32 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame33 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Icon10() {
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

function Frame35() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon10 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame35 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        20/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        +91 233 4223 442
      </p>
      <Frame36 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame37 />
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

function Frame38() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon11 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame38 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        19/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jason Stingo
      </p>
      <Frame39 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame40 />
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

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Icon12 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap text-right tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        12:22
      </p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative shrink-0 w-full">
      <Frame41 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#a9bcc6] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        18/01/2025, 12:56
      </p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#1e2939] text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pauline Nyaboke
      </p>
      <Frame42 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
      <Frame20 />
      <Frame19 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-center p-[16px] relative w-full">
          <Frame21 />
          <Frame44 />
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

function Frame6() {
  return (
    <div className="basis-0 bg-[#f1f4f6] content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <ClockRotateLeft />
      <p className="font-['Instrument_Sans'] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <Dialpad />
      <p className="font-['Instrument_Sans'] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[62px] items-center justify-center min-h-px min-w-px relative rounded-[8px] shrink-0">
      <UserGroup />
      <p className="font-['Instrument_Sans'] font-medium leading-[1.2] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Contacts
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f1f4f6] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center p-[8px] relative w-full">
          <Frame6 />
          <Frame8 />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function CallUi() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col items-center justify-between left-0 overflow-clip rounded-[15px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.12)] size-0 top-0" data-name="Call_UI">
      <Frame23 />
      <Frame9 />
    </div>
  );
}

function Icon13() {
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
      <Icon13 />
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

function Frame() {
  return (
    <div className="bg-[#f4f7f8] box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[999px] shrink-0">
      <Notifications />
    </div>
  );
}

function Group() {
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

function Logo() {
  return (
    <div className="h-[15.273px] relative shrink-0 w-[36px]" data-name="logo">
      <Group />
    </div>
  );
}

function AvatarPopoutOrgNo() {
  return (
    <div className="absolute bg-gray-100 box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[3px] py-[4px] right-0 rounded-[8px] size-[40px] top-0" data-name="Avatar-Popout/org/no">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Logo />
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <CallButton />
      <Frame />
      <AvatarPopout />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 content-stretch flex gap-[64px] grow items-center justify-end min-h-px min-w-px relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Header({ onBack }: { onBack?: () => void }) {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[64px] items-center justify-between p-[16px] relative w-full">
          <Frame4 onBack={onBack} />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

// Table Header Cells
function TableCellDateCreated() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[277px]" data-name="table_cell / date_created">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Conversation
      </p>
    </div>
  );
}

function TableCellDateCreated1() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[175px]" data-name="table_cell / date_created">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tracker ticket
      </p>
    </div>
  );
}

function TableCellDateCreated2() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[106px]" data-name="table_cell / date_created">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Status
      </p>
    </div>
  );
}

function TableCellAgentAssigned() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[106px]" data-name="table_cell / agent_assigned">
      <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Priority
      </p>
    </div>
  );
}

function TableCellDateCreated3() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center justify-end p-[8px] relative size-full">
          <p className="font-['Instrument_Sans'] font-semibold leading-[1.2] relative shrink-0 text-[#393939] text-[14px] text-nowrap tracking-[0.07px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            Labels
          </p>
        </div>
      </div>
    </div>
  );
}

function TableHeading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="table_heading">
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated1 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellAgentAssigned />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellDateCreated3 />
      </div>
    </div>
  );
}

// Row 1 Components
function ProfImg() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro'] font-semibold justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
      </div>
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
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-nowrap" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Issue with my account
      </p>
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned on 23, Jan 2025
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

function ConversationContainer() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Conversation Container">
      <Left />
    </div>
  );
}

function TableCellDateCreated4() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[277px]" data-name="table_cell / date_created">
      <ConversationContainer />
    </div>
  );
}

function TicketIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Ticket Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Ticket Icon">
          <path d={svgPaths.pe894e80} fill="var(--fill-0, #48BB79)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="External Link Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="External Link Icon">
          <path d={svgPaths.p2e8334f0} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle() {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TicketIcon />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WACC-20322OC
      </p>
      <ExternalLinkIcon />
    </div>
  );
}

function TableCellDateCreated5() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[175px]" data-name="table_cell / date_created">
      <SizeAndStyle />
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

function SizeAndStyle1() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <StatusIcon />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function TableCellDateCreated6() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[106px]" data-name="table_cell / date_created">
      <SizeAndStyle1 />
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

function SizeAndStyle2() {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center mr-[-4px] px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <PriorityIcon />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function TableCellAgentAssigned1() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[8px] pr-[12px] py-[8px] relative shrink-0 w-[106px]" data-name="table_cell / agent_assigned">
      <SizeAndStyle2 />
    </div>
  );
}

function LabelIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #E53E3E)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle3() {
  return (
    <div className="bg-[#f6cfcf] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <LabelIcon />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        billing
      </p>
    </div>
  );
}

function LabelIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="tag">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #EDCA4C)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle4() {
  return (
    <div className="bg-[#fcf6e9] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <LabelIcon1 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        account
      </p>
    </div>
  );
}

function LabelIcon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Label Icon">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #5A5ACD)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle5() {
  return (
    <div className="bg-[#d6daf6] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <LabelIcon2 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        auth
      </p>
    </div>
  );
}

function TableCellDateCreated7() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-end p-[8px] relative size-full">
          <SizeAndStyle3 />
          <SizeAndStyle4 />
          <SizeAndStyle5 />
        </div>
      </div>
    </div>
  );
}

function TableRow({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#fefefe] relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="table_row" onClick={onClick}>
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-row items-center self-stretch">
          <TableCellDateCreated4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableCellDateCreated5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableCellDateCreated6 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <TableCellAgentAssigned1 />
        </div>
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <TableCellDateCreated7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e4] border-[0px_0px_1px] border-solid bottom-[-0.5px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

// Row 2 Components
function ProfImg1() {
  return (
    <div className="bg-[#f1b2b2] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[999px] shrink-0 size-[24px]" data-name="prof-img">
      <div className="flex flex-col font-['Source_Sans_Pro'] font-semibold justify-center leading-[0] mix-blend-color-burn not-italic relative shrink-0 text-[#202121] text-[16px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">S</p>
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
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start leading-[1.2] min-h-px min-w-px relative shrink-0 text-[#7a7d7d] text-nowrap" data-name="msg-preview">
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-semibold overflow-ellipsis overflow-hidden relative shrink-0 text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Issue with my account
      </p>
      <p className="[white-space-collapse:collapse] font-['Instrument_Sans'] font-normal overflow-ellipsis overflow-hidden relative shrink-0 text-[12px] tracking-[0.06px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Assigned on 23, Jan 2025
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

function ConversationContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-end min-h-px min-w-px relative shrink-0" data-name="Conversation Container">
      <Left1 />
    </div>
  );
}

function TableCellDateCreated8() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[277px]" data-name="table_cell / date_created">
      <ConversationContainer1 />
    </div>
  );
}

function TicketIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Ticket Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Ticket Icon">
          <path d={svgPaths.pe894e80} fill="var(--fill-0, #48BB79)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function ExternalLinkIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="External Link Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="External Link Icon">
          <path d={svgPaths.p2e8334f0} fill="var(--fill-0, #B1B3B4)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle6() {
  return (
    <div className="bg-[#e9f4ec] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <TicketIcon1 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        WACC-20322OC
      </p>
      <ExternalLinkIcon1 />
    </div>
  );
}

function TableCellDateCreated9() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[175px]" data-name="table_cell / date_created">
      <SizeAndStyle6 />
    </div>
  );
}

function StatusIcon1() {
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

function SizeAndStyle7() {
  return (
    <div className="bg-[#e9ebfa] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <StatusIcon1 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        Escalated
      </p>
    </div>
  );
}

function TableCellDateCreated10() {
  return (
    <div className="box-border content-stretch flex gap-[14px] h-full items-center p-[8px] relative shrink-0 w-[106px]" data-name="table_cell / date_created">
      <SizeAndStyle7 />
    </div>
  );
}

function PriorityIcon1() {
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

function SizeAndStyle8() {
  return (
    <div className="bg-[#fcf4f2] box-border content-stretch flex gap-[2px] items-center justify-center mr-[-4px] px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <PriorityIcon1 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        High
      </p>
    </div>
  );
}

function TableCellAgentAssigned2() {
  return (
    <div className="box-border content-stretch flex h-full items-center pl-[8px] pr-[12px] py-[8px] relative shrink-0 w-[106px]" data-name="table_cell / agent_assigned">
      <SizeAndStyle8 />
    </div>
  );
}

function LabelIcon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Label Icon">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #48BB79)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle9() {
  return (
    <div className="bg-[#d0e9d8] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <LabelIcon3 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        settings
      </p>
    </div>
  );
}

function LabelIcon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Label Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Label Icon">
          <path d={svgPaths.p42f2600} fill="var(--fill-0, #DE6B20)" id="Primary" />
        </g>
      </svg>
    </div>
  );
}

function SizeAndStyle10() {
  return (
    <div className="bg-[#f4d5cc] box-border content-stretch flex gap-[2px] items-center justify-center px-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Size and Style">
      <LabelIcon4 />
      <p className="font-['Instrument_Sans'] font-normal leading-[1.2] relative shrink-0 text-[#404141] text-[12px] text-nowrap tracking-[0.06px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        notifications
      </p>
    </div>
  );
}

function TableCellDateCreated11() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="table_cell / date_created">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-end p-[8px] relative size-full">
          <SizeAndStyle9 />
          <SizeAndStyle10 />
        </div>
      </div>
    </div>
  );
}

function TableRow1({ onClick }: { onClick?: () => void }) {
  return (
    <div className="bg-[#fefefe] content-stretch flex items-center overflow-clip relative shrink-0 w-full cursor-pointer hover:bg-gray-50 transition-colors" data-name="table_row" onClick={onClick}>
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated8 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated9 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellDateCreated10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TableCellAgentAssigned2 />
      </div>
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <TableCellDateCreated11 />
      </div>
    </div>
  );
}

function Table({ onRowClick }: { onRowClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[1]" data-name="Table">
      <TableHeading />
      <TableRow onClick={onRowClick} />
      <TableRow1 onClick={onRowClick} />
    </div>
  );
}

interface AssignedToMeViewProps {
  onNavigateToConversation?: () => void;
}

export function AssignedToMeView({ onNavigateToConversation }: AssignedToMeViewProps) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] isolate items-center relative size-full bg-white overflow-auto" data-name="Main">
      <Header />
      <div className="w-full max-w-[1200px] px-8">
        <Table onRowClick={onNavigateToConversation} />
      </div>
    </div>
  );
}
