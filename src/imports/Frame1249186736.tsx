import svgPaths from "./svg-m6hlo16po4";
import imgAvatar from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import imgAvatar1 from "figma:asset/1087808c61b5959bad3ad6749c3f630d3770ba5a.png";

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

function Frame1() {
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

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[999px] size-full" src={imgAvatar} />
        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <AvatarPopoutNo />
      </button>
      <button className="block cursor-pointer relative rounded-[999px] shrink-0 size-[72px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[999px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar} />
          <img alt="" className="absolute max-w-none object-cover rounded-[999px] size-full" src={imgAvatar1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#e3e3e4] border-solid inset-0 pointer-events-none rounded-[999px]" />
        <AvatarPopoutNo1 />
      </button>
      <Frame1 />
    </div>
  );
}