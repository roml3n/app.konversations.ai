import svgPaths from "./svg-2jt5unvan9";
import imgAvatar from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgAvatar1 from "figma:asset/6b2783e74ab9b2a6563c98c754d7612971a58c91.png";
import imgAvatar2 from "figma:asset/2ef83be456edb6bed3f8eb9ac4a856f2ae5dbd41.png";
import imgAvatar3 from "figma:asset/1087808c61b5959bad3ad6749c3f630d3770ba5a.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="xmark">
        <div className="absolute inset-[24.99%]" data-name="Primary">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.0047 10.0047">
            <path d={svgPaths.p31847f10} fill="var(--fill-0, #7A7D7D)" id="Primary" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative size-full">
          <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[#121212] text-[18px] tracking-[0.09px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Connect an app
          </p>
          <Frame />
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
      <PopOver />
    </div>
  );
}

function PopOver1() {
  return <div className="absolute bg-white h-[4px] left-[6px] opacity-0 rounded-[8px] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.08)] top-[28px] w-[26px]" data-name="pop-over" />;
}

function AvatarPopoutNo1() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Avatar,popout=no">
      <PopOver1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#fefefe] content-stretch flex h-[24px] items-center justify-center left-1/2 rounded-[999px] top-1/2 w-[23px]">
      <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="overflow-clip relative shrink-0 size-[11.947px]" data-name="link">
        <div className="absolute inset-[13.26%_2.79%]" data-name="Primary">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2817 8.77952">
            <path d={svgPaths.p24d43c00} fill="var(--fill-0, #7A7D7D)" id="Primary" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <div className="absolute bg-black inset-0 rounded-[999px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar1} />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar2} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <AvatarPopoutNo />
      </button>
      <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar3} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <AvatarPopoutNo1 />
      </button>
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.2] relative shrink-0 w-full">
      <p className="font-['Instrument_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#121212] text-[18px] tracking-[0.09px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add HubSpot to Konvrsations
      </p>
      <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#5e6060] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        See CRM and support history side by side.
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative rounded-[8px] shrink-0 w-full">
      <Frame7 />
      <Frame4 />
    </div>
  );
}

function MainMainNavSearch() {
  return (
    <div className="bg-[#f4f7f8] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#d6d7ff] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px opacity-30 relative text-[#292f32] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainMainNavSearch1() {
  return (
    <div className="bg-[#f4f7f8] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#d6d7ff] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px relative text-[#292f32] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainMainNavSearch2() {
  return (
    <div className="bg-[#f4f7f8] h-[48px] relative rounded-[12px] shrink-0 w-full" data-name="Main/Main Nav-Search">
      <div aria-hidden="true" className="absolute border border-[#d6d7ff] border-solid inset-[-0.5px] pointer-events-none rounded-[12.5px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[12px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Regular',sans-serif] font-normal justify-end leading-[0] min-h-px min-w-px opacity-30 relative text-[#292f32] text-[14px] tracking-[0.07px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Input">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Label
        </p>
        <MainMainNavSearch />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Input">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Label
        </p>
        <MainMainNavSearch1 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[72px] items-start relative shrink-0 w-full" data-name="Input">
        <p className="font-['Instrument_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#777] text-[14px] tracking-[0.07px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          Label
        </p>
        <MainMainNavSearch2 />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
        <div className="bg-[#f4f7f8] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
          <div aria-hidden="true" className="absolute border border-[#e8edf0] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.08)]" />
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0320f5] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Cancel</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="button">
        <div className="bg-[#0320f5] content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[9px] relative rounded-[4px] shrink-0" data-name=".Size and Style">
          <div className="flex flex-col font-['Instrument_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[14px] tracking-[0.07px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[1.2]">Connect app</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="content-stretch flex flex-col items-start justify-between p-[16px] relative size-full">
        <Frame5 />
        <Frame6 />
      </div>
    </div>
  );
}

export default function DrawerExtensions3Cx() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-between overflow-clip relative rounded-[6px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] size-full" data-name="Drawer / Extensions / 3CX">
      <Header />
      <Frame2 />
    </div>
  );
}